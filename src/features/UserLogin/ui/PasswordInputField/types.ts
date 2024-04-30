import { ChangeEvent } from 'react'

export interface IPasswordInputFieldProps {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  error?: boolean
}
