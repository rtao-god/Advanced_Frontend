import { FC, useState } from "react";
import { IPasswordInputFieldProps } from "./types";

import cls from "./PasswordInputField.module.sass";
import { Row } from "@/shared/ui/Row/Row";
import { Input } from "@/shared/ui/Input/Input";
import { ShowPassword } from "@/features/ShowPassword";

export const PasswordInputField: FC<IPasswordInputFieldProps> = ({
    error,
    className,
    onChangePassword,
    password,
    type = 'password',
    placeholder,

}) => {
    const [isShow, setIsShow] = useState(false);

    const handleClick = () => setIsShow(prev => !prev);

    return (
        <Row
            gap={0}
            className={error ? `${cls.error} ${cls.pass}` : cls.pass}
        >
            {/* <Input
                type={isShow ? "text" : "password"}
                placeholder="Введите пароль"
                border="none"
                borderRadius="8px 0px 0px 8px"
                onChange={onChange}
                value={value}
            /> */}
            <Input
                className={cls.input}
                onChange={onChangePassword}
                value={password}
                type={isShow ? "text" : "password"}
                placeholder={placeholder || "Введите пароль"}
                border="none"
                borderRadius="8px 0px 0px 8px"
            />
            <ShowPassword isShow={isShow} onClick={handleClick} />
        </Row>
    );
};