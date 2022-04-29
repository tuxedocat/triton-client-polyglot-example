// Original file: proto/model_config.proto

import type { Long } from '@grpc/proto-loader'

export interface _inference_ModelEnsembling_Step {
  model_name?: string
  model_version?: number | string | Long
  input_map?: { [key: string]: string }
  output_map?: { [key: string]: string }
}

export interface _inference_ModelEnsembling_Step__Output {
  model_name: string
  model_version: string
  input_map: { [key: string]: string }
  output_map: { [key: string]: string }
}

export interface ModelEnsembling {
  step?: _inference_ModelEnsembling_Step[]
}

export interface ModelEnsembling__Output {
  step: _inference_ModelEnsembling_Step__Output[]
}
