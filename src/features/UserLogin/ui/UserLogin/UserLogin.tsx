import { useTranslation } from 'react-i18next';
import { ChangeEvent, FormEvent, memo, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DynamicModuleLoader, { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginByIdentifier } from '../../model/services/loginByIdentifier/loginByIdentifier';
import cls from './UserLogin.module.sass';
import classNames from '@/shared/lib/helpers/classNames';
import loginReducer from '../../model/slice/loginSlice';
import { getLoginIsLoading, getLoginError, getLoginConfirmPassword, getLoginIdentifier } from '../../model/selectors/';
import Btn from '@/shared/ui/Btn/Btn';
import Input from '@/shared/ui/Input/Input';
import Text from '@/shared/ui/Text/Text';
import PasswordInputField from '../PasswordInputField/PasswordInputField';
import Rows from '@/shared/ui/Rows/Rows';
import AppLink from '@/shared/ui/AppLink/AppLink';
import LoginFormProps from './types';
import { useNavigate } from 'react-router-dom';
import { setError } from '@/features/Registration/model/slice/registrationSlice';
import { useLoginMutation } from '@/shared/lib/hooks/useLoginMutation';

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
};

const {
    IDENTIFIER_REQUIRED,
    IDENTIFIER_INVALID,
    PASSWORD_REQUIRED,
    PASSWORD_SHORT,
} = ERROR_MESSAGES

export default function UserLogin({ className }: LoginFormProps) {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const [identifierValue, setIdentifierValue] = useState<string>('')
    const identifier = useSelector(getLoginIdentifier);

    const [password, setPassword] = useState<string>('')
    const confirmPassword = useSelector(getLoginConfirmPassword);

    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);
    const [errorText, setErrorText] = useState<string>();

    const setErrorCallback = useCallback((error: string) => {
        dispatch(setError(error));
    }, [dispatch]);

    const { mutate } = useLoginMutation(identifier, password, setErrorCallback);

    function onChangeIdentifier(e: ChangeEvent<HTMLInputElement>) {
        setIdentifierValue(e.target.value)
    }

    function onChangePassword(e: ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value)
    }

    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(setError(''));
        console.log('ERROR: ', error)

        mutate();
        if (!identifier) return dispatch(setError(IDENTIFIER_REQUIRED))

        if (identifier === identifierValue) return dispatch(setError(IDENTIFIER_INVALID))
    }

    console.log('ERROR: ', error, localStorage.user)
    console.log("user: ", identifier, password)
    return (
        // <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
        <div className={classNames(cls.UserLogin, {}, [className || ''])}>
            <form onSubmit={handleLogin}>
                <Input
                    type="text"
                    onChange={onChangeIdentifier}
                    placeholder={t('EnterEmailOrPhone')}
                    error={error?.includes(IDENTIFIER_REQUIRED) ? 'Ошибка в' : ''}
                /*   className={classNames('authInputStyle', {
                      [cls.errorBorder]: loginError.includes(IDENTIFIER_REQUIRED)
                  })} */
                />
                <PasswordInputField
                    onChangePassword={onChangePassword}
                    placeholder={t('EnterThePassword')}
                    error={error}
                /*   className={classNames('authInputStyle', {
                      [cls.errorBorder]: loginError.includes(PASSWORD_REQUIRED)
                  })} */
                />
                {error && <Text type='p'> error: {error}</Text>}
                error: {error}

                {errorText && (
                    <Text type="p" color="#d64657" position="center">
                        {errorText}
                    </Text>
                )}
                <Rows gap={20} rows={["auto"]}>
                    <Btn className={cls.login_btn} color="#0064FA" disabled={isLoading}>
                        {t('login')}
                    </Btn>
                    <div className={cls.register}>
                        <Text color="#7D7F82" fz="16px" type="p" >  {t("Don'tHaveAnAccount?")} </Text>
                        <AppLink to="/registration" className={cls.registerText}>
                            <Text color="#0064FA" fz="16px" type="p">
                                {t('Register')}
                            </Text>
                        </AppLink>
                    </div>
                </Rows>
            </form>
        </div>
        // </DynamicModuleLoader>
    );
}