import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface IRegistrationStoreProps {
  number: string
  password: string
  setNumber: (number: string) => void
  setPassword: (pass: string) => void
}

export const useRegistration = create<IRegistrationStoreProps>()(
  immer(set => ({
    number: '',
    password: '',
    setNumber: (number: string) => {
      set(state => {
        state.number = number
      })
    },
    setPassword: (pass: string) => {
      set(state => {
        state.password = pass
      })
    },
  }))
)
