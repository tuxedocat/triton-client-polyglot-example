// Original file: proto/model_config.proto

import type { DataType as _inference_DataType } from '../inference/DataType'
import type { Long } from '@grpc/proto-loader'

export interface _inference_ModelWarmup_Input {
  data_type?: _inference_DataType | keyof typeof _inference_DataType
  dims?: (number | string | Long)[]
  zero_data?: boolean
  random_data?: boolean
  input_data_file?: string
  input_data_type?: 'zero_data' | 'random_data' | 'input_data_file'
}

export interface _inference_ModelWarmup_Input__Output {
  data_type: keyof typeof _inference_DataType
  dims: string[]
  zero_data?: boolean
  random_data?: boolean
  input_data_file?: string
  input_data_type: 'zero_data' | 'random_data' | 'input_data_file'
}

export interface ModelWarmup {
  name?: string
  batch_size?: number
  inputs?: { [key: string]: _inference_ModelWarmup_Input }
  count?: number
}

export interface ModelWarmup__Output {
  name: string
  batch_size: number
  inputs: { [key: string]: _inference_ModelWarmup_Input__Output }
  count: number
}
