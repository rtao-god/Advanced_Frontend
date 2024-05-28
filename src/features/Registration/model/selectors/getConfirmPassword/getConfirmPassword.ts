import { StateSchema } from '@/app/providers/StoreProvider'

export const getConfirmPassword = (state: StateSchema) => state.registration.confirmPassword
