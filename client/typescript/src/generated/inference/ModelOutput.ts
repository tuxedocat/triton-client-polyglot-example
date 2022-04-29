// Original file: proto/model_config.proto

import type { DataType as _inference_DataType } from '../inference/DataType'
import type {
  ModelTensorReshape as _inference_ModelTensorReshape,
  ModelTensorReshape__Output as _inference_ModelTensorReshape__Output,
} from '../inference/ModelTensorReshape'
import type { Long } from '@grpc/proto-loader'

export interface ModelOutput {
  name?: string
  data_type?: _inference_DataType | keyof typeof _inference_DataType
  dims?: (number | string | Long)[]
  label_filename?: string
  reshape?: _inference_ModelTensorReshape | null
  is_shape_tensor?: boolean
}

export interface ModelOutput__Output {
  name: string
  data_type: keyof typeof _inference_DataType
  dims: string[]
  label_filename: string
  reshape: _inference_ModelTensorReshape__Output | null
  is_shape_tensor: boolean
}
