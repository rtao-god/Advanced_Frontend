import { CSSProperties, ReactNode } from 'react'

export default interface WhiteContentBlockProps {
    children: ReactNode
    style?: CSSProperties
    className?: string
    onClick?: (e?: MouseEvent | undefined) => void
}
