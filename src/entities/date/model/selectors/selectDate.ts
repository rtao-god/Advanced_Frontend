import { StateSchema } from '@/app/providers/StoreProvider'

export const selectDepartureDate = (state: StateSchema) => state.date?.departureDate
export const selectArrivalDate = (state: StateSchema) => state.date?.arrivalDate
export const selectIsSelectingDepartureDate = (state: StateSchema) => state.date?.isSelectingDepartureDate
