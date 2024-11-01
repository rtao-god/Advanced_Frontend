import { StateSchema } from '@/app/providers/StoreProvider'

export const getLoginConfirmPassword = (state: StateSchema) => state.registration?.confirmPassword
