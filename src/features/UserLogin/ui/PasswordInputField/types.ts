import { ChangeEvent } from 'react'

export default interface PasswordInputFieldProps {
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void
  loginError?: string
  className?: string
  placeholder?: string
}
