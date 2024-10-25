import classNames from '@/shared/lib/helpers/classNames'
import cls from './Day.module.sass'
import { getMonthGrid } from '@/shared/const/date'
import DayProps from './types'

export default function Day({ className, year, month }: DayProps) {
    const monthGrid = getMonthGrid(year, month)

    return (
        <div className={classNames(cls.month_grid, {}, [className ?? ''])}>
            {monthGrid.map((day, index) => (
                <div key={index} className={cls.day}>
                    {day}
                </div>
            ))}
        </div>
    )
}
