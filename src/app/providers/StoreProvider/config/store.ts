import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { counterReducer } from '@/entities/Counter'
import { loginReducer } from '@/features/UserLogin'
import { createReducerManager } from './reducerManager'
import { ReduxStoreWithManager, StateSchema } from './StateSchema'

export default function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    // user: userReducer,
    loginForm: loginReducer,
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    preloadedState: initialState,
    // devTools: __ID_DEV__,
  }) as ReduxStoreWithManager

  store.reducerManager = reducerManager

  return store
}
