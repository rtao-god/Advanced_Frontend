import { InputHTMLAttributes, Ref } from 'react'

export default interface nputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: string
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
  height?: string
  borderRadius?: string
  padding?: string
  fz?: string
  border?: string
  className?: string
  ref?: Ref<HTMLInputElement>;
}
