import { StateSchema } from '@/app/providers/StoreProvider'

export const getLoginIdentifier = (state: StateSchema) => state?.loginForm?.identifier
