export default interface MonthProps {
    className?: string
    year: number
    month: number
    onPrevMonth?: () => void
    onNextMonth?: () => void
}
