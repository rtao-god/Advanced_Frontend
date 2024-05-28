import { AxiosResponse } from 'axios'

import { instance } from '../config/axiosInstance/axiosInstance'
import { UserData } from '../types/user.types'

export async function getUser(token: string): Promise<AxiosResponse<UserData>> {
    const res = await instance.get('/users-detail/', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return res
}
