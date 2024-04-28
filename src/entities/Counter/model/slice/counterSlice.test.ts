import CounterSchema from '../types/counterSchema'
import { counterActions, counterReducer } from './counterSlice'

describe('counterSlice', () => {
  test('decrement', () => {
    const state: CounterSchema = { value: 10 }

    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 })
  })
  test('increment', () => {
    const state: CounterSchema = { value: 10 }

    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 })
  })
  test('empty', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 })
  })
  test('empty', () => {
    expect(counterReducer(undefined, counterActions.decrement())).toEqual({ value: -1 })
  })
})
