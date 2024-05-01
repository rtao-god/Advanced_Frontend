import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DynamicModuleLoader, { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import cls from './UserLogin.module.sass';
import classNames from '@/shared/lib/helpers/classNames';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginIsLoading, getLoginError, getLoginPassword, getLoginUsername } from '../../model/selectors/';
import Btn from '@/shared/ui/Btn/Btn';
import { Input } from '@/shared/ui/Input/Input';
import { Text } from '@/shared/ui/Text/Text';
import { PasswordInputField } from '../PasswordInputField/PasswordInputField';

export interface ILoginFormProps {
    className?: string;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const UserLogin = memo(({ className }: ILoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(loginActions.setUsername(e.target.value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(loginActions.setPassword(e.target.value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(cls.UserLogin, {}, [className || ''])}>
                {error && <Text type='p'> error: {error}</Text>}
                <Input
                    className={cls.input}
                    type="text"
                    onChange={onChangeUsername}
                    placeholder={t('enterLogin')}
                    value={username}
                />

                <PasswordInputField
                    type="text"
                    onChangePassword={onChangePassword}
                    password={password}
                    placeholder={t('enterPassword')}
                />

                <Btn
                    className={cls.loginBtn}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('login')}
                </Btn>
            </div>
        </DynamicModuleLoader>
    );
});

export default UserLogin;