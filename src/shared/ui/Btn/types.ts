import { MouseEventHandler, ReactNode } from 'react'

export default interface BtnProps {
    color?: string
    children?: ReactNode
    width?: string
    height?: string
    br?: string
    onClick?: MouseEventHandler<HTMLButtonElement>
    padding?: string
    disabled?: boolean
    border?: string
    type?: 'submit' | 'reset' | 'button'
    fz?: string
    minW?: string
    className?: string
    size?: 'small' | 'medium' | 'large'
    dataTestid?: string
}
