import { User, userActions } from '@/entities/User'
import { registration } from '@/features/Registration/api/registration'
import { useMutation } from 'react-query'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const useRegistrationMutation = (
  identifier: string,
  password: string,
  setErrorCallback: (error: string) => void
) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return useMutation({
    mutationFn: () => registration(identifier, password),
    onSuccess: response => {
      const user: User = {
        id: response.data.id,
        identifier: response.data.identifier,
        password: response.data.password,
        isAuthenticated: true,
      }
     /*  const user: User = {
        id: 1,
        identifier: identifier,
        password: password,
        isAuthenticated: true,
      } */
      localStorage.setItem('user', JSON.stringify(user))
      dispatch(userActions.login(user))
      console.log('USER: ', user, 'localStorage: ', localStorage.user)
      navigate('/')
    },
    onError: (error: any) => {
      const errorMessage =
        error.response?.data?.message || 'Произошла ошибка при регистрации, проверьте введенные данные.'
      setErrorCallback(errorMessage)
    },
  })
}
