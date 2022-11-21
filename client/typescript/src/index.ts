import { promisify } from 'util'
import { loadPackageDefinition, credentials, ChannelCredentials, ClientOptions, CallOptions } from '@grpc/grpc-js'
import { loadSync } from '@grpc/proto-loader'
import { ProtoGrpcType } from './generated/grpc_service'
import {
  ModelInferRequest,
  _inference_ModelInferRequest_InferInputTensor as InferInputTensor,
} from './generated/inference/ModelInferRequest'
import {
  ModelInferResponse,
  _inference_ModelInferResponse_InferOutputTensor as InferOutputTensor,
} from './generated/inference/ModelInferResponse'
import { GRPCInferenceServiceClient } from './generated/inference/GRPCInferenceService'
import { ServerLiveRequest } from './generated/inference/ServerLiveRequest'
import { ServerLiveResponse } from './generated/inference/ServerLiveResponse'
import { ServerReadyResponse } from './generated/inference/ServerReadyResponse'
import { ModelMetadataRequest } from './generated/inference/ModelMetadataRequest'
import { ModelMetadataResponse } from './generated/inference/ModelMetadataResponse'
import { ModelReadyRequest } from './generated/inference/ModelReadyRequest'
import { ServerReadyRequest } from './generated/inference/ServerReadyRequest'
import { ModelReadyResponse } from './generated/inference/ModelReadyResponse'
import { ModelStatisticsRequest } from './generated/inference/ModelStatisticsRequest'
import { ModelStatisticsResponse } from './generated/inference/ModelStatisticsResponse'
import { ModelConfigRequest } from './generated/inference/ModelConfigRequest'
import { ModelConfigResponse } from './generated/inference/ModelConfigResponse'
import { InferTensorContents } from './generated/inference/InferTensorContents'

const PROTO_IMPORT_PATH = __dirname + '/proto'
const PROTO_PATH = PROTO_IMPORT_PATH + '/grpc_service.proto'

const packageDefinition = loadSync(PROTO_PATH, {
  includeDirs: [PROTO_IMPORT_PATH],
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
})
const loadedPackageDefinition = loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType
export const triton = loadedPackageDefinition.inference

/**
 * Promisified API subset of triton.GRPCInferenceServiceClient
 * Notes: Only unary ops are supported e.g. no `modelStreamInfer`, due to limitation of util.promisify.
 * */
export class TritonCoreAPI {
  private client: GRPCInferenceServiceClient
  constructor(endpoint: string, creds?: ChannelCredentials, clientOptions?: ClientOptions) {
    this.client = new triton.GRPCInferenceService(endpoint, creds ?? credentials.createInsecure(), clientOptions)
  }
  public async serverReady(req: ServerReadyRequest): Promise<ServerReadyResponse> {
    return promisify<ServerReadyRequest>(this.client.serverReady.bind(this.client))(
      req,
    ) as unknown as ServerReadyResponse
  }
  public async serverLive(req: ServerLiveRequest): Promise<ServerLiveResponse> {
    return promisify<ServerLiveRequest>(this.client.serverLive.bind(this.client))(req) as unknown as ServerLiveResponse
  }
  public async modelReady(req: ModelReadyRequest): Promise<ModelReadyResponse> {
    return promisify<ModelReadyRequest>(this.client.modelReady.bind(this.client))(req) as unknown as ModelReadyResponse
  }
  public async modelConfig(req: ModelConfigRequest): Promise<ModelConfigResponse> {
    return promisify<ModelConfigRequest>(this.client.modelConfig.bind(this.client))(
      req,
    ) as unknown as ModelConfigResponse
  }
  public async modelMetadata(req: ModelMetadataRequest): Promise<ModelMetadataResponse> {
    return promisify<ModelMetadataRequest>(this.client.modelMetadata.bind(this.client))(
      req,
    ) as unknown as ModelMetadataResponse
  }
  public async modelStatistics(req: ModelStatisticsRequest): Promise<ModelStatisticsResponse> {
    return promisify<ModelStatisticsRequest>(this.client.modelStatistics.bind(this.client))(
      req,
    ) as unknown as ModelStatisticsResponse
  }
  public async modelInfer(req: ModelInferRequest, opts?: CallOptions): Promise<ModelInferResponse> {
    return promisify<ModelInferRequest, CallOptions>(this.client.modelInfer.bind(this.client))(
      req,
      opts ?? {},
    ) as unknown as ModelInferResponse
  }
}

// Use explicit export to prevent tsc from generating `__exportStar` which causes `jest.spyOn` error
export type { TritonInferenceOutput } from './utils'
export { TritonInputFactory, TritonOutputParser, TritonTensorUtil } from './utils'
export type {
  GRPCInferenceServiceClient,
  ProtoGrpcType,
  ModelInferRequest,
  ModelInferResponse,
  ModelConfigRequest,
  ModelConfigResponse,
  ModelMetadataRequest,
  ModelMetadataResponse,
  ServerLiveRequest,
  ServerLiveResponse,
  ServerReadyRequest,
  ServerReadyResponse,
  ModelStatisticsRequest,
  ModelStatisticsResponse,
  credentials,
  ChannelCredentials,
  InferTensorContents,
  InferInputTensor,
  InferOutputTensor,
}
