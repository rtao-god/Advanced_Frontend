import { AuthWith } from '@/shared/ui'
import { Google } from '@/shared/icons/AuthWith'

export default function AuthWithGoogle() {
    return <AuthWith img={<Google />} text='Войти с помощью Google' />
}
