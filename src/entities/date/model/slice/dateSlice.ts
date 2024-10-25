import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import DateSchema from '../types/DateSchema'

const initialState: DateSchema = {
    departureDate: null,
    arrivalDate: null
}

const dateSlice = createSlice({
    name: 'date',
    initialState,
    reducers: {
        setDepartureDate(state, action: PayloadAction<string>) {
            state.departureDate = action.payload
        },
        setArrivalDate(state, action: PayloadAction<string>) {
            state.arrivalDate = action.payload
        }
    }
})

export const { actions: dateActions } = dateSlice
export const { reducer: dateReducer } = dateSlice
