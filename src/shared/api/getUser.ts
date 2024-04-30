import { AxiosResponse } from 'axios'

import { IUserData } from '@/shared/types/user.interface'
import { instance } from '../config/axiosInstance/axiosInstance'

export async function getUser(token: string): Promise<AxiosResponse<IUserData>> {
  const res = await instance.get('/users-detail/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return res
}
