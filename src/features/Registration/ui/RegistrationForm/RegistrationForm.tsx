import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Rows from '@/shared/ui/Rows/Rows'
import Btn from '@/shared/ui/Btn/Btn'
import Input from '@/shared/ui/Input/Input'

import classNames from '@/shared/lib/helpers/classNames'
import { useRegistrationMutation } from '@/shared/lib/hooks/useRegistrationMutation'
import cls from './RegistrationForm.module.sass'

// import { Policy } from "../Policy";
import RegistrationFormProps from './types'
import {
    getBirthday,
    getConfirmPassword,
    getError,
    getIdentifier,
    getIsChecked,
    getPassword
} from '../../model/selectors'
import {
    setBirthday,
    setPassword,
    setConfirmPassword,
    setError,
    setIdentifier
} from '../../model/slice/registrationSlice'

const ERROR_MESSAGES = {
    BIRTHDAY_REQUIRED: 'Укажите дату рождения.',
    BIRTHDAY_COMPLETE: 'Введите полностью свою дату рождения.',
    IDENTIFIER_REQUIRED: 'Введите номер телефона или электронную почту.',
    IDENTIFIER_INVALID: 'Такого телефона или почты не существует.',
    PASSWORD_REQUIRED: 'Введите пароль.',
    PASSWORD_SHORT: 'Пароль должен быть длиннее 4 символов.',
    PASSWORD_MISMATCH: 'Пароли не совпадают.',
    TERMS_REQUIRED: 'Необходимо принять условия.'
}

const {
    BIRTHDAY_REQUIRED,
    BIRTHDAY_COMPLETE,
    IDENTIFIER_REQUIRED,
    IDENTIFIER_INVALID,
    PASSWORD_REQUIRED,
    PASSWORD_SHORT,
    PASSWORD_MISMATCH,
    TERMS_REQUIRED
} = ERROR_MESSAGES

