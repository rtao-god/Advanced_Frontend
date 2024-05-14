import { AxiosResponse } from 'axios'
import { UserData } from '@/shared/types'
import { instance } from '@/shared/config/axiosInstance/axiosInstance'

export async function registration(identifier: string, password: string): Promise<AxiosResponse<UserData>> {
  console.log('DATA: ', identifier, password)
  const id = '1'

  return instance.post('/api/users/', {
    id,
    identifier,
    password,
  })
}
