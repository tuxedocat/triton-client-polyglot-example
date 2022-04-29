// Original file: proto/grpc_service.proto

import type {
  StatisticDuration as _inference_StatisticDuration,
  StatisticDuration__Output as _inference_StatisticDuration__Output,
} from '../inference/StatisticDuration'
import type { Long } from '@grpc/proto-loader'

export interface InferBatchStatistics {
  batch_size?: number | string | Long
  compute_input?: _inference_StatisticDuration | null
  compute_infer?: _inference_StatisticDuration | null
  compute_output?: _inference_StatisticDuration | null
}

export interface InferBatchStatistics__Output {
  batch_size: string
  compute_input: _inference_StatisticDuration__Output | null
  compute_infer: _inference_StatisticDuration__Output | null
  compute_output: _inference_StatisticDuration__Output | null
}
