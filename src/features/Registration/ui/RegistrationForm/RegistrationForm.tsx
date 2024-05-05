import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Rows from "@/shared/ui/Rows/Rows";
import Btn from "@/shared/ui/Btn/Btn";
import Input from "@/shared/ui/Input/Input";

import classNames from '@/shared/lib/helpers/classNames'
import { useRegistrationMutation } from "@/shared/lib/hooks/useRegistrationMutation";
import cls from './RegistrationForm.module.sass'

// import { Policy } from "../Policy";
import RegistrationFormProps from "./types";
import { getBirthday, getConfirmPassword, getError, getIdentifier, getIsChecked, getPassword } from "../../model/selectors";
import { setBirthday, setPassword, setConfirmPassword, setIsChecked, setError, setIdentifier } from '../../model/slice/registrationSlice'

export default function RegistrationForm({ className }: RegistrationFormProps) {
    const birthday = useSelector(getBirthday);
    const identifier = useSelector(getIdentifier);
    const password = useSelector(getPassword);
    const password2 = useSelector(getConfirmPassword)
    const confirmPassword = useSelector(getConfirmPassword);
    const isChecked = useSelector(getIsChecked);
    const error = useSelector(getError);
    const dispatch = useDispatch();
    const [isShowValue, setIsShowValue] = useState<boolean>(false);
    const [inputDateValue, setInputDateValue] = useState<string>("ГГГГ-ММ-ДД");

    const onFocusHandler = () => setIsShowValue(true);
    const onBlurHandler = () => setIsShowValue(false);

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,6})+$/;
    const phoneRegex = /^(\+?\d{1,3}[- ]?)?(\(?\d{3}\)?[- ]?)?[\d -]{7,10}$/;

    const setErrorCallback = useCallback((error: string) => {
        setError(error);
    }, [setError]);

    const { mutate } = useRegistrationMutation(
        identifier, birthday, "Пользователи", password, password2, 1, setErrorCallback
    )

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const currentValue = e.target.value;
        const digitsOnly = currentValue.replace(/\D/g, "");

        digitsOnly.length < 8 ? dispatch(setError('Введите полностью свою дату рождения.')) : setError("")

        let formattedDate = "ГГГГ-ММ-ДД"

        for (let i = 0; i < digitsOnly.length; i++) {
            if (i === 0) {
                formattedDate = formattedDate.replace("Г", digitsOnly[i]);
            } else if (i === 1) {
                formattedDate = formattedDate.replace("Г", digitsOnly[i]);
            } else if (i === 2) {
                formattedDate = formattedDate.replace("Г", digitsOnly[i]);
            } else if (i === 3) {
                formattedDate = formattedDate.replace("Г", digitsOnly[i]);
            } else if (i === 4) {
                formattedDate = formattedDate.replace("М", digitsOnly[i]);
            } else if (i === 5) {
                formattedDate = formattedDate.replace("М", digitsOnly[i]);
            } else if (i === 6) {
                formattedDate = formattedDate.replace("Д", digitsOnly[i]);
            } else if (i === 7) {
                formattedDate = formattedDate.replace("Д", digitsOnly[i]);
            }
        }

        setInputDateValue(formattedDate);
        setBirthday(formattedDate);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        switch (name) {
            case 'birthday':
                dispatch(setBirthday(value.replace(/\D/g, '')));
                if (!birthday) dispatch(setError('Укажите дату рождения.'));
                break;

            case 'identifier':
                const isEmail = emailRegex.test(value);
                const isPhone = phoneRegex.test(value);
                dispatch(setIdentifier(value));

                if (!value) {
                    dispatch(setError('Введите номер телефона или электронную почту.'));
                } else if (!isEmail && !isPhone) {
                    dispatch(setError('Такого номера или телефона не существует.'));
                } else {
                    dispatch(setError(''));
                }
                break

            case "password":
                dispatch(setPassword(value));
                if (!value) {
                    dispatch(setError('Введите пароль."'));
                } else if (value.length < 4) {
                    dispatch(setError('Пароль должен быть длиннее 4 символов.'));
                } else {
                    dispatch(setError(''));
                }
                break;

            case "confirmPassword":
                dispatch(setConfirmPassword(value));
                if (password !== value) {
                    dispatch(setError('Пароли не совпадают.'));
                } else {
                    dispatch(setError(''));
                }
                break;

            default:
                break
        }
    }

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        !error ? mutate() : dispatch(setError('Ошибка'))
    };

    return (
        <div className={classNames(cls.RegistrationForm, {}, [className || ''])}>
            <form onSubmit={handleOnSubmit}>
                <Rows gap={20} rows={["auto"]}>
                    <Rows className={cls.inputs} gap={10} rows={["auto"]}>
                        <Input
                            type="text"
                            placeholder="Дата рождения"
                            name="birthday"
                            onChange={handleInputChange}
                            onFocus={onFocusHandler}
                            value={isShowValue ? inputDateValue : birthday}
                            className={error && error.includes('дата') ? cls.errorBorder : ''}
                        />
                        <Input
                            type="text"
                            placeholder="Введите номер или почту"
                            name="identifier"
                            onChange={handleChange}
                            value={identifier}
                            className={error && (error.includes('номер') || error.includes('почту')) ? cls.errorBorder : ''}
                        />
                        <Input
                            type="password"
                            placeholder="Введите пароль"
                            name="password"
                            onChange={handleChange}
                            value={password}
                            className={error && error.includes('пароль') ? cls.errorBorder : ''}
                        />
                        <Input
                            type="password"
                            placeholder="Подтвердите пароль"
                            name="confirmPassword"
                            onChange={handleChange}
                            value={confirmPassword}
                            className={error && error.includes('Пароли не совпадают') ? cls.errorBorder : ''}
                        />

                        <p className={cls.error}>{error}</p>

                        <Btn
                            color="#0064FA"
                            disabled={!identifier || !birthday || password.length < 4 || password !== confirmPassword || !isChecked}
                        >
                            Продолжить
                        </Btn>
                    </Rows>
                </Rows>
            </form>
        </div>
    );
}