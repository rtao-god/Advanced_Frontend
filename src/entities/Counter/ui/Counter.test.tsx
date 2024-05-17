import ComponentRender from '@/shared/lib/tests/ComponentRender/ComponentRender'
import Counter from './Counter'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('ComponentRender', () => {
  test('render', () => {
    ComponentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    })
    expect(screen.getByTestId('value_title')).toHaveTextContent('10')
  })

  test('increment', () => {
    ComponentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    })
    userEvent.click(screen.getByTestId('increment_btn'))
    expect(screen.getByTestId('increment_btn')).toHaveTextContent('11')
  })

  test('decremnt', () => {
    ComponentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    })
    userEvent.click(screen.getByTestId('decremnt_btn'))
    expect(screen.getByTestId('decremnt_btn')).toHaveTextContent('9')
  })
})
