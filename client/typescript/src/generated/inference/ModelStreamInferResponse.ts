// Original file: proto/grpc_service.proto

import type {
  ModelInferResponse as _inference_ModelInferResponse,
  ModelInferResponse__Output as _inference_ModelInferResponse__Output,
} from '../inference/ModelInferResponse'

export interface ModelStreamInferResponse {
  error_message?: string
  infer_response?: _inference_ModelInferResponse | null
}

export interface ModelStreamInferResponse__Output {
  error_message: string
  infer_response: _inference_ModelInferResponse__Output | null
}
