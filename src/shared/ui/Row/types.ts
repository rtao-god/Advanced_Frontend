import { CSSProperties, ReactNode } from 'react'

export default interface RowProps {
  children: ReactNode
  style?: CSSProperties
  gap: number
  className?: string
  onClick?: () => void
}
