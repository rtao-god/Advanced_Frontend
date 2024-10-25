import classNames from '@/shared/lib/helpers/classNames'
import cls from './Calendar.module.sass'
import CalendarProps from './types'
import { getWeekDaysArray, THIS_MONTH_STR, THIS_YEAR, CALENDAR_MONTHS, THIS_MONTH } from '@/shared/const/date'
import { Text } from '@/shared/ui'
import Day from '../Day/Day'

export default function Calendar({ className }: CalendarProps) {
    const nextMonth = THIS_MONTH === 12 ? 1 : THIS_MONTH + 1
    const nextMonthYear = THIS_MONTH === 12 ? THIS_YEAR + 1 : THIS_YEAR
    const nextMonthStr = CALENDAR_MONTHS[nextMonth]

    return (
        <div className={classNames(cls.Calendar, {}, [className ?? ''])}>
            <div className={cls.monthHeader}>
                <Text type='h1'>
                    {THIS_MONTH_STR} {THIS_YEAR}
                </Text>
                <div className={cls.weekDays}>
                    {getWeekDaysArray().map((day, index) => (
                        <Text key={index} type='h3'>
                            {day}
                        </Text>
                    ))}
                </div>
                <Day year={THIS_YEAR} month={THIS_MONTH} />
            </div>
            <div className={cls.monthHeader}>
                <Text type='h1'>
                    {nextMonthStr} {nextMonthYear}
                </Text>
                <div className={cls.weekDays}>
                    {getWeekDaysArray().map((day, index) => (
                        <Text key={index} type='h3'>
                            <div>{day}</div>
                        </Text>
                    ))}
                </div>
                <Day year={nextMonthYear} month={nextMonth} />
            </div>
        </div>
    )
}
