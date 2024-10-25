import { FormEvent } from 'react'
import classNames from '@/shared/lib/helpers/classNames'
import cls from './Form.module.scss'
import FormProps from './types'

export default function Form({ onSubmit, className, children }: FormProps) {
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData.entries())
        onSubmit(data)
    }

    return (
        <form onSubmit={handleSubmit} className={classNames(cls.Form, {}, [className ?? ''])}>
            {children}
        </form>
    )
}
