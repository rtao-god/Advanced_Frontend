import { createSlice } from '@reduxjs/toolkit'
import DateSchema from '../types/DateSchema'

const initialState: DateSchema = {
    departureDate: null,
    arrivalDate: null,
    isSelectingDepartureDate: true
}

const dateSlice = createSlice({
    name: 'date',
    initialState,
    reducers: {
        setDepartureDate(state, action) {
            state.departureDate = action.payload
        },
        setArrivalDate(state, action) {
            state.arrivalDate = action.payload
        },
        setIsSelectingDepartureDate(state, action) {
            state.isSelectingDepartureDate = action.payload
        }
    }
})

export const { actions: dateActions } = dateSlice
export const { reducer: dateReducer } = dateSlice
