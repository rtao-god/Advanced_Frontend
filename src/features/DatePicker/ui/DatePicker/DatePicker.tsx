import { useDispatch, useSelector } from 'react-redux'
import classNames from '@/shared/lib/helpers/classNames'
import cls from './DatePicker.module.sass'
import DatePickerProps from './types'
import { ChangeEvent } from 'react'
import { Modal } from '@/widgets'
import { selectArrivalDate, selectDepartureDate, dateActions } from '@/entities/date'
import { Btn, Input } from '@/shared/ui'
import useModal from '@/shared/lib/hooks/useModal'
import Calendar from '../Calendar/Calendar'

export default function DatePicker({ className }: DatePickerProps) {
    const { isOpen, openModal, closeModal } = useModal()

    const dispatch = useDispatch()
    const departureDate = useSelector(selectDepartureDate)
    const arrivalDate = useSelector(selectArrivalDate)

    function handleDepartureDateChange(e: ChangeEvent<HTMLInputElement>) {
        // setOpenModal(prev => !prev)
        dispatch(dateActions.setDepartureDate(e.target.value))
    }

    function handleArrivalDateChange(e: ChangeEvent<HTMLInputElement>) {
        dispatch(dateActions.setArrivalDate(e.target.value))
    }

    return (
        <div className={classNames(cls.Date_Picker, {}, [className ?? ''])}>
            <Btn onClick={openModal}>dfgdf</Btn>
            <Input type='text' value={departureDate} onChange={handleDepartureDateChange} />
            <div className='datepicker-separator'>
                {departureDate && arrivalDate && (
                    <div className={cls.datePicker_range}>
                        <div className={cls.datePicker_line}></div>
                    </div>
                )}
            </div>
            <Input type='text' value={arrivalDate} onChange={handleArrivalDateChange} />
            {!isOpen && (
                <Modal onClose={closeModal} width='100vw' height='100vh'>
                    <Calendar departureDate={departureDate} arrivalDate={arrivalDate} />
                </Modal>
            )}
        </div>
    )
}
