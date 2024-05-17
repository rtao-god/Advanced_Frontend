import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Sidebar from './Sidebar'

describe('Sidebar', () => {
  test('initially not collapsed', () => {
    render(<Sidebar />)
    const sidebarElement = screen.getByTestId('sidebar')
    expect(sidebarElement).not.toHaveClass('collapsed')
  })

  test('toggles collapsed state on button click', () => {
    render(<Sidebar />)
    const toggleButton = screen.getByRole('button', { name: /toggle/i })
    fireEvent.click(toggleButton)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    fireEvent.click(toggleButton)
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed')
  })
})
