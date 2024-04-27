import { StateSchema } from '@/app/providers/StoreProvider'

export const getCounter = (state: StateSchema) => state.counter

export const valideValue = (value: number) => {
  if (value < 0 || value > 100) {
    return false
  }
  return true
}
