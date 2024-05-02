import { useMutation } from 'react-query'
import { useNavigate } from 'react-router'
import { CONSTANS } from '@/shared/const/localStorage'

import { TGroups } from '@/shared/types/group.type'
import { registration } from '@/features/Registration/api/registration'

export const useRegistrationMutation = (
  number: string,
  birthday: string,
  group: TGroups,
  password1: string,
  password2: string,
  stage: 1
) => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: () => registration(birthday, number, group, password1, password2, stage),
    mutationKey: ['registration'],
    onSuccess: data => {
      localStorage.setItem(CONSTANS.userLocalStorageKey, JSON.stringify(data))
      console.log(localStorage.user)
      navigate('/')
    },

    onError: error => {
      console.error('Ошибка регистрации:', error)
    },
  })
}
