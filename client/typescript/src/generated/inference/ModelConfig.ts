// Original file: proto/model_config.proto

import type {
  ModelVersionPolicy as _inference_ModelVersionPolicy,
  ModelVersionPolicy__Output as _inference_ModelVersionPolicy__Output,
} from '../inference/ModelVersionPolicy'
import type {
  ModelInput as _inference_ModelInput,
  ModelInput__Output as _inference_ModelInput__Output,
} from '../inference/ModelInput'
import type {
  ModelOutput as _inference_ModelOutput,
  ModelOutput__Output as _inference_ModelOutput__Output,
} from '../inference/ModelOutput'
import type {
  ModelInstanceGroup as _inference_ModelInstanceGroup,
  ModelInstanceGroup__Output as _inference_ModelInstanceGroup__Output,
} from '../inference/ModelInstanceGroup'
import type {
  ModelDynamicBatching as _inference_ModelDynamicBatching,
  ModelDynamicBatching__Output as _inference_ModelDynamicBatching__Output,
} from '../inference/ModelDynamicBatching'
import type {
  ModelOptimizationPolicy as _inference_ModelOptimizationPolicy,
  ModelOptimizationPolicy__Output as _inference_ModelOptimizationPolicy__Output,
} from '../inference/ModelOptimizationPolicy'
import type {
  ModelSequenceBatching as _inference_ModelSequenceBatching,
  ModelSequenceBatching__Output as _inference_ModelSequenceBatching__Output,
} from '../inference/ModelSequenceBatching'
import type {
  ModelParameter as _inference_ModelParameter,
  ModelParameter__Output as _inference_ModelParameter__Output,
} from '../inference/ModelParameter'
import type {
  ModelEnsembling as _inference_ModelEnsembling,
  ModelEnsembling__Output as _inference_ModelEnsembling__Output,
} from '../inference/ModelEnsembling'
import type {
  ModelWarmup as _inference_ModelWarmup,
  ModelWarmup__Output as _inference_ModelWarmup__Output,
} from '../inference/ModelWarmup'
import type {
  ModelOperations as _inference_ModelOperations,
  ModelOperations__Output as _inference_ModelOperations__Output,
} from '../inference/ModelOperations'
import type {
  ModelTransactionPolicy as _inference_ModelTransactionPolicy,
  ModelTransactionPolicy__Output as _inference_ModelTransactionPolicy__Output,
} from '../inference/ModelTransactionPolicy'
import type {
  BatchInput as _inference_BatchInput,
  BatchInput__Output as _inference_BatchInput__Output,
} from '../inference/BatchInput'
import type {
  BatchOutput as _inference_BatchOutput,
  BatchOutput__Output as _inference_BatchOutput__Output,
} from '../inference/BatchOutput'
import type {
  ModelRepositoryAgents as _inference_ModelRepositoryAgents,
  ModelRepositoryAgents__Output as _inference_ModelRepositoryAgents__Output,
} from '../inference/ModelRepositoryAgents'
import type {
  ModelResponseCache as _inference_ModelResponseCache,
  ModelResponseCache__Output as _inference_ModelResponseCache__Output,
} from '../inference/ModelResponseCache'

export interface ModelConfig {
  name?: string
  platform?: string
  version_policy?: _inference_ModelVersionPolicy | null
  max_batch_size?: number
  input?: _inference_ModelInput[]
  output?: _inference_ModelOutput[]
  instance_group?: _inference_ModelInstanceGroup[]
  default_model_filename?: string
  cc_model_filenames?: { [key: string]: string }
  metric_tags?: { [key: string]: string }
  dynamic_batching?: _inference_ModelDynamicBatching | null
  optimization?: _inference_ModelOptimizationPolicy | null
  sequence_batching?: _inference_ModelSequenceBatching | null
  parameters?: { [key: string]: _inference_ModelParameter }
  ensemble_scheduling?: _inference_ModelEnsembling | null
  model_warmup?: _inference_ModelWarmup[]
  backend?: string
  model_operations?: _inference_ModelOperations | null
  model_transaction_policy?: _inference_ModelTransactionPolicy | null
  batch_input?: _inference_BatchInput[]
  batch_output?: _inference_BatchOutput[]
  model_repository_agents?: _inference_ModelRepositoryAgents | null
  response_cache?: _inference_ModelResponseCache | null
  scheduling_choice?: 'dynamic_batching' | 'sequence_batching' | 'ensemble_scheduling'
}

export interface ModelConfig__Output {
  name: string
  platform: string
  version_policy: _inference_ModelVersionPolicy__Output | null
  max_batch_size: number
  input: _inference_ModelInput__Output[]
  output: _inference_ModelOutput__Output[]
  instance_group: _inference_ModelInstanceGroup__Output[]
  default_model_filename: string
  cc_model_filenames: { [key: string]: string }
  metric_tags: { [key: string]: string }
  dynamic_batching?: _inference_ModelDynamicBatching__Output | null
  optimization: _inference_ModelOptimizationPolicy__Output | null
  sequence_batching?: _inference_ModelSequenceBatching__Output | null
  parameters: { [key: string]: _inference_ModelParameter__Output }
  ensemble_scheduling?: _inference_ModelEnsembling__Output | null
  model_warmup: _inference_ModelWarmup__Output[]
  backend: string
  model_operations: _inference_ModelOperations__Output | null
  model_transaction_policy: _inference_ModelTransactionPolicy__Output | null
  batch_input: _inference_BatchInput__Output[]
  batch_output: _inference_BatchOutput__Output[]
  model_repository_agents: _inference_ModelRepositoryAgents__Output | null
  response_cache: _inference_ModelResponseCache__Output | null
  scheduling_choice: 'dynamic_batching' | 'sequence_batching' | 'ensemble_scheduling'
}
