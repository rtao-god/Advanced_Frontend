import { StateSchema } from '@/app/providers/StoreProvider'

export const selectDepartureDate = (state: StateSchema) => state.date.departureDate
