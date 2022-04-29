// Original file: proto/grpc_service.proto

import type {
  InferStatistics as _inference_InferStatistics,
  InferStatistics__Output as _inference_InferStatistics__Output,
} from '../inference/InferStatistics'
import type {
  InferBatchStatistics as _inference_InferBatchStatistics,
  InferBatchStatistics__Output as _inference_InferBatchStatistics__Output,
} from '../inference/InferBatchStatistics'
import type { Long } from '@grpc/proto-loader'

export interface ModelStatistics {
  name?: string
  version?: string
  last_inference?: number | string | Long
  inference_count?: number | string | Long
  execution_count?: number | string | Long
  inference_stats?: _inference_InferStatistics | null
  batch_stats?: _inference_InferBatchStatistics[]
}

export interface ModelStatistics__Output {
  name: string
  version: string
  last_inference: string
  inference_count: string
  execution_count: string
  inference_stats: _inference_InferStatistics__Output | null
  batch_stats: _inference_InferBatchStatistics__Output[]
}
