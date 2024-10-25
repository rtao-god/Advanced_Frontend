import { CounterSchema } from '@/entities/Counter'
import DateSchema from '@/entities/date/model/types/DateSchema'
import { UserSchema } from '@/entities/User'
import { RegistrationSchema } from '@/features/Registration'
import { LoginSchema } from '@/features/UserLogin'
import { EnhancedStore, Reducer, ReducersMapObject, UnknownAction } from '@reduxjs/toolkit'

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    registration: RegistrationSchema
    loginForm: LoginSchema
    date: DateSchema
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
