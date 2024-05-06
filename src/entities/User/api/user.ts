import { instance } from '@/shared/config/axiosInstance/axiosInstance'
import { TUserDataForPutRequest } from '../model/types/UserSchema'

export async function changeUserDetails(token: string, data: TUserDataForPutRequest) {
  return await instance.put(
    '/users-detail/',
    { ...data },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  )
}

export async function getUser(token: string) {
  return await instance.get('/users-detail/', {
    headers: { Authorization: `Bearer ${token}` },
  })
}
