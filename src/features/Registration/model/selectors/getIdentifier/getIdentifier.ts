import { StateSchema } from '@/app/providers/StoreProvider'

export const getIdentifier = (state: StateSchema) => state.registration.identifier
