import { ChangeEvent } from 'react'

export default interface PasswordInputFieldProps {
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void
  error?: boolean
  className?: string
  placeholder?: string
}
