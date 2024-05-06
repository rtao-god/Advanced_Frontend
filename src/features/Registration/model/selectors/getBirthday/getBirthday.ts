import { StateSchema } from '@/app/providers/StoreProvider'

export const getBirthday = (state: StateSchema) => state?.registration?.birthday
