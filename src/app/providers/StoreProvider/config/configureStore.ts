import { dateReducer } from '@/entities/date';
import { Reducer, configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { createReducerManager } from './reducerManager'
import { ReduxStoreWithManager, StateSchema } from './StateSchema'
import { api, createRootReducer } from '@/shared/api'

export default function createReduxStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
    const rootReducers = createRootReducer({
        ...asyncReducers,
        [api.reducerPath]: api.reducer,
        date: dateReducer
    })

    const reducerManager = createReducerManager(rootReducers)

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<StateSchema>,
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
        preloadedState: initialState
    }) as ReduxStoreWithManager

    store.reducerManager = reducerManager

    return store
}

const tempStore = createReduxStore()

export type RootState = ReturnType<typeof tempStore.getState>
export type AppDispatch = typeof tempStore.dispatch
