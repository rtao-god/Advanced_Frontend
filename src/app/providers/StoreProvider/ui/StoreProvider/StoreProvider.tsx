import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { ReducersMapObject } from '@reduxjs/toolkit'
import { createReduxStore, StateSchema } from '../..'

interface StoreProviderProps {
    children: ReactNode
    initialState?: DeepPartial<StateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export default function StoreProvider({ children, initialState, asyncReducers }: StoreProviderProps) {
    const store = createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>)

    return <Provider store={store}>{children}</Provider>
}
