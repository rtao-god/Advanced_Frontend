import { ReactNode, CSSProperties } from 'react'

export interface IText {
  type: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: ReactNode
  position?: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent'
  fz?: string | number
  color?: string
  fw?: number
  onClick?: () => void
  style?: CSSProperties
  className?: string
}
