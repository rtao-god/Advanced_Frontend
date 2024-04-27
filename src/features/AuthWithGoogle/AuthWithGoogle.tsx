import { FC } from "react";

import { AuthWith } from "@/shared/ui/AuthWith/AuthWith.tsx";
import Google from "./assets/Google";

export const AuthWithGoogle: FC = () => {
    return <AuthWith img={<Google />} text="Войти с помощью Google" />
}