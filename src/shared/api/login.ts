import { AxiosResponse } from 'axios'
import { instance } from '../config/axiosInstance/axiosInstance'

interface ILoginResponce {
  refresh: string
  access: string
}

export async function login(number: string, password: string): Promise<AxiosResponse<ILoginResponce>> {
  return await instance.post('/token/', { number, password })
}
