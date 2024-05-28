import { User, userActions } from '@/entities/User'
import { registration } from '@/features/Registration/api/registration'
import { useMutation } from 'react-query'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AxiosError, AxiosResponse } from 'axios'

interface RegistrationResponse {
    id: number
    identifier: string
    password: string
}

export const useRegistrationMutation = (
    identifier: string,
    password: string,
    setErrorCallback: (error: string) => void
) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return useMutation<AxiosResponse<RegistrationResponse>, AxiosError>({
        mutationFn: () => registration(identifier, password),
        onSuccess: response => {
            const user: User = {
                id: response.data.id,
                identifier: response.data.identifier,
                password: response.data.password,
                isAuthenticated: true
            }
            localStorage.setItem('user', JSON.stringify(user))
            dispatch(userActions.login(user))
            console.log('USER: ', user, 'localStorage: ', localStorage.getItem('user'))
            navigate('/')
        },
        onError: error => {
            const errorMessage =
                error.response?.statusText ?? 'Произошла ошибка при регистрации, проверьте введенные данные.'
            setErrorCallback(errorMessage)
        }
    })
}
