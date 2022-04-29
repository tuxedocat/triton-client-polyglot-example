// Original file: proto/grpc_service.proto

import type { Long } from '@grpc/proto-loader'

export interface _inference_SystemSharedMemoryStatusResponse_RegionStatus {
  name?: string
  key?: string
  offset?: number | string | Long
  byte_size?: number | string | Long
}

export interface _inference_SystemSharedMemoryStatusResponse_RegionStatus__Output {
  name: string
  key: string
  offset: string
  byte_size: string
}

export interface SystemSharedMemoryStatusResponse {
  regions?: { [key: string]: _inference_SystemSharedMemoryStatusResponse_RegionStatus }
}

export interface SystemSharedMemoryStatusResponse__Output {
  regions: { [key: string]: _inference_SystemSharedMemoryStatusResponse_RegionStatus__Output }
}
