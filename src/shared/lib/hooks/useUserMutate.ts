import { useMutation } from 'react-query'
import { useCookie } from '@/shared/lib/hooks/useCookie'
import { useAuth } from '@/shared/model/store/auth'
import { TUserDataForPutRequest } from '@/entities/User/model/types/UserSchema'
import { changeUserDetails } from '@/entities/User/api/user'
import { AxiosResponse } from 'axios'
import { UserData } from '@/shared/types/user.types'

export const useUserMutate = (data: TUserDataForPutRequest) => {
    const { getCookie } = useCookie()
    const { setUser } = useAuth()

    return useMutation({
        mutationFn: () => {
            const token = getCookie('access_token')
            if (!token) {
                throw new Error('No access token found')
            } else {
                return changeUserDetails(token, data)
            }
        },
        mutationKey: ['userDetails', 'put'],
        onSuccess: (data: AxiosResponse<UserData>) => {
            setUser(data.data)
        }
    })
}
