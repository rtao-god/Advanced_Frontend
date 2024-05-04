import { registration } from '@/features/Registration/api/registration'
import { TGroups } from '@/shared/types/group.type'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'

export const useRegistrationMutation = (
  number: string,
  birthday: string,
  group: TGroups,
  password1: string,
  password2: string,
  stage: 1,
  setErrorCallback: (error: string) => void
) => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: () => registration(birthday, number, group, password1, password2, stage),
    onSuccess: data => {
      localStorage.setItem('user', JSON.stringify(data))
      navigate('/')
    },
    onError: (error: any) => {
      const errorMessage =
        error.response?.data?.message || 'Произошла ошибка при регистрации, проверьте введенные данные.'
      setErrorCallback(errorMessage)
    },
  })
}
