// Original file: proto/grpc_service.proto

import type { Long } from '@grpc/proto-loader'

export interface SystemSharedMemoryRegisterRequest {
  name?: string
  key?: string
  offset?: number | string | Long
  byte_size?: number | string | Long
}

export interface SystemSharedMemoryRegisterRequest__Output {
  name: string
  key: string
  offset: string
  byte_size: string
}
