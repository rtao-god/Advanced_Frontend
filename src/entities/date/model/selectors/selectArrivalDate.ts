import { StateSchema } from '@/app/providers/StoreProvider'

export const selectArrivalDate = (state: StateSchema) => state.date.arrivalDate
