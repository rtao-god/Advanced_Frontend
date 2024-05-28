import { ReactNode } from 'react'

export default interface BtnProps {
    color?: string
    children?: ReactNode
    width?: string
    height?: string
    br?: string
    onClick?: (handleClick?: (arg?: ReactNode) => void) => void
    padding?: string
    disabled?: boolean
    border?: string
    type?: 'submit' | 'reset' | 'button'
    fz?: string
    minW?: string
    className?: string
    size?: 'small' | 'medium' | 'large'
}
