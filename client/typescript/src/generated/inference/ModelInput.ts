// Original file: proto/model_config.proto

import type { DataType as _inference_DataType } from '../inference/DataType'
import type {
  ModelTensorReshape as _inference_ModelTensorReshape,
  ModelTensorReshape__Output as _inference_ModelTensorReshape__Output,
} from '../inference/ModelTensorReshape'
import type { Long } from '@grpc/proto-loader'

// Original file: proto/model_config.proto

export enum _inference_ModelInput_Format {
  FORMAT_NONE = 0,
  FORMAT_NHWC = 1,
  FORMAT_NCHW = 2,
}

export interface ModelInput {
  name?: string
  data_type?: _inference_DataType | keyof typeof _inference_DataType
  format?: _inference_ModelInput_Format | keyof typeof _inference_ModelInput_Format
  dims?: (number | string | Long)[]
  reshape?: _inference_ModelTensorReshape | null
  is_shape_tensor?: boolean
  allow_ragged_batch?: boolean
  optional?: boolean
}

export interface ModelInput__Output {
  name: string
  data_type: keyof typeof _inference_DataType
  format: keyof typeof _inference_ModelInput_Format
  dims: string[]
  reshape: _inference_ModelTensorReshape__Output | null
  is_shape_tensor: boolean
  allow_ragged_batch: boolean
  optional: boolean
}
