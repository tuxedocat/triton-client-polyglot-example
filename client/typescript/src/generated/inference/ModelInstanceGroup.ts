// Original file: proto/model_config.proto

import type {
  ModelRateLimiter as _inference_ModelRateLimiter,
  ModelRateLimiter__Output as _inference_ModelRateLimiter__Output,
} from '../inference/ModelRateLimiter'
import type { Long } from '@grpc/proto-loader'

// Original file: proto/model_config.proto

export enum _inference_ModelInstanceGroup_Kind {
  KIND_AUTO = 0,
  KIND_GPU = 1,
  KIND_CPU = 2,
  KIND_MODEL = 3,
}

export interface _inference_ModelInstanceGroup_SecondaryDevice {
  kind?:
    | _inference_ModelInstanceGroup_SecondaryDevice_SecondaryDeviceKind
    | keyof typeof _inference_ModelInstanceGroup_SecondaryDevice_SecondaryDeviceKind
  device_id?: number | string | Long
}

export interface _inference_ModelInstanceGroup_SecondaryDevice__Output {
  kind: keyof typeof _inference_ModelInstanceGroup_SecondaryDevice_SecondaryDeviceKind
  device_id: string
}

// Original file: proto/model_config.proto

export enum _inference_ModelInstanceGroup_SecondaryDevice_SecondaryDeviceKind {
  KIND_NVDLA = 0,
}

export interface ModelInstanceGroup {
  name?: string
  count?: number
  gpus?: number[]
  kind?: _inference_ModelInstanceGroup_Kind | keyof typeof _inference_ModelInstanceGroup_Kind
  profile?: string[]
  rate_limiter?: _inference_ModelRateLimiter | null
  passive?: boolean
  secondary_devices?: _inference_ModelInstanceGroup_SecondaryDevice[]
  host_policy?: string
}

export interface ModelInstanceGroup__Output {
  name: string
  count: number
  gpus: number[]
  kind: keyof typeof _inference_ModelInstanceGroup_Kind
  profile: string[]
  rate_limiter: _inference_ModelRateLimiter__Output | null
  passive: boolean
  secondary_devices: _inference_ModelInstanceGroup_SecondaryDevice__Output[]
  host_policy: string
}