export default function RegistrationForm({ className }: RegistrationFormProps) {
    const birthday = useSelector(getBirthday)
    const identifier = useSelector(getIdentifier)
    const password = useSelector(getPassword)
    const confirmPassword = useSelector(getConfirmPassword)
    const isChecked = useSelector(getIsChecked)
    const error = useSelector(getError)
    const dispatch = useDispatch()
    const [isShowValue, setIsShowValue] = useState<boolean>(false)
    const [inputDateValue, setInputDateValue] = useState<string>('ГГГГ-ММ-ДД')

    const onFocusHandler = () => {
        setIsShowValue(true)
    }
    const onBlurHandler = () => {
        setIsShowValue(false)
    }

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,6})+$/
    const phoneRegex = /^(\+?\d{1,3}[- ]?)?(\(?\d{3}\)?[- ]?)?[\d -]{7,10}$/

    const setErrorCallback = useCallback(
        (error: string) => {
            dispatch(setError(error))
        },
        [dispatch]
    )

    const { mutate } = useRegistrationMutation(identifier, password, setErrorCallback)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        const digitsOnly = value.replace(/\D/g, '')
        let formattedDate = 'ГГГГ-ММ-ДД'

        switch (name) {
            case 'birthday':
                for (let i = 0; i < digitsOnly.length; i++) {
                    if (i === 0) {
                        formattedDate = formattedDate.replace('Г', digitsOnly[i])
                    } else if (i === 1) {
                        formattedDate = formattedDate.replace('Г', digitsOnly[i])
                    } else if (i === 2) {
                        formattedDate = formattedDate.replace('Г', digitsOnly[i])
                    } else if (i === 3) {
                        formattedDate = formattedDate.replace('Г', digitsOnly[i])
                    } else if (i === 4) {
                        formattedDate = formattedDate.replace('М', digitsOnly[i])
                    } else if (i === 5) {
                        formattedDate = formattedDate.replace('М', digitsOnly[i])
                    } else if (i === 6) {
                        formattedDate = formattedDate.replace('Д', digitsOnly[i])
                    } else if (i === 7) {
                        formattedDate = formattedDate.replace('Д', digitsOnly[i])
                    }
                }

                setInputDateValue(formattedDate)
                dispatch(setBirthday(formattedDate.replace(/\D/g, '')))
                break

            case 'identifier':
                dispatch(setIdentifier(value))
                break

            case 'password':
                dispatch(setPassword(value))
                if (value.length < 4) {
                    dispatch(setError(PASSWORD_SHORT))
                } else {
                    dispatch(setError(''))
                }
                break

            case 'confirmPassword':
                dispatch(setConfirmPassword(value))
                break

            default:
                break
        }
    }

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch(setError(''))

        if (birthday === '') {
            dispatch(setError(BIRTHDAY_REQUIRED))
            return
        } else if (birthday.length < 8) {
            dispatch(setError(BIRTHDAY_COMPLETE))
            return
        }

        if (!identifier) {
            dispatch(setError(IDENTIFIER_REQUIRED))
            return
        } else if (!emailRegex.test(identifier) && !phoneRegex.test(identifier)) {
            dispatch(setError(IDENTIFIER_INVALID))
            return
        }

        if (!password) {
            dispatch(setError(PASSWORD_REQUIRED))
            return
        } else if (password.length < 4) {
            dispatch(setError(PASSWORD_SHORT))
            return
        }

        if (password !== confirmPassword) {
            dispatch(setError(PASSWORD_MISMATCH))
            return
        }

        if (!isChecked) {
            dispatch(setError(TERMS_REQUIRED))
            return
        }

        mutate()
    }

    console.log('user: ', identifier, password)
    console.log('localStorage: ', localStorage.user)
    return (
        <div className={classNames(cls.RegistrationForm, {}, [className ?? ''])}>
            <form onSubmit={handleOnSubmit}>
                <Rows gap={20} rows={['auto']}>
                    <Rows className={cls.inputs} gap={10} rows={['auto']}>
                        <Input
                            type='text'
                            placeholder='Дата рождения'
                            name='birthday'
                            onChange={handleChange}
                            onFocus={onFocusHandler}
                            value={isShowValue ? inputDateValue : birthday}
                            error={
                                error.includes(BIRTHDAY_REQUIRED) || error.includes(BIRTHDAY_COMPLETE)
                                    ? 'Ошибка в дате рождения'
                                    : ''
                            }
                            className={classNames('auth_input_style', {
                                [cls.errorBorder]:
                                    error.includes(BIRTHDAY_REQUIRED) || error.includes(BIRTHDAY_COMPLETE)
                            })}
                        />
                        <Input
                            type='text'
                            placeholder='Введите номер или почту'
                            name='identifier'
                            onChange={handleChange}
                            value={identifier}
                            error={
                                error.includes(IDENTIFIER_REQUIRED) || error.includes(IDENTIFIER_INVALID)
                                    ? 'Ошибка в дате рождения'
                                    : ''
                            }
                            className={classNames('auth_input_style', {
                                [cls.errorBorder]:
                                    error.includes(IDENTIFIER_REQUIRED) || error.includes(IDENTIFIER_INVALID)
                            })}
                        />
                        <Input
                            type='password'
                            placeholder='Введите пароль'
                            name='password'
                            onChange={handleChange}
                            value={password}
                            error={
                                error.includes(PASSWORD_REQUIRED) || error.includes(PASSWORD_MISMATCH)
                                    ? 'Ошибка в дате рождения'
                                    : ''
                            }
                            className={classNames('auth_input_style', {
                                [cls.errorBorder]:
                                    error.includes(PASSWORD_REQUIRED) || error.includes(PASSWORD_MISMATCH)
                            })}
                        />
                        <Input
                            type='password'
                            placeholder='Подтвердите пароль'
                            name='confirmPassword'
                            onChange={handleChange}
                            value={confirmPassword}
                            error={
                                error.includes(PASSWORD_MISMATCH) || error.includes(PASSWORD_SHORT)
                                    ? 'Ошибка в дате рождения'
                                    : ''
                            }
                            className={classNames('auth_input_style', {
                                [cls.errorBorder]: error.includes(PASSWORD_MISMATCH) || error.includes(PASSWORD_SHORT)
                            })}
                        />
                        <p className={cls.error}>{error}</p>

                        <Btn
                            color='#0064FA'
                            disabled={
                                !identifier ||
                                !birthday ||
                                password.length < 4 ||
                                password !== confirmPassword ||
                                !isChecked
                            }>
                            Продолжить
                        </Btn>
                    </Rows>
                </Rows>
            </form>
        </div>
    )
}
