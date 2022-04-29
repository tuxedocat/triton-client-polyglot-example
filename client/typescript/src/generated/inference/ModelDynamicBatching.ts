// Original file: proto/model_config.proto

import type {
  ModelQueuePolicy as _inference_ModelQueuePolicy,
  ModelQueuePolicy__Output as _inference_ModelQueuePolicy__Output,
} from '../inference/ModelQueuePolicy'
import type { Long } from '@grpc/proto-loader'

export interface ModelDynamicBatching {
  preferred_batch_size?: number[]
  max_queue_delay_microseconds?: number | string | Long
  preserve_ordering?: boolean
  priority_levels?: number
  default_priority_level?: number
  default_queue_policy?: _inference_ModelQueuePolicy | null
  priority_queue_policy?: { [key: number]: _inference_ModelQueuePolicy }
}

export interface ModelDynamicBatching__Output {
  preferred_batch_size: number[]
  max_queue_delay_microseconds: string
  preserve_ordering: boolean
  priority_levels: number
  default_priority_level: number
  default_queue_policy: _inference_ModelQueuePolicy__Output | null
  priority_queue_policy: { [key: number]: _inference_ModelQueuePolicy__Output }
}
