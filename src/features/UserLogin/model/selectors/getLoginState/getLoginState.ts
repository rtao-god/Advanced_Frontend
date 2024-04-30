import LoginSchema from "../../types/LoginSchema";

export const getLoginState = (state: LoginSchema) => state.password
