import classNames from '@/shared/lib/helpers/classNames'
import cls from './Calendar.module.scss'
import CalendarProps from '../Calendar/types'
import Month from '../Month/Month'

export default function Calendar({ className }: CalendarProps) {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const currentMonth = currentDate.getMonth() + 1

    const nextMonth = currentMonth === 12 ? 1 : currentMonth + 1
    const nextMonthYear = currentMonth === 12 ? currentYear + 1 : currentYear

    return (
        <div className={classNames(cls.Calendar, {}, [className ?? ''])}>
            <Month year={currentYear} month={currentMonth} />
            <Month year={nextMonthYear} month={nextMonth} />
        </div>
    )
}
