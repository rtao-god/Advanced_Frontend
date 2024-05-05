import { StateSchema } from '@/app/providers/StoreProvider'

// export const getLoginPassword = (state: StateSchema) => state?.loginForm?.password || ''

export const getLoginConfirmPassword = (state: StateSchema) => state?.registration?.confirmPassword || ''