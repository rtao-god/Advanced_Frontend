import { StateSchema } from '@/app/providers/StoreProvider'

export const getIsChecked = (state: StateSchema) => state?.registration?.isChecked
