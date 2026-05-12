import { getDevToolsRpcClient } from './rpc'

export * from './rpc'
export * from './rpc-streaming'

export const connectDevframe = getDevToolsRpcClient
