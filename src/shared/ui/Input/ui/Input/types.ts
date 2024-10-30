import { InputHTMLAttributes, MouseEventHandler } from 'react'

export default interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type?: 'date' | 'text' | 'checkbox'
    onClick?: MouseEventHandler<HTMLInputElement>
    width?: string
    height?: string
    className?: string
    error?: string
    borderColor?: string
    bt?: string
    br?: string
    bb?: string
    bl?: string
    btr?: string
    bbr?: string
    btl?: string
    bbl?: string
    bgcolor?: string
    borderRadius?: string
    padding?: string
    fz?: string
    border?: string
    readOnly?: boolean
}
