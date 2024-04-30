import { CounterSchema } from '@/entities/Counter'
import { LoginSchema } from '@/features/UserLogin'
import { EnhancedStore, Reducer, ReducersMapObject, UnknownAction } from '@reduxjs/toolkit'

export interface StateSchema {
  counter: CounterSchema
  loginForm: LoginSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReduceMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema | undefined, action: UnknownAction) => StateSchema
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}
