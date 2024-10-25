import { ReactNode, CSSProperties } from 'react'

export default interface ElementProps {
    type?: keyof HTMLElementTagNameMap
    className?: string
    children: ReactNode
    onClick?: () => void
    style?: CSSProperties
}
