import DateSchema from '@/entities/date/model/types/DateSchema'
import { api } from '@/shared/api'
import { Reducer, AnyAction, ReducersMapObject, EnhancedStore } from '@reduxjs/toolkit'

export interface StateSchema {
    date?: DateSchema
    [api.reducerPath]?: ReturnType<typeof api.reducer>
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema | undefined, action: AnyAction) => StateSchema
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}
