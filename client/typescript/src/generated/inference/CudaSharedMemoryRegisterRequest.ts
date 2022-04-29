// Original file: proto/grpc_service.proto

import type { Long } from '@grpc/proto-loader'

export interface CudaSharedMemoryRegisterRequest {
  name?: string
  raw_handle?: Buffer | Uint8Array | string
  device_id?: number | string | Long
  byte_size?: number | string | Long
}

export interface CudaSharedMemoryRegisterRequest__Output {
  name: string
  raw_handle: Buffer
  device_id: string
  byte_size: string
}
