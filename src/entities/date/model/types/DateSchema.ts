export default interface DateSchema {
    departureDate: { value: string; dateObj: Date } | null
    arrivalDate: { value: string; dateObj: Date } | null
    isSelectingDepartureDate: boolean
}
