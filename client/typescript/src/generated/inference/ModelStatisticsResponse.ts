// Original file: proto/grpc_service.proto

import type {
  ModelStatistics as _inference_ModelStatistics,
  ModelStatistics__Output as _inference_ModelStatistics__Output,
} from '../inference/ModelStatistics'

export interface ModelStatisticsResponse {
  model_stats?: _inference_ModelStatistics[]
}

export interface ModelStatisticsResponse__Output {
  model_stats: _inference_ModelStatistics__Output[]
}
