export default interface DayProps {
    year: number
    month: number
    className?: string
    isSelectingDepartureDate: boolean
    onSelectDate?: Date
    departureDate?: Date
    arrivalDate?: Date
}
