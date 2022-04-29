import type * as grpc from '@grpc/grpc-js'
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader'

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype
}

export interface ProtoGrpcType {
  inference: {
    BatchInput: MessageTypeDefinition
    BatchOutput: MessageTypeDefinition
    DataType: EnumTypeDefinition
    ModelConfig: MessageTypeDefinition
    ModelDynamicBatching: MessageTypeDefinition
    ModelEnsembling: MessageTypeDefinition
    ModelInput: MessageTypeDefinition
    ModelInstanceGroup: MessageTypeDefinition
    ModelOperations: MessageTypeDefinition
    ModelOptimizationPolicy: MessageTypeDefinition
    ModelOutput: MessageTypeDefinition
    ModelParameter: MessageTypeDefinition
    ModelQueuePolicy: MessageTypeDefinition
    ModelRateLimiter: MessageTypeDefinition
    ModelRepositoryAgents: MessageTypeDefinition
    ModelResponseCache: MessageTypeDefinition
    ModelSequenceBatching: MessageTypeDefinition
    ModelTensorReshape: MessageTypeDefinition
    ModelTransactionPolicy: MessageTypeDefinition
    ModelVersionPolicy: MessageTypeDefinition
    ModelWarmup: MessageTypeDefinition
  }
}
