import { CALENDAR_MONTHS, getWeekDaysArray } from '@/shared/const/date'
import Day from '../Day/Day'
import cls from './Month.module.scss'
import { Text } from '@/shared/ui'
import MonthProps from './types'
import classNames from '@/shared/lib/helpers/classNames'

export default function Month({ className, year, month }: MonthProps) {
    return (
        <div className={classNames(cls.Month, {}, [className ?? ''])}>
            <Text type='h1'>
                {CALENDAR_MONTHS[month]} {year}
            </Text>
            <div className={cls.week_days}>
                {getWeekDaysArray().map((day, index) => (
                    <Text key={index} type='h4'>
                        {day}
                    </Text>
                ))}
            </div>
            <Day year={year} month={month} />
        </div>
    )
}
