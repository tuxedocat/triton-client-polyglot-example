// Original file: proto/grpc_service.proto

export interface RepositoryIndexRequest {
  repository_name?: string
  ready?: boolean
}

export interface RepositoryIndexRequest__Output {
  repository_name: string
  ready: boolean
}
