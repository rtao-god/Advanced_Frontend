import { ReducersMapObject } from '@reduxjs/toolkit'
import { api } from './api'
import { StateSchema } from '@/app/providers'

export function createRootReducer(asyncReducers: ReducersMapObject<StateSchema>): ReducersMapObject<StateSchema> {
    return {
        ...asyncReducers,
        [api.reducerPath]: api.reducer
    }
}
