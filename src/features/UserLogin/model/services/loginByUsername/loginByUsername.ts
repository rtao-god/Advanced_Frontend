import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
// import { User, userActions } from '@/entities/User'
import { CONSTANS } from '@/shared/const/localStorage'
import i18n from '@/shared/config/i18n/i18n'

interface LoginByUsernameProps {
  username: string
  password: string
}
export const loginByUsername = createAsyncThunk</* User */ LoginByUsernameProps>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/login', authData)
      if (!response.data) {
        throw new Error('no data')
      }
      // thunkAPI.dispatch(userActions.setAuthData(response.data))
      localStorage.setItem(CONSTANS.userLocalStorageKey, JSON.stringify(response.data))
      return response.data
    } catch (error) {
      /* if (__IS_DEV__) {
        console.error(error)
      } */
      return thunkAPI.rejectWithValue(i18n.t('authorisationError'))
    }
  }
)
