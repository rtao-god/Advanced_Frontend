import { useState } from 'react'
import PasswordInputFieldProps from './types'
import cls from './PasswordInputField.module.sass'
import Row from '@/shared/ui/Row/Row'
import Input from '@/shared/ui/Input/Input'
import { ShowPassword } from '@/features/ShowPassword'
import classNames from '@/shared/lib/helpers/classNames'

const ERROR_MESSAGES = {
    PASSWORD_REQUIRED: 'Введите пароль.'
}

const { PASSWORD_REQUIRED } = ERROR_MESSAGES

export default function PasswordInputField({
    className,
    onChangePassword,
    placeholder,
    loginError
}: PasswordInputFieldProps) {
    const [isShow, setIsShow] = useState(false)

    const handleClick = () => {
        setIsShow(prev => !prev)
    }

    return (
        <div className={classNames(cls.PasswordInputField, {}, [])}>
            <Row gap={0} className={loginError ? `${cls.error} ${cls.pass}` : cls.pass}>
                <Input
                    className={className}
                    onChange={onChangePassword}
                    type={isShow ? 'text' : 'password'}
                    placeholder={placeholder ?? 'Введите пароль'}
                    border='none'
                    borderRadius='8px 0px 0px 8px'
                    error={loginError?.includes(PASSWORD_REQUIRED) ? 'Ошибка в дате рождения' : ''}
                />
                <ShowPassword isShow={isShow} onClick={handleClick} />
            </Row>
        </div>
    )
}
