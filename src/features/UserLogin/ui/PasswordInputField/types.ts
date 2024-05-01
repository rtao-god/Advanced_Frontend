import { ChangeEvent } from 'react'

export interface IPasswordInputFieldProps {
  password: string;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void
  error?: boolean
  className?: string
  type?: 'text' | 'password'
  placeholder?: string
}
