import { HTMLInputTypeAttribute, ChangeEvent, Dispatch, SetStateAction } from 'react'

export interface IInput {
  type: HTMLInputTypeAttribute
  placeholder?: string
  width?: string
  borderColor?: string
  checked?: boolean
  bt?: string
  br?: string
  bb?: string
  bl?: string
  btr?: string
  bbr?: string
  btl?: string
  bbl?: string
  bgcolor?: string
  padding?: string
  disabled?: boolean
  height?: string
  borderRadius?: string
  value?: string | number | readonly string[]
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  fz?: string
  border?: string
}

export interface IIconData {
  healthy: string
  sick: string
}
export interface ISwitchProps {
  onChange?: (e?: ChangeEvent<HTMLInputElement>) => void
}

export type HandleClick<T> = Dispatch<SetStateAction<T>>
