import { login } from '@/shared/api/login'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router'
import { useCookie } from './useCookie'


export const useLoginMutation = (number: string, password: string) => {
  const { setCookie } = useCookie()
  const navigate = useNavigate()

  return useMutation({
    mutationFn: () => login(number, password),
    mutationKey: ['login'],
    onSuccess: data => {
      setCookie('refresh_token', data.data.refresh, 1)
      setCookie('access_token', data.data.access, 1)
      navigate('/')
    },
  })
}
