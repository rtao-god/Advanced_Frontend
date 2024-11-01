import { useTranslation } from 'react-i18next'
import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cls from './UserLogin.module.sass'
import classNames from '@/shared/lib/helpers/classNames'
import { getLoginIsLoading, getLoginError, getLoginConfirmPassword, getLoginIdentifier } from '../../model/selectors/'
import { Input, Btn, Text, Rows, Link } from '@/shared/ui'
import PasswordInputField from '../PasswordInputField/PasswordInputField'
import LoginFormProps from './types'
import { setError } from '@/features/Registration/model/slice/registrationSlice'
import { useLoginMutation } from '@/shared/lib/hooks/useLoginMutation'

/* const initialReducers: ReducersList = {
    loginForm: loginReducer,
};
 */
const ERROR_MESSAGES = {
    IDENTIFIER_REQUIRED: 'Введите номер телефона или электронную почту.',
    IDENTIFIER_INVALID: 'Такого телефона или почты не существует.',
    PASSWORD_REQUIRED: 'Введите пароль.',
    PASSWORD_SHORT: 'Пароль должен быть длиннее 4 символов.',
    PASSWORD_MISMATCH: 'Пароли не совпадают.',
    TERMS_REQUIRED: 'Необходимо принять условия.'
}

const { IDENTIFIER_REQUIRED, IDENTIFIER_INVALID, PASSWORD_REQUIRED, PASSWORD_SHORT } = ERROR_MESSAGES

export default function UserLogin({ className }: LoginFormProps) {
    const { t } = useTranslation()
    const dispatch = useDispatch()

    const [identifierValue, setIdentifierValue] = useState<string>('')
    const identifier = useSelector(getLoginIdentifier)

    const [password, setPassword] = useState<string>('')
    const confirmPassword = useSelector(getLoginConfirmPassword)

    const isLoading = useSelector(getLoginIsLoading)
    const error = useSelector(getLoginError)
    const [errorText, setErrorText] = useState<string>()

    const setErrorCallback = useCallback(
        (error: string) => {
            dispatch(setError(error))
        },
        [dispatch]
    )

    const { mutate } = useLoginMutation(identifier, password, setErrorCallback)

    function onChangeIdentifier(e: ChangeEvent<HTMLInputElement>) {
        setIdentifierValue(e.target.value)
    }

    function onChangePassword(e: ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value)
    }

    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch(setError(''))
        console.log('ERROR: ', error)

        mutate()
        if (!identifier) return dispatch(setError(IDENTIFIER_REQUIRED))

        if (identifier === identifierValue) return dispatch(setError(IDENTIFIER_INVALID))
    }

    console.log('ERROR: ', error, localStorage.user)
    console.log('user: ', identifier, password)

    return (
        // <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
        <div className={classNames(cls.User_login, {}, [className ?? ''])}>
            <form onSubmit={handleLogin}>
                <Input
                    type='text'
                    onChange={onChangeIdentifier}
                    placeholder={t('EnterEmailOrPhone')}
                    error={error?.includes(IDENTIFIER_REQUIRED) ? 'Ошибка в' : ''}
                    /*   className={classNames('auth_input_style', {
                      [cls.errorBorder]: loginError.includes(IDENTIFIER_REQUIRED)
                  })} */
                />
                <PasswordInputField
                    onChangePassword={onChangePassword}
                    placeholder={t('EnterThePassword')}
                    error={error}
                    /*   className={classNames('auth_input_style', {
                      [cls.errorBorder]: loginError.includes(PASSWORD_REQUIRED)
                  })} */
                />
                {error && <Text type='p'> error: {error}</Text>}
                error: {error}
                {errorText && (
                    <Text type='p' color='#d64657' position='center'>
                        {errorText}
                    </Text>
                )}
                <Rows gap={20} rows={['auto']}>
                    <Btn className={cls.login_btn} color='#0064FA' disabled={isLoading}>
                        {t('login')}
                    </Btn>
                    <div className={cls.register}>
                        <Text color='#7D7F82' fz='16px' type='p'>
                            {t('DonTHaveAnAccount?')}
                        </Text>
                        <Link to='/registration' className={cls.register_text}>
                            <Text color='#0064FA' fz='16px' type='p'>
                                {t('Register')}
                            </Text>
                        </Link>
                    </div>
                </Rows>
            </form>
        </div>
        // </DynamicModuleLoader>
    )
}
