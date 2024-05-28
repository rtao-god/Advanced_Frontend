import classNames from '@/shared/lib/helpers/classNames'
import cls from './RegistrationPage.module.sass'
import AuthContainer from '@/shared/ui/AuthContainer/AuthContainer'
import Row from '@/shared/ui/Row/Row'
import { RegistrationForm } from '@/features/Registration'
import AuthWithGoogle from '@/features/AuthWithGoogle/AuthWithGoogle'
import RegistrationPageProps from './types'

export default function RegistrationPage({ className }: RegistrationPageProps) {
    return (
        <div className={classNames(cls.RegistrationPage, {}, [className ?? ''])}>
            <AuthContainer title='Регистрация'>
                <RegistrationForm />
                <Row gap={16} style={{ justifyContent: 'center' }}>
                    <AuthWithGoogle />
                    {/*  <RegistrationWithGoogle />
                               <RegistrationWithFacebook />
                    <RegistrationWithApple /> */}
                </Row>
            </AuthContainer>
        </div>
    )
}
