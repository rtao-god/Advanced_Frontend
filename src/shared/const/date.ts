export const date: Date = new Date()

// The current day
export const CURRENT_DATE: number = date.getDate()

// The current year
export const THIS_YEAR: number = date.getFullYear()

// The current month starting from 1 - 12
// 1 => January, 12 => December
export const THIS_MONTH: number = date.getMonth() + 1

export const WEEK_DAYS: Record<string, string> = {
    Monday: 'Mon',
    Tuesday: 'Tue',
    Wednesday: 'Wed',
    Thursday: 'Thu',
    Friday: 'Fri',
    Saturday: 'Sat',
    Sunday: 'Sun'
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

export function shortDate(day: number, month: number) {
    for (let key in CALENDAR_MONTHS) {
        if (month == key) return day + ' ' + CALENDAR_MONTHS[key] + '.'
    }
}

export const THIS_MONTH_STR: string = CALENDAR_MONTHS[THIS_MONTH]

export const CALENDAR_WEEKS = 6

export function getDaysInMonth(year: number, month: number): number {
    return new Date(year, month, 0).getDate()
}

export function getLeapYear(dateObj: Date) {
    const year = dateObj.getFullYear()

    let leap = null

    if (year % 400 == 0) leap = true
    else if (year % 100 == 0) leap = false
    else if (year % 4 == 0) leap = true
    else leap = false
    return leap
}

export function getLastDayMonth(dateObj: Date) {
    const lastDay = new Date(dateObj.getFullYear(), dateObj.getMonth() + 1, 0).getDate()
    console.log('lastDay', lastDay)
    return date.getDate() === lastDay
}

export function getMonthGrid(year: number, month: number): (number | null)[] {
    const daysInCurrentMonth = getDaysInMonth(year, month)
    const firstDayOfMonth = new Date(year, month - 1, 1).getDay()

    const grid: (number | null)[] = []

    const emptyCells = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1

    // Добавляем пустые ячейки для начала недели
    for (let i = 0; i < emptyCells; i++) {
        grid.push(null) // Пустые ячейки
    }

    // Добавляем дни текущего месяца
    for (let i = 1; i <= daysInCurrentMonth; i++) {
        grid.push(i)
    }

    // Заполняем оставшиеся ячейки следующего месяца
    const gridLength = grid.length
    for (let i = 1; gridLength + i <= CALENDAR_WEEKS * 7; i++) {
        grid.push(null) // Пустые ячейки для следующего месяца
    }

    return grid
}
