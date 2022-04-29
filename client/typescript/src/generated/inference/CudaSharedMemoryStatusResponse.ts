// Original file: proto/grpc_service.proto

import type { Long } from '@grpc/proto-loader'

export interface _inference_CudaSharedMemoryStatusResponse_RegionStatus {
  name?: string
  device_id?: number | string | Long
  byte_size?: number | string | Long
}

export interface _inference_CudaSharedMemoryStatusResponse_RegionStatus__Output {
  name: string
  device_id: string
  byte_size: string
}

export interface CudaSharedMemoryStatusResponse {
  regions?: { [key: string]: _inference_CudaSharedMemoryStatusResponse_RegionStatus }
}

export interface CudaSharedMemoryStatusResponse__Output {
  regions: { [key: string]: _inference_CudaSharedMemoryStatusResponse_RegionStatus__Output }
}
