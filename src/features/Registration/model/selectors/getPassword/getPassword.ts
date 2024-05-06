import { StateSchema } from '@/app/providers/StoreProvider'

export const getPassword = (state: StateSchema) => state?.registration?.password
