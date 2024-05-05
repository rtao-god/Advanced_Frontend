import { ChangeEvent } from 'react'

export default interface PasswordInputFieldProps {
  // password: string
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void
  error?: boolean
  className?: string
  // type?: 'text' | 'password'
  placeholder?: string
}
