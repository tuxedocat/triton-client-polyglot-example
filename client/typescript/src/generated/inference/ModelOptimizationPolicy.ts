// Original file: proto/model_config.proto

import type { Long } from '@grpc/proto-loader'

export interface _inference_ModelOptimizationPolicy_ExecutionAccelerators_Accelerator {
  name?: string
  parameters?: { [key: string]: string }
}

export interface _inference_ModelOptimizationPolicy_ExecutionAccelerators_Accelerator__Output {
  name: string
  parameters: { [key: string]: string }
}

export interface _inference_ModelOptimizationPolicy_Cuda {
  graphs?: boolean
  busy_wait_events?: boolean
  graph_spec?: _inference_ModelOptimizationPolicy_Cuda_GraphSpec[]
  output_copy_stream?: boolean
}

export interface _inference_ModelOptimizationPolicy_Cuda__Output {
  graphs: boolean
  busy_wait_events: boolean
  graph_spec: _inference_ModelOptimizationPolicy_Cuda_GraphSpec__Output[]
  output_copy_stream: boolean
}

export interface _inference_ModelOptimizationPolicy_ExecutionAccelerators {
  gpu_execution_accelerator?: _inference_ModelOptimizationPolicy_ExecutionAccelerators_Accelerator[]
  cpu_execution_accelerator?: _inference_ModelOptimizationPolicy_ExecutionAccelerators_Accelerator[]
}

export interface _inference_ModelOptimizationPolicy_ExecutionAccelerators__Output {
  gpu_execution_accelerator: _inference_ModelOptimizationPolicy_ExecutionAccelerators_Accelerator__Output[]
  cpu_execution_accelerator: _inference_ModelOptimizationPolicy_ExecutionAccelerators_Accelerator__Output[]
}

export interface _inference_ModelOptimizationPolicy_Graph {
  level?: number
}

export interface _inference_ModelOptimizationPolicy_Graph__Output {
  level: number
}

export interface _inference_ModelOptimizationPolicy_Cuda_GraphSpec {
  batch_size?: number
  input?: { [key: string]: _inference_ModelOptimizationPolicy_Cuda_GraphSpec_Shape }
  graph_lower_bound?: _inference_ModelOptimizationPolicy_Cuda_GraphSpec_LowerBound | null
}

export interface _inference_ModelOptimizationPolicy_Cuda_GraphSpec__Output {
  batch_size: number
  input: { [key: string]: _inference_ModelOptimizationPolicy_Cuda_GraphSpec_Shape__Output }
  graph_lower_bound: _inference_ModelOptimizationPolicy_Cuda_GraphSpec_LowerBound__Output | null
}

export interface _inference_ModelOptimizationPolicy_Cuda_GraphSpec_LowerBound {
  batch_size?: number
  input?: { [key: string]: _inference_ModelOptimizationPolicy_Cuda_GraphSpec_Shape }
}

export interface _inference_ModelOptimizationPolicy_Cuda_GraphSpec_LowerBound__Output {
  batch_size: number
  input: { [key: string]: _inference_ModelOptimizationPolicy_Cuda_GraphSpec_Shape__Output }
}

// Original file: proto/model_config.proto

export enum _inference_ModelOptimizationPolicy_ModelPriority {
  PRIORITY_DEFAULT = 0,
  PRIORITY_MAX = 1,
  PRIORITY_MIN = 2,
}

export interface _inference_ModelOptimizationPolicy_PinnedMemoryBuffer {
  enable?: boolean
}

export interface _inference_ModelOptimizationPolicy_PinnedMemoryBuffer__Output {
  enable: boolean
}

export interface _inference_ModelOptimizationPolicy_Cuda_GraphSpec_Shape {
  dim?: (number | string | Long)[]
}

export interface _inference_ModelOptimizationPolicy_Cuda_GraphSpec_Shape__Output {
  dim: string[]
}

export interface ModelOptimizationPolicy {
  graph?: _inference_ModelOptimizationPolicy_Graph | null
  priority?:
    | _inference_ModelOptimizationPolicy_ModelPriority
    | keyof typeof _inference_ModelOptimizationPolicy_ModelPriority
  cuda?: _inference_ModelOptimizationPolicy_Cuda | null
  execution_accelerators?: _inference_ModelOptimizationPolicy_ExecutionAccelerators | null
  input_pinned_memory?: _inference_ModelOptimizationPolicy_PinnedMemoryBuffer | null
  output_pinned_memory?: _inference_ModelOptimizationPolicy_PinnedMemoryBuffer | null
  gather_kernel_buffer_threshold?: number
  eager_batching?: boolean
}

export interface ModelOptimizationPolicy__Output {
  graph: _inference_ModelOptimizationPolicy_Graph__Output | null
  priority: keyof typeof _inference_ModelOptimizationPolicy_ModelPriority
  cuda: _inference_ModelOptimizationPolicy_Cuda__Output | null
  execution_accelerators: _inference_ModelOptimizationPolicy_ExecutionAccelerators__Output | null
  input_pinned_memory: _inference_ModelOptimizationPolicy_PinnedMemoryBuffer__Output | null
  output_pinned_memory: _inference_ModelOptimizationPolicy_PinnedMemoryBuffer__Output | null
  gather_kernel_buffer_threshold: number
  eager_batching: boolean
}
