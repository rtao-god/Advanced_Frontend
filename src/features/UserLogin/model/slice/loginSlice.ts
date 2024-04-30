import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import LoginSchema from '../types/LoginSchema';

const fakeApiLogin = async (credentials: { username: string; password: string }) => {
  return new Promise<{ token: string }>((resolve, reject) => {
    setTimeout(() => {
      if (credentials.username === 'admin' && credentials.password === 'admin') {
        resolve({ token: 'fake-jwt-token' })
      } else {
        reject(new Error('Invalid username or password'))
      }
    }, 1000)
  })
}

export const loginUser = createAsyncThunk(
  'login/userLogin',
  async (credentials: { username: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await fakeApiLogin(credentials)
      localStorage.setItem('token', response.token)
      return { isAuthenticated: true, username: credentials.username }
    } catch (err: any) {
      return rejectWithValue(err.message)
    }
  }
)

const initialState: LoginSchema = {
  username: '',
  password: '',
  error: null,
  isAuthenticated: false,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated
      state.username = action.payload.username
      state.error = null
    })
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isAuthenticated = false
      state.error = action.payload as string 
    })
  },
})

export const { reducer: loginReducer } = loginSlice
