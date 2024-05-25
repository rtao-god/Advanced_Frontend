import { InputHTMLAttributes } from 'react'
import cls from './Input.module.sсss'
import classNames from '@/shared/lib/helpers/classNames'
import InputProps from './types'

export default function Input({
  type = 'text',
  placeholder,
  width = '100%',
  borderColor,
  bt,
  br,
  bb,
  bl,
  btr,
  bbr,
  btl,
  bbl,
  bgcolor,
  disabled,
  onChange,
  onBlur,
  value,
  height,
  borderRadius,
  padding,
  name,
  className = '',
  onFocus,
  fz,
  border,
  ref,
  error = '',
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  const inputClassName = classNames(cls.Input, {
    [cls.error_border]: error,
    [cls[className]]: className,
  })

  return (
    <input
      className={inputClassName}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      style={{
        width,
        borderRadius: borderRadius || `${btr} ${bbr} ${bbl} ${btl}`,
        height,
        borderColor,
        borderTop: bt,
        borderRight: br,
        borderBottom: bb,
        borderLeft: bl,
        backgroundColor: bgcolor,
        padding,
        fontSize: fz,
        border,
      }}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      value={value}
      name={name}
    />
  )
}
