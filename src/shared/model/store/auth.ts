import { IUserData } from '@/shared/types/user.interface'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface IAuthStore {
  isAuth: boolean
  user: null | IUserData
  setIsAuth: (bol: boolean) => void
  setUser: (user: null | IUserData) => void
}

export const useAuth = create<IAuthStore>()(
  immer(set => ({
    isAuth: false,
    user: null,
    setIsAuth: (bol: boolean) => {
      set(state => {
        state.isAuth = bol
      })
    },
    setUser: (user: IUserData | null) => {
      set(state => {
        state.user = user
      })
    },
  }))
)
