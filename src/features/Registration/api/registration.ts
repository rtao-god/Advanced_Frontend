import { AxiosResponse } from 'axios'
import { instance } from '@/shared/config/axiosInstance/axiosInstance'
import { UserData } from '@/shared/types/user.types'

export async function registration(identifier: string, password: string): Promise<AxiosResponse<UserData>> {
    console.log('DATA: ', identifier, password)
    const id = '1'

    return instance.post('/api/users/', {
        id,
        identifier,
        password
    })
}
