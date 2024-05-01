import { CounterSchema } from '@/entities/Counter'
import { LoginSchema } from '@/features/UserLogin'
import { EnhancedStore, Reducer, ReducersMapObject, UnknownAction } from '@reduxjs/toolkit'

export interface StateSchema {
  counter: CounterSchema
  // user: UserSchema;

  // async reducers
  loginForm?: LoginSchema
}

export type StateSchemaKey = keyof StateSchema
export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: UnknownAction) => StateSchema
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}
