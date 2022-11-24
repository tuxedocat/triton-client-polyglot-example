#!/usr/bin/env python3
import numpy as np
import numpy.typing as npt
from pathlib import Path
from tritonclient.utils import np_to_triton_dtype, triton_to_np_dtype
import tritonclient.grpc as triton_client
from io import BytesIO
import base64
import typer
import logging
from typing import Tuple, List, Optional
from pathlib import Path
from PIL import Image
from scipy.spatial.distance import cosine

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__file__)


def get_clip_embs(
    endpoint: str,
    image_path: Path = typer.Option(Path("input.png"), help="input image"),
    input_text: str = typer.Option("hello猫"),
    batch_size: int = typer.Option(8),
) -> Tuple[npt.NDArray, npt.NDArray]:
    img = Image.open(image_path).convert("RGB")
    with BytesIO() as f:
        img.save(f, "png")
        f.seek(0)
        b64img = base64.b64encode(f.read())
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
        txt_emb = response.as_numpy("TEXT_EMB")
        img_emb = response.as_numpy("IMAGE_EMB")
    logger.info(f"Shape: {txt_emb.shape, img_emb.shape}")
    logger.info(f"Cosine Similarity: {1 - cosine(txt_emb[0], img_emb[0])}")
    return txt_emb, img_emb


if __name__ == "__main__":
    typer.run(get_clip_embs)
