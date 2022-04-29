import { Sharp } from 'sharp'
import { create, all } from 'mathjs'
import { InferTensorContents } from './generated/inference/InferTensorContents'
import {
  ModelInferResponse,
  _inference_ModelInferResponse_InferOutputTensor,
} from './generated/inference/ModelInferResponse'

const config = {}
const math = create(all, config)

export const TritonTensorUtil = {
  /**
   * Convert string to UTF-8 encoded buffer
   */
  fromString(s: string): Buffer {
    return Buffer.from(new TextEncoder().encode(s).buffer)
  },

  /**
   * Convert image buffer to unsigned int array of shape [H, W, C]
   */
  fromImageBuffer(imgBuf: ArrayBufferLike, height: number, width: number, channels: number): number[][][] {
    const collapsedImg = math.matrix(Array.from(new Uint8ClampedArray(imgBuf)), 'dense')
    const mat = math.reshape(collapsedImg, [height, width, channels]) as unknown as math.Matrix
    return mat.toArray() as unknown as number[][][]
  },
}

export const TritonInputFactory = {
  text(name: string, s: string): InferTensorContents {
    const obj = {
      name,
      datatype: 'BYTES',
      shape: [1, 1],
      contents: {
        bytes_contents: [TritonTensorUtil.fromString(s)],
      },
    } as InferTensorContents
    return obj
  },

  async image(name: string, img: Sharp): Promise<InferTensorContents> {
    const { data, info } = await img.removeAlpha().raw().toBuffer({ resolveWithObject: true })
    const imgBuf = data.buffer
    const obj = {
      name,
      datatype: 'UINT8',
      shape: [1, info.height, info.width, info.channels],
      contents: {
        uint8_contents: [TritonTensorUtil.fromImageBuffer(imgBuf, info.height, info.width, info.channels)],
      },
    } as InferTensorContents
    return obj
  },
}
export interface TritonInferenceOutput {
  name: string
  value: number
}

export const TritonOutputParser = {
  /**
   * Parse FP32 output array such as regression models
   */
  getFloats(response: ModelInferResponse): TritonInferenceOutput[] {
    const outputDefs = response.outputs as _inference_ModelInferResponse_InferOutputTensor[]
    const outputBuffer = response.raw_output_contents as Buffer[]
    const parsedFp32 = outputDefs.map((e, i) => {
      return { name: e.name ?? '', value: outputBuffer[i].readFloatLE(0) }
    })
    return parsedFp32 ?? []
  },
}
