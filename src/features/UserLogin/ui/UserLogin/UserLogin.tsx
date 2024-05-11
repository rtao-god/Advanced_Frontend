import { useTranslation } from 'react-i18next';
import { ChangeEvent, memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DynamicModuleLoader, { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginByIdentifier } from '../../model/services/loginByIdentifier/loginByIdentifier';
import cls from './UserLogin.module.sass';
import classNames from '@/shared/lib/helpers/classNames';
import { loginReducer } from '../../model/slice/loginSlice';
import { getLoginIsLoading, getLoginError, getLoginConfirmPassword, getLoginIdentifier } from '../../model/selectors/';
import Btn from '@/shared/ui/Btn/Btn';
import Input from '@/shared/ui/Input/Input';
import Text from '@/shared/ui/Text/Text';
import PasswordInputField from '../PasswordInputField/PasswordInputField';
import Rows from '@/shared/ui/Rows/Rows';
import AppLink from '@/shared/ui/AppLink/AppLink';
import LoginFormProps from './types';
import { useNavigate } from 'react-router-dom';

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const UserLogin = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const navigate = useNavigate()

    const [identifierValue, setIdentifierValue] = useState('')
    const identifier = useSelector(getLoginIdentifier);

    const [password, setPassword] = useState('')
    const confirmPassword = useSelector(getLoginConfirmPassword);

    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    function onChangeIdentifier(e: ChangeEvent<HTMLInputElement>) {
        setIdentifierValue(e.target.value)
    }

    function onChangePassword(e: ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value)
    }

    const onLoginClick = () => {
        if (confirmPassword === password && identifier === identifierValue) {
            console.log("TRUE")
            navigate('/')
            dispatch(loginByIdentifier({ identifier, password }));
        } else {
            console.log("FALSE")
        }
    }

    console.log('Password: ', password, confirmPassword)

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
                    placeholder={t('EnterEmailOrPhone')}
                />

                <PasswordInputField
                    className={cls.input}
                    onChangePassword={onChangePassword}
                    placeholder={t('EnterThePassword')}
                />

                <Rows gap={20} rows={["auto"]}>
                    <Btn className={cls.login_btn} onClick={onLoginClick} color="#0064FA" disabled={isLoading}>
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
            </div>
        </DynamicModuleLoader>
    );
});

export default UserLogin;