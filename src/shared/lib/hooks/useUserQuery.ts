import { useQuery } from 'react-query'

import { useAuth } from '@/shared/model/store/auth'
import { useCookie } from './useCookie'
import { getUser } from '@/shared/api/getUser'

export const useUserQuery = () => {
  const { getCookie } = useCookie()
  const { setUser } = useAuth()

  return useQuery({
    queryFn: () => getUser(getCookie('access_token') as string),
    queryKey: ['userDetails', 'get'],
    onSuccess: data => {
      setUser(data.data)
    },
  })
}
