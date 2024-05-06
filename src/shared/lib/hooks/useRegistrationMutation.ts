import { User, userActions } from '@/entities/User'
import { registration } from '@/features/Registration/api/registration'
import { TGroups } from '@/shared/types/group.type'
import { useMutation } from 'react-query'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const useRegistrationMutation = (
  identifier: string,
  birthday: string,
  group: TGroups,
  password: string,
  confirmPassword: string,
  stage: 1,
  setErrorCallback: (error: string) => void
) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return useMutation({
    mutationFn: () => registration(birthday, identifier, group, password, confirmPassword, stage),
    onSuccess: response => {
      const user: User = {
        id: response.data.group,
        identifier: response.data.number,
        isAuthenticated: true,
      }
      localStorage.setItem('user', JSON.stringify(user))
      dispatch(userActions.login(user))
      navigate('/')
    },
    onError: (error: any) => {
      const errorMessage =
        error.response?.data?.message || 'Произошла ошибка при регистрации, проверьте введенные данные.'
      setErrorCallback(errorMessage)
    },
  })
}
