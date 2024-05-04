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
    const [error, setError] = useState<string>("Error");

    const { identifier, setIdentifier, password, setPassword } = useRegistration();

    const setErrorCallback = useCallback((error: string) => {
        setError(error);
    }, [setError]);

    const { mutate, isLoading, isError } = useRegistrationMutation(
        identifier, birthday, "Пользователи", password, password2, 1, setErrorCallback
    )

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const currentValue = e.target.value;
        const digitsOnly = currentValue.replace(/\D/g, "");

        let formattedDate = "ГГГГ-ММ-ДД";

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
                setIdentifier(value)
                break;
            case "password":
                setPassword(value);
                break;
            case "confirmPassword":
                setPassword2(value);
                break;
            default:
                break;
        }
    };

    const onFocusHandler = () => setIsShowValue(true);
    const onBlurHandler = () => setIsShowValue(false);

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let errorMsg = '';

        if (!identifier) {
            errorMsg = 'Введите номер телефона или почту.';
        } else if (!identifier) {
            errorMsg = 'Укажите дату рождения.';
        }

        else if (!birthday) {
            errorMsg = 'Укажите дату рождения.';
        } else if (!birthday) {
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

        errorMsg
            ? setErrorCallback(errorMsg)
            : mutate();
    };

    console.log(error,)

    return (
        <div className={classNames(cls.RegistrationForm, {}, [className || ''])}>
            <form onSubmit={handleOnSubmit}>
                <Rows gap={20} rows={["auto"]}>
                    <Rows gap={10} rows={["auto"]}>
                        <Input
                            type="text"
                            placeholder="Дата рождения"
                            name="birthday"
                            onChange={handleInputChange}
                            onFocus={onFocusHandler}
                            value={isShowValue ? inputDateValue : birthday}
                        />
                        <Input
                            type="text"
                            placeholder="Введите номер или почту"
                            borderColor="#E9EAEB"
                            name="identifier"
                            onChange={handleChange}
                            value={identifier}
                        />
                        <Input
                            type="password"
                            placeholder="Введите пароль"
                            borderColor="#E9EAEB"
                            name="password"
                            onChange={handleChange}
                            value={password}
                        />
                        <Input
                            type="password"
                            placeholder="Подтвердите пароль"
                            borderColor="#E9EAEB"
                            name="confirmPassword"
                            onChange={handleChange}
                            value={password2}
                        />
                        {isLoading && <div>Загрузка...</div>}
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
