#!/usr/bin/env python3
import numpy as np
import numpy.typing as npt
from pathlib import Path
import tritonclient.grpc as triton_client
from io import BytesIO
import base64
import typer
import logging
from typing import Tuple, List, Optional
from pathlib import Path
from PIL import Image

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__file__)


def get_clip_embs(
    endpoint: str,
    image_path: Path = typer.Option(Path("input.png"), help="input image"),
    input_text: str = typer.Option("hello猫"),
    batch_size: int = typer.Option(8),
) -> Tuple[npt.NDArray, npt.NDArray]:
    img = Image.open(image_path).convert("RGB")
    # 少し迂遠ですがTriton側の型に合わせるため画像をBASE64エンコードし文字列に変換します。
    # Pillowは `data:image/png,` のMIME文字列をサポートしないので入っている場合は削除しておきましょう。
    with BytesIO() as f:
        img.save(f, "png")
        f.seek(0)
        b64img = base64.b64encode(f.read())
    # この例では意味はありませんが、Triton側のモデルはミニバッチ推論に対応しているので
    #   単純に同じ事例を複製してミニバッチを構成しています。
    # 実用時には推論パフォーマンスとペイロードサイズとの兼ね合いでバッチサイズを調整します。
    img_batch = (
        np.array([b64img for i in range(batch_size)]).astype(np.bytes_).reshape([-1, 1])
    )
    txt = np.array([bytes(input_text, encoding="utf-8")], dtype=np.bytes_)
    txt_batch = txt[np.newaxis, :]
    txt_batch = np.repeat(txt_batch, batch_size, axis=0)
    img_input = triton_client.InferInput("BASE64IMAGE", img_batch.shape, "BYTES")
    img_input.set_data_from_numpy(img_batch)
    txt_input = triton_client.InferInput("TEXT", txt_batch.shape, "BYTES")
    txt_input.set_data_from_numpy(txt_batch)
    inputs = [img_input, txt_input]
    with triton_client.InferenceServerClient(endpoint) as client:
        response = client.infer("clip", inputs, outputs=None)
        result = response.get_response()
        # PythonのtritonclientはこのようにNumpy arrayに変換してくれます。
        # 一方、JavaScriptのようにgRPCからclientを生成する場合は
        #  `response.outputs` にあるそれぞれの出力の型に応じて
        #  `response.raw_output_contents` を適宜 decodeする必要があります。
        txt_emb = response.as_numpy("TEXT_EMB")
        img_emb = response.as_numpy("IMAGE_EMB")
    logger.info(f"Shape: {txt_emb.shape, img_emb.shape}")
    logger.info(
        f"Cosine Similarity: {np.dot(txt_emb[0], img_emb[0])/(np.linalg.norm(txt_emb[0])*np.linalg.norm(img_emb[0]))}"
    )
    return txt_emb, img_emb


if __name__ == "__main__":
    typer.run(get_clip_embs)
