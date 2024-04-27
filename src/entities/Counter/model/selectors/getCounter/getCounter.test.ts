// import { StateSchema } from '@app/providers/StoreProvider'
import { valideValue } from './getCounter'

test('валидайция ', () => {
  expect(valideValue(50)).toBe(false)
})

/* describe('getCounter', () => {
  test('should return counter value', () => {
    const state: any = {
      counter: { value: 10 },
    };
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });
}); */
