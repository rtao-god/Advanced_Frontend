import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DynamicModuleLoader, { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginByIdentifier } from '../../model/services/loginByIdentifier/loginByIdentifier';
import cls from './UserLogin.module.sass';
import classNames from '@/shared/lib/helpers/classNames';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginIsLoading, getLoginError, getLoginPassword } from '../../model/selectors/';
import Btn from '@/shared/ui/Btn/Btn';
import Input from '@/shared/ui/Input/Input';
import Text from '@/shared/ui/Text/Text';
import PasswordInputField from '../PasswordInputField/PasswordInputField';
import { getLoginIdentifier } from '../../model/selectors/getLoginIdentifier/getLoginIdentifier';
import Rows from '@/shared/ui/Rows/Rows';
import AppLink from '@/shared/ui/AppLink/AppLink';

export interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const UserLogin = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const identifier = useSelector(getLoginIdentifier);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeIdentifier = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(loginActions.setIdentifier(e.target.value));
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
        dispatch(loginByIdentifier({ identifier, password }));
    }, [dispatch, password, identifier]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(cls.UserLogin, {}, [className || ''])}>
                {error && <Text type='p'> error: {error}</Text>}
                <Input
                    type="text"
                    className={cls.input}
                    border={
                        error
                            ? "1px solid #D64657"
                            : ""
                    }
                    onChange={onChangeIdentifier}
                    placeholder={t('EnterYouRemailOrPhoneNumber')}
                />

                <PasswordInputField
                    type="text"
                    className={cls.input}
                    onChangePassword={onChangePassword}
                    password={password}
                    placeholder={t('EnterThePassword')}
                />

                <Rows gap={20} rows={["auto"]} >
                    <Btn className={cls.login_btn} onClick={onLoginClick} color="#0064FA" disabled={isLoading}>
                        {t('login')}
                    </Btn>
                    <div className={cls.register}>
                        <Text color="#7D7F82" fz="16px" type="p" >  {t("Don'tHaveAnAccount?")} </Text>
                        <AppLink to="/registration">
                            <Text color="#0064FA" fz="16px" type="p">
                                {t('Register')}
                            </Text>
                        </AppLink>
                    </div>
                </Rows>
            </div>
        </DynamicModuleLoader>
    );
});

export default UserLogin;