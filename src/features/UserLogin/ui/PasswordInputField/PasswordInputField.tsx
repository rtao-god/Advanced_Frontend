import { FC, useState } from "react";
import { IPasswordInputFieldProps } from "./types";

import cls from "./PasswordInputField.module.sass";
import { Row } from "@/shared/ui/Row/Row";
import { Input } from "@/shared/ui/Input/Input";
import { ShowPassword } from "@/features/ShowPassword";

export const PasswordInputField: FC<IPasswordInputFieldProps> = ({
    onChange,
    error,
    value,
}) => {
    const [isShow, setIsShow] = useState(false);

    const handleClick = () => setIsShow(prev => !prev);

    return (
        <Row
            gap={0}
            className={error ? `${cls.error} ${cls.pass}` : cls.pass}
        >
            <Input
                type={isShow ? "text" : "password"}
                placeholder="Введите пароль"
                border="none"
                borderRadius="8px 0px 0px 8px"
                onChange={onChange}
                value={value}
            />
            <ShowPassword isShow={isShow} onClick={handleClick} />
        </Row>
    );
};