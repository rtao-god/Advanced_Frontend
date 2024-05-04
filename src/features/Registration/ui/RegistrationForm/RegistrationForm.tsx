import { useState, ChangeEvent, FormEvent, useCallback } from "react";
import { useRegistration } from "@/shared/model/store/registration";
import { useRegistrationMutation } from "@/shared/lib/hooks/useRegistrationMutation";

import Rows from "@/shared/ui/Rows/Rows";
import Btn from "@/shared/ui/Btn/Btn";
import Input from "@/shared/ui/Input/Input";

import classNames from '@/shared/lib/helpers/classNames'
import cls from './RegistrationForm.module.sass'

// import { Policy } from "../Policy";
import RegistrationFormProps from "./types";

export default function RegistrationForm({ className }: RegistrationFormProps) {
    const [inputDateValue, setInputDateValue] = useState<string>("ГГГГ-ММ-ДД");
    const [birthday, setBirthday] = useState<string>("");
    const [password2, setPassword2] = useState<string>("");
    const [isShowValue, setIsShowValue] = useState<boolean>(false);
    const [isChecked, setIsChecked] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,6})+$/;
    const phoneRegex = /^(\+?\d{1,3}[- ]?)?(\(?\d{3}\)?[- ]?)?[\d -]{7,10}$/;

    const { identifier, setIdentifier, password, setPassword } = useRegistration();

    const setErrorCallback = useCallback((error: string) => {
        setError(error);
    }, [setError]);

    const { mutate } = useRegistrationMutation(
        identifier, birthday, "Пользователи", password, password2, 1, setErrorCallback
    )

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const currentValue = e.target.value;
        const digitsOnly = currentValue.replace(/\D/g, "");

        let formattedDate = "ГГГГ-ММ-ДД";

        digitsOnly.length < 8 ? setError("Введите полностью свою дату рождения.") : setError("")

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
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        switch (name) {
            case "identifier":
                const isEmail = emailRegex.test(value);
                const isPhone = phoneRegex.test(value);
                setIdentifier(value);
                if (!value) {
                    setError("Введите номер телефона или почту.");
                } else if (!isEmail && !isPhone) {
                    setError("Такого номера или телефона не существует.");
                } else {
                    setError("")
                }
                break;

            case "password":
                setPassword(value);
                if (!value) {
                    setError("Введите пароль.");
                } else if (value.length < 4) {
                    setError("Пароль должен быть длиннее 4 символов.");
                } else {
                    setError("")
                }
                break;

            case "confirmPassword":
                setPassword2(value);
                if (password !== value) {
                    setError("Пароли не совпадают.");
                } else {
                    setError("")
                }
                break;

            default:
                break;
        }
    };

    const onFocusHandler = () => setIsShowValue(true);
    const onBlurHandler = () => setIsShowValue(false);

    console.log(inputDateValue)

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let errorMsg = '';

        if (!birthday) {
            errorMsg = 'Укажите дату рождения.';
        }

        else if (!identifier) {
            errorMsg = 'Введите номер телефона или почту.';
        } else if (!identifier) {
            errorMsg = 'Укажите дату рождения.';
        }

        else if (password == '') {
            errorMsg = 'Введиет пароль.';
        } else if (password.length < 2) {
            errorMsg = 'Пароль должен быть длиннее 2 символов.'
        } else if (password !== password2) {
            errorMsg = 'Пароли не совпадают.';
        }

        else if (!isChecked) {
            errorMsg = 'Необходимо принять условия.';
        }

        errorMsg ? setErrorCallback(errorMsg) : mutate();
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
                            borderColor={error && (error.includes('номер') || error.includes('почту')) ? "red" : "#E9EAEB"}
                            name="identifier"
                            onChange={handleChange}
                            value={identifier}
                            className={error && (error.includes('номер') || error.includes('почту')) ? cls.errorBorder : ''}
                        />
                        <Input
                            type="password"
                            placeholder="Введите пароль"
                            borderColor={error && error.includes('пароль') ? "red" : "#E9EAEB"}
                            name="password"
                            onChange={handleChange}
                            value={password}
                            className={error && error.includes('пароль') ? cls.errorBorder : ''}
                        />
                        <Input
                            type="password"
                            placeholder="Подтвердите пароль"
                            borderColor={error && error.includes('Пароли не совпадают') ? "red" : "#E9EAEB"}
                            name="confirmPassword"
                            onChange={handleChange}
                            value={password2}
                            className={error && error.includes('Пароли не совпадают') ? cls.errorBorder : ''}
                        />

                        <p className={cls.error}>{error}</p>
                    </Rows>
                    {/* <Policy isChecked={isChecked} setIsChecked={setIsChecked} /> */}

                    <Btn
                        color="#0064FA"
                        onClick={() => handleOnSubmit}
                        disabled={!identifier || !birthday || password.length < 2 || password2 !== password || !isChecked}
                    >
                        Продолжить
                    </Btn>
                </Rows>
            </form>
        </div>
    );
};
