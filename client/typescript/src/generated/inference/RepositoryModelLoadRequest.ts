// Original file: proto/grpc_service.proto

import type {
  ModelRepositoryParameter as _inference_ModelRepositoryParameter,
  ModelRepositoryParameter__Output as _inference_ModelRepositoryParameter__Output,
} from '../inference/ModelRepositoryParameter'

export interface RepositoryModelLoadRequest {
  repository_name?: string
  model_name?: string
  parameters?: { [key: string]: _inference_ModelRepositoryParameter }
}

export interface RepositoryModelLoadRequest__Output {
  repository_name: string
  model_name: string
  parameters: { [key: string]: _inference_ModelRepositoryParameter__Output }
}
