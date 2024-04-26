import { ReactNode } from 'react'

export interface IBtn {
  color?: string
  children?: ReactNode
  width?: string
  br?: string
  onClick?: (handleClick?: (arg?: ReactNode) => void) => void
  padding?: string
  disabled?: boolean
  border?: string
  textColor?: string
  height?: string
  type?: 'submit' | 'reset' | 'button'
  fz?: string
  minW?: string
  className?: string
  size?: 'small' | 'medium' | 'large'
}
