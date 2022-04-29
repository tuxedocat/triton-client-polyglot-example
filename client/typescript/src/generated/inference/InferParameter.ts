// Original file: proto/grpc_service.proto

import type { Long } from '@grpc/proto-loader'

export interface InferParameter {
  bool_param?: boolean
  int64_param?: number | string | Long
  string_param?: string
  parameter_choice?: 'bool_param' | 'int64_param' | 'string_param'
}

export interface InferParameter__Output {
  bool_param?: boolean
  int64_param?: string
  string_param?: string
  parameter_choice: 'bool_param' | 'int64_param' | 'string_param'
}
