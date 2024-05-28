import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { User, UserSchema } from '../types/UserSchema'

const initialState: UserSchema = {
    authData: undefined
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            state.authData = action.payload
            state.authData.isAuthenticated = true
        },
        logout: state => {
            if (state.authData) {
                state.authData.isAuthenticated = false
                state.authData = undefined
            }
        }
    }
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
