import { useQuery } from 'react-query'
import { useAuth } from '@/shared/model/store/auth'
import { useCookie } from './useCookie'
import { getUser } from '@/shared/api/getUser'
import { AxiosResponse } from 'axios'
import { UserData } from '@/shared/types/user.types'

export const useUserQuery = () => {
    const { getCookie } = useCookie()
    const { setUser } = useAuth()

    return useQuery({
        queryFn: () => {
            const token = getCookie('access_token')
            if (!token) {
                throw new Error('No access token found')
            }
            return getUser(token)
        },
        queryKey: ['userDetails', 'get'],
        onSuccess: (data: AxiosResponse<UserData>) => {
            setUser(data.data)
        }
    })
}
