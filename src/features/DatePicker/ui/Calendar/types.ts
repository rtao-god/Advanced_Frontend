import DateSchema from '@/entities/date/model/types/DateSchema'

export default interface CalendarProps {
    className?: string
    departureDate: DateSchema
    arrivalDate: DateSchema
}
