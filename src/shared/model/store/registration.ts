import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface RegistrationStoreProps {
  identifier: string
  password: string
  setIdentifier: (identifier: string) => void
  setPassword: (pass: string) => void
}

export const useRegistration = create<RegistrationStoreProps>()(
  immer(set => ({
    identifier: '',
    password: '',
    setIdentifier: (identifier: string) => {
      set(state => {
        state.identifier = identifier
      })
    },
    setPassword: (pass: string) => {
      set(state => {
        state.password = pass
      })
    },
  }))
)
