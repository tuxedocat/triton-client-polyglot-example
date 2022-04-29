// Original file: proto/model_config.proto

// Original file: proto/model_config.proto

export enum _inference_BatchOutput_Kind {
  BATCH_SCATTER_WITH_INPUT_SHAPE = 0,
}

export interface BatchOutput {
  target_name?: string[]
  kind?: _inference_BatchOutput_Kind | keyof typeof _inference_BatchOutput_Kind
  source_input?: string[]
}

export interface BatchOutput__Output {
  target_name: string[]
  kind: keyof typeof _inference_BatchOutput_Kind
  source_input: string[]
}
