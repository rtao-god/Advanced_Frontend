import { useMutation } from 'react-query'
import { useCookie } from '@/shared/lib/hooks/useCookie'
import { useAuth } from '@/shared/model/store/auth'
import { TUserDataForPutRequest } from '@/entities/User/model/types/user'
import { changeUserDetails } from '@/entities/User/api/user'

export const useUserMutate = (data: TUserDataForPutRequest) => {
  const { getCookie } = useCookie()
  const { setUser } = useAuth()

  return useMutation({
    mutationFn: () => changeUserDetails(getCookie('access_token') as string, data),
    mutationKey: ['userDetails', 'put'],
    onSuccess: data => {
      setUser(data.data)
    },
  })
}
