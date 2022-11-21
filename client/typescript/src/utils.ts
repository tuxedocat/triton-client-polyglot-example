import { Sharp } from 'sharp'
import { InferInputTensor, InferOutputTensor, InferTensorContents, ModelInferResponse } from '.'

export const TritonTensorUtil = {
  /**
   * Convert string to UTF-8 encoded buffer
   */
  fromString(s: string): Buffer {
    return Buffer.from(new TextEncoder().encode(s).buffer)
  },

  /**
   * Convert image buffer to unsigned int array of shape [H, W, C] but flattened
   */
  fromImageBuffer(imgBuf: ArrayBufferLike): number[] {
    return Array.from(new Uint8ClampedArray(imgBuf))
  },
}

export const TritonInputFactory = {
  text(name: string, s: string): InferInputTensor {
    const tensor = {
      name,
      datatype: 'BYTES',
      shape: [1, 1],
      contents: {
        bytes_contents: [TritonTensorUtil.fromString(s)],
      } as InferTensorContents,
    } as InferInputTensor
    return tensor
  },

  async image(name: string, img: Sharp): Promise<InferInputTensor> {
    const { data, info } = await img.removeAlpha().raw().toBuffer({ resolveWithObject: true })
    const imgBuf = data.buffer
    const tensor = {
      name,
      datatype: 'UINT8',
      shape: [1, info.height, info.width, info.channels],
      contents: {
        uint_contents: TritonTensorUtil.fromImageBuffer(imgBuf),
      } as InferTensorContents,
    } as InferInputTensor
    return tensor
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
    const outputDefs = response.outputs as InferOutputTensor[]
    const outputBuffer = response.raw_output_contents as Buffer[]
    const parsedFp32 = outputDefs.map((e, i) => {
      return { name: e.name ?? '', value: outputBuffer[i].readFloatLE(0) }
    })
    return parsedFp32 ?? []
  },
}
