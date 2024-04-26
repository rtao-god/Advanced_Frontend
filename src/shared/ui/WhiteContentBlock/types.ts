import { CSSProperties, ReactNode } from 'react'

export interface IWhiteContentBlockProps {
  children: ReactNode
  style?: CSSProperties
  className?: string
  onClick?: (e?: MouseEvent | undefined) => void
}
