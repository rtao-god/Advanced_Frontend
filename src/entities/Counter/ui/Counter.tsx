import cls from './Counter.module.sass'
import Btn from '@/shared/ui/Btn/Btn'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../model/slice/counterSlice'
import classNames from '@/shared/lib/helpers/classNames'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

interface CounterProps {
    className?: string
}

export default function Counter({ className }: CounterProps) {
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)

    function increment() {
        dispatch(counterActions.increment())
    }

    function decrement() {
        dispatch(counterActions.decrement())
    }

    return (
        <div className={classNames(cls.Counter, {}, [className || ''])}>
            <h1 data-testid="value_title"> {counterValue}</h1>
            <Btn data-testid="increment_btn" onClick={increment} > Increment </Btn>
            <Btn data-testid="decremnt_btn" onClick={decrement}> Decrement </Btn>
        </div>
    )
}