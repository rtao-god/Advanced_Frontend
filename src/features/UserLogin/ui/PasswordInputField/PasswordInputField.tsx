import { useState } from "react";
import PasswordInputFieldProps from "./types";
import cls from "./PasswordInputField.module.sass";
import Row from "@/shared/ui/Row/Row";
import Input from "@/shared/ui/Input/Input";
import { ShowPassword } from "@/features/ShowPassword";

export default function PasswordInputField({
    error,
    className,
    onChangePassword,
    // password,
    placeholder,
}: PasswordInputFieldProps) {
    const [isShow, setIsShow] = useState(false);

    const handleClick = () => setIsShow(prev => !prev);

    return (
        <Row
            gap={0}
            className={error ? `${cls.error} ${cls.pass}` : cls.pass}
        >
            <Input
                className={cls.input}
                onChange={onChangePassword}
                type={isShow ? "text" : "password"}
                placeholder={placeholder || "Введите пароль"}
                border="none"
                borderRadius="8px 0px 0px 8px"
            />
            <ShowPassword isShow={isShow} onClick={handleClick} />
        </Row>
    );
};