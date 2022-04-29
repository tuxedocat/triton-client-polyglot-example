// Original file: proto/model_config.proto

import type { DataType as _inference_DataType } from '../inference/DataType'

// Original file: proto/model_config.proto

export enum _inference_BatchInput_Kind {
  BATCH_ELEMENT_COUNT = 0,
  BATCH_ACCUMULATED_ELEMENT_COUNT = 1,
  BATCH_ACCUMULATED_ELEMENT_COUNT_WITH_ZERO = 2,
  BATCH_MAX_ELEMENT_COUNT_AS_SHAPE = 3,
}

export interface BatchInput {
  kind?: _inference_BatchInput_Kind | keyof typeof _inference_BatchInput_Kind
  target_name?: string[]
  data_type?: _inference_DataType | keyof typeof _inference_DataType
  source_input?: string[]
}

export interface BatchInput__Output {
  kind: keyof typeof _inference_BatchInput_Kind
  target_name: string[]
  data_type: keyof typeof _inference_DataType
  source_input: string[]
}
