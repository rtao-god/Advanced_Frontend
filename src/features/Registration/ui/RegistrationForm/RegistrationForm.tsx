import { useState, ChangeEvent, FormEvent } from "react";

import { Input } from "@/shared/ui/Input/Input";
import { useRegistration } from "@/shared/model/store/registration";
import { useRegistrationMutation } from "@/shared/lib/hooks/useRegistrationMutation";
// import { Policy } from "../Policy";
import { Rows } from "@/shared/ui/Rows/Rows";
import Btn from "@/shared/ui/Btn/Btn";

import classNames from '@/shared/lib/helpers/classNames'
import cls from './RegistrationForm.module.sass'

interface RegistrationFormProps {
    className?: string;
}

export default function RegistrationForm({ className }: RegistrationFormProps) {
    const [inputDateValue, setInputDateValue] = useState<string>("ГГГГ-ММ-ДД");
    const [birthday, setBirthday] = useState<string>("");
    const [password2, setPassword2] = useState<string>("");
    const [isShowValue, setIsShowValue] = useState<boolean>(false);
    const [isChecked, setIsChecked] = useState<boolean>(true); 

    const { number, setNumber, password, setPassword } = useRegistration();
    const { mutate, isLoading, isError, error } = useRegistrationMutation(
        number, birthday, "Пользователи", password, password2, 1
    );

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
            case "number":
                setNumber(value.replace(/\D/g, ""));
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
        if (password === password2 && password.length >= 2 && isChecked) {
            mutate();
        } else {
            console.error('Проверьте данные формы');
        }
    };

    console.log(localStorage.user)

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
                            placeholder="Введите номер"
                            borderColor="#E9EAEB"
                            name="number"
                            onChange={handleChange}
                            value={number}
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
                    </Rows>
                    {/* <Policy isChecked={isChecked} setIsChecked={setIsChecked} /> */}
                    <Btn
                        color="#0064FA"
                        onClick={() => handleOnSubmit}
                        disabled={!number || !birthday || password.length < 8 || password2 !== password || !isChecked}
                    >
                        Продолжить
                    </Btn>
                    {isLoading && <div>Загрузка...</div>}
                    {/* {isError && <div>Ошибка: {error?.message}</div>} */}
                </Rows>
            </form>
        </div>
    );
};
