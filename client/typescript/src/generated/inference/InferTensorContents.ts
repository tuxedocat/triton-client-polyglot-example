// Original file: proto/grpc_service.proto

import type { Long } from '@grpc/proto-loader'

export interface InferTensorContents {
  bool_contents?: boolean[]
  int_contents?: number[]
  int64_contents?: (number | string | Long)[]
  uint_contents?: number[]
  uint64_contents?: (number | string | Long)[]
  fp32_contents?: (number | string)[]
  fp64_contents?: (number | string)[]
  bytes_contents?: (Buffer | Uint8Array | string)[]
}

export interface InferTensorContents__Output {
  bool_contents: boolean[]
  int_contents: number[]
  int64_contents: string[]
  uint_contents: number[]
  uint64_contents: string[]
  fp32_contents: number[]
  fp64_contents: number[]
  bytes_contents: Buffer[]
}
