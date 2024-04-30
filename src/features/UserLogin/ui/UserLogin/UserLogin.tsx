import { FC, memo, useCallback, useState } from "react";
import cls from "./UserLogin.module.sass";
import { Link } from "react-router-dom";
import { Rows } from "@/shared/ui/Rows/Rows";
import { Input } from "@/shared/ui/Input/Input";
import { PasswordInputField } from "../PasswordInputField/PasswordInputField";
import Btn from "@/shared/ui/Btn/Btn";
import { Text } from "@/shared/ui/Text/Text";
import { loginReducer, loginUser } from "../../model/slice/loginSlice";
import { useAppDispatch } from "@/shared/lib/hooks/useDispatch";
import DynamicModuleLoader, { ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useSelector } from "react-redux";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";

interface UserLoginProps {
    className: string;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer
}

export const UserLogin: FC<UserLoginProps> = memo(({ className }) => {
    const dispatch = useAppDispatch();
    const loginFormValue = useSelector(getLoginState)
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    
    const handleLogin = useCallback(() => {
        dispatch(loginUser({ username, password }));
    }, [dispatch, password, username])
    
    console.log(loginFormValue)
    console.log(username, password)

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <Rows gap={20} rows={["auto"]}>
                <Rows gap={5} rows={["auto"]}>
                    <Rows gap={10} rows={["auto"]}>
                        <div className={cls.box}>
                            <Rows gap={20} rows={["auto"]}>
                                <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                <PasswordInputField value={password} onChange={(e) => setPassword(e.target.value)} />
                                <Btn onClick={handleLogin}>Login</Btn>
                            </Rows>
                            {/* {error && <span className={cls.error}>{error}</span>} */}
                            {/* <Input
                                type="text"
                                placeholder="Введите номер или почту"
                                onChange={(e) => setNumber(e.target.value)}
                            /> */}
                        </div>
                        {/* <div className={cls.box}>
                            <PasswordInputField
                                error={error !== null}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div> */}
                    </Rows>
                </Rows>
                {/* <Rows gap={20} rows={["auto"]}>
                    <Btn color="#0064FA" onClick={handleLogin} disabled={loading}>
                        Войти
                    </Btn>
                    <div className={cls.register}>
                        <Text color="#7D7F82" fz="16px" type="p" >Нет учетной записи?</Text>
                        <Link to="/registration">
                            <Text color="#0064FA" fz="16px" type="p">
                                Зарегистрироваться
                            </Text>
                        </Link>
                    </div>
                </Rows> */}
            </Rows>
        </DynamicModuleLoader>
    );
});
