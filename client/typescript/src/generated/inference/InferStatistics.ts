// Original file: proto/grpc_service.proto

import type {
  StatisticDuration as _inference_StatisticDuration,
  StatisticDuration__Output as _inference_StatisticDuration__Output,
} from '../inference/StatisticDuration'

export interface InferStatistics {
  success?: _inference_StatisticDuration | null
  fail?: _inference_StatisticDuration | null
  queue?: _inference_StatisticDuration | null
  compute_input?: _inference_StatisticDuration | null
  compute_infer?: _inference_StatisticDuration | null
  compute_output?: _inference_StatisticDuration | null
  cache_hit?: _inference_StatisticDuration | null
}

export interface InferStatistics__Output {
  success: _inference_StatisticDuration__Output | null
  fail: _inference_StatisticDuration__Output | null
  queue: _inference_StatisticDuration__Output | null
  compute_input: _inference_StatisticDuration__Output | null
  compute_infer: _inference_StatisticDuration__Output | null
  compute_output: _inference_StatisticDuration__Output | null
  cache_hit: _inference_StatisticDuration__Output | null
}
