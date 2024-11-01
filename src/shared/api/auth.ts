import { AxiosResponse } from 'axios'
import { instance } from '../config/axiosInstance/axiosInstance'

interface AuthResponse {
    access: string
    refresh: string
}

export async function auth(refresh: string): Promise<AxiosResponse<AuthResponse>> {
    return await instance.post('/token/refresh/', { refresh })
}
