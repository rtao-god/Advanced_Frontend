import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { loginByIdentifier } from '../services/loginByIdentifier/loginByIdentifier'
import LoginSchema from '../types/LoginSchema'

const initialState: LoginSchema = {
  isLoading: false,
  username: '',
  identifier: '', // Может быть почтой или телефоном
  password: '',
  error: ''
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setIdentifier(state, action: PayloadAction<string>) {
      state.identifier = action.payload
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginByIdentifier.pending, state => {
        state.error = undefined
        state.isLoading = true
      })
      // You can chain calls, or have separate `builder.addCase()` lines each time
      .addCase(loginByIdentifier.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(loginByIdentifier.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  },
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice
