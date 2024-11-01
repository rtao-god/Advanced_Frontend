import classNames from '@/shared/lib/helpers/classNames'
import cls from './Day.module.scss'
import { getLastDayMonth, getMonthGrid, shortDate } from '@/shared/const/date'
import DayProps from './types'
import { useDispatch, useSelector } from 'react-redux'
import { dateActions, selectArrivalDate, selectDepartureDate, selectIsSelectingDepartureDate } from '@/entities/date'

export default function Day({ className, year, month }: DayProps) {
    const monthGrid = getMonthGrid(year, month)
    const dispatch = useDispatch()
    const departureDate = useSelector(selectDepartureDate)
    const arrivalDate = useSelector(selectArrivalDate)
    const isSelectingDepartureDate = useSelector(selectIsSelectingDepartureDate)

    function handleClick(day: number, dateObj: Date, isActive: boolean) {
        if (!isActive) return

        const selectedDateValue = {
            value: shortDate(day, month),
            dateObj
        }

        if (isSelectingDepartureDate) {
            dispatch(dateActions.setDepartureDate(selectedDateValue))
            dispatch(dateActions.setIsSelectingDepartureDate(false))
            console.log('1')
            // dispatch(dateActions.setArrivalDate(null))
        } else if (departureDate && dateObj >= departureDate.dateObj) {
            dispatch(dateActions.setArrivalDate(selectedDateValue))
            dispatch(dateActions.setIsSelectingDepartureDate(false))
            console.log('2')
        } else if (departureDate && !isSelectingDepartureDate) {
            dispatch(dateActions.setArrivalDate(null))
            dispatch(dateActions.setDepartureDate(selectedDateValue))
            dispatch(dateActions.setIsSelectingDepartureDate(false))
            console.log('3')
        }
    }
    console.log('departureDate', departureDate?.value, 'arrivalDate', arrivalDate?.value)

    return (
        <div className={classNames(cls.month_grid, {}, [className ?? ''])}>
            {monthGrid.map((day, index) => {
                if (day === null) {
                    return <div key={index} className={cls.day_cell}></div>
                }

                const dateObj = new Date(year, month - 1, day)
                dateObj.setHours(0, 0, 0, 0)
                const today = new Date()
                today.setHours(0, 0, 0, 0)

                const isActive = dateObj >= today
                let isDisabled = false

                const isSelectedDeparture = departureDate && dateObj.getTime() === departureDate.dateObj.getTime()
                const isSelectedArrival = arrivalDate && dateObj.getTime() === arrivalDate.dateObj.getTime()

                let isRange = null
                if (departureDate && arrivalDate && dateObj > departureDate.dateObj && dateObj < arrivalDate.dateObj)
                    isRange = true

                let isSelecteds = null
                if (isSelectedDeparture && isSelectedArrival) isSelecteds = true

                let isFirstDay = null
                if (isRange && day === 1) isFirstDay = true

                let isLastDay = null
                if (isRange && getLastDayMonth(dateObj)) isLastDay = true

                return (
                    <div
                        key={index}
                        className={classNames(
                            cls.Day_cell,
                            {
                                [cls.active]: isActive && !isDisabled,
                                [cls.disabled]: !isActive || isDisabled,
                                [cls.selected_departure]: isSelectedDeparture,
                                [cls.selected_arrival]: isSelectedArrival,
                                [cls.range]: isRange,
                                [cls.firstDay]: isFirstDay,
                                [cls.lastDay]: isLastDay
                            },
                            [cls.className ?? '']
                        )}
                        onClick={isActive && !isDisabled ? () => handleClick(day, dateObj, isActive) : undefined}>
                        {day}
                    </div>
                )
            })}
        </div>
    )
}
