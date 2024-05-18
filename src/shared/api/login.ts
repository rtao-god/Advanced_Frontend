import { AxiosResponse } from 'axios'
import { instance } from '../config/axiosInstance/axiosInstance'

interface LoginResponce {
  refresh: string
  access: string
}

export async function login(number: string, password: string): Promise<AxiosResponse<LoginResponce>> {
  return await instance.post('/token/', { number, password })
}
