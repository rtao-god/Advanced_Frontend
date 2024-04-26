export type TMethod = 'GET' | 'POST' | 'DELETE' | 'PUT' | 'OPTIONS' | 'HEAD' | 'TRACE' | 'PATCH' | 'CONNECT'

export type TData = { detail: string }
export interface ICustomError extends Error {
  data?: TData
}

export type TStatus = 'idle' | 'loading' | 'succeseeded'
