const date: Date = new Date()

// The current year
export const THIS_YEAR: number = date.getFullYear()

// The current month starting from 1 - 12
// 1 => January, 12 => December
export const THIS_MONTH: number = date.getMonth() + 1

export const WEEK_DAYS: Record<string, string> = {
    Sunday: 'Sun',
    Monday: 'Mon',
    Tuesday: 'Tue',
    Wednesday: 'Wed',
    Thursday: 'Thu',
    Friday: 'Fri',
    Saturday: 'Sat'
}

export function getWeekDaysArray(): string[] {
    return Object.values(WEEK_DAYS)
}

export const CALENDAR_MONTHS: Record<number, string> = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec'
}

export const THIS_MONTH_STR: string = CALENDAR_MONTHS[THIS_MONTH]

export const CALENDAR_WEEKS = 6

export function getDaysInMonth(year: number, month: number): number {
    return new Date(year, month, 0).getDate()
}

export function getMonthGrid(year: number, month: number): (number | null)[] {
    const daysInCurrentMonth = getDaysInMonth(year, month)
    const firstDayOfMonth = new Date(year, month - 1, 1).getDay()
    const daysInPreviousMonth = getDaysInMonth(year, month - 1)

    const grid: (number | null)[] = []

    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
        grid.push(daysInPreviousMonth - i)
    }

    for (let i = 1; i <= daysInCurrentMonth; i++) {
        grid.push(i)
    }

    const gridLength = grid.length
    for (let i = 1; gridLength + i <= CALENDAR_WEEKS * 7; i++) {
        grid.push(i)
    }

    return grid
}
