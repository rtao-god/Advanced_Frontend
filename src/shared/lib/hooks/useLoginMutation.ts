import { useMutation } from 'react-query'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setError } from '@/features/UserLogin/model/slice/loginSlice'
import { login } from '../../api/login'
// import { useCookie } from './useCookie'

export const useLoginMutation = (
    identifier: string,
    password: string /* setErrorCallback: (error: string) => void */
) => {
    // const { setCookie } = useCookie()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return useMutation({
        mutationFn: () => login(identifier, password),
        mutationKey: ['login'],
        onSuccess: data => {
            console.log(data)
            const storedIdentifier = localStorage.getItem('identifier')
            const storedPassword = localStorage.getItem('password')
            console.log('storedIdentifier: ', storedIdentifier, 'storedPassword: ', storedPassword)

            if (storedIdentifier == identifier && storedPassword == password) {
                console.log('true auth')
            } else {
                console.log('false auth')
            }

            /*  setCookie("refresh_token", data.data.refresh_token, 1);
      setCookie("access_token", data.data.access_token, 1); */
            navigate('/')
        },
        onError: /* error */ () => {
            // const errorMessage = error ?? 'Произошла ошибка при регистрации, проверьте введенные данные.'
            // setErrorCallback(errorMessage)

            dispatch(setError('FALSE AUTH'))
            console.log('localStorage: ', localStorage)
        }
    })
}
