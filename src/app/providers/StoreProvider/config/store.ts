import { configureStore } from '@reduxjs/toolkit'
import StateSchema from './StateSchema'
import { counterReducer } from '@/entities/Counter'

export default function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer,
    },
    // devTools: __ID_DEV__,
    preloadedState: initialState,
  })
}

export type RootState = ReturnType<typeof createReduxStore>
export type AppDispatch = typeof createReduxStore
