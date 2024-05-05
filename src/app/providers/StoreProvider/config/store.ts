import { Reducer, ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { counterReducer } from '@/entities/Counter'
import { createReducerManager } from './reducerManager'
import { ReduxStoreWithManager, StateSchema } from './StateSchema'
import { userReducer } from '@/entities/User'
import { registrationReducer } from '@/features/Registration'

export default function createReduxStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    registration: registrationReducer,
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce as Reducer<StateSchema>,
    preloadedState: initialState,
    // devTools: __ID_DEV__,
  }) as ReduxStoreWithManager

  store.reducerManager = reducerManager

  return store
}
