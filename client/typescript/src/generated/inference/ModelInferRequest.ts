// Original file: proto/grpc_service.proto

import type {
  InferParameter as _inference_InferParameter,
  InferParameter__Output as _inference_InferParameter__Output,
} from '../inference/InferParameter'
import type {
  InferTensorContents as _inference_InferTensorContents,
  InferTensorContents__Output as _inference_InferTensorContents__Output,
} from '../inference/InferTensorContents'
import type { Long } from '@grpc/proto-loader'

export interface _inference_ModelInferRequest_InferInputTensor {
  name?: string
  datatype?: string
  shape?: (number | string | Long)[]
  parameters?: { [key: string]: _inference_InferParameter }
  contents?: _inference_InferTensorContents | null
}

export interface _inference_ModelInferRequest_InferInputTensor__Output {
  name: string
  datatype: string
  shape: string[]
  parameters: { [key: string]: _inference_InferParameter__Output }
  contents: _inference_InferTensorContents__Output | null
}

export interface _inference_ModelInferRequest_InferRequestedOutputTensor {
  name?: string
  parameters?: { [key: string]: _inference_InferParameter }
}

export interface _inference_ModelInferRequest_InferRequestedOutputTensor__Output {
  name: string
  parameters: { [key: string]: _inference_InferParameter__Output }
}

export interface ModelInferRequest {
  model_name?: string
  model_version?: string
  id?: string
  parameters?: { [key: string]: _inference_InferParameter }
  inputs?: _inference_ModelInferRequest_InferInputTensor[]
  outputs?: _inference_ModelInferRequest_InferRequestedOutputTensor[]
  raw_input_contents?: (Buffer | Uint8Array | string)[]
}

export interface ModelInferRequest__Output {
  model_name: string
  model_version: string
  id: string
  parameters: { [key: string]: _inference_InferParameter__Output }
  inputs: _inference_ModelInferRequest_InferInputTensor__Output[]
  outputs: _inference_ModelInferRequest_InferRequestedOutputTensor__Output[]
  raw_input_contents: Buffer[]
}
