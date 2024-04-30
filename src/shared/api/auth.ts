import { AxiosResponse } from "axios";
import { instance } from "../config/axiosInstance/axiosInstance";


interface IAuthResponse {
    access: string;
    refresh: string;
}

export async function auth(
    refresh: string
): Promise<AxiosResponse<IAuthResponse>> {
    return await instance.post("/token/refresh/", { refresh });
}