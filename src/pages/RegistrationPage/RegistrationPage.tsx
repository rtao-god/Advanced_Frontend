import classNames from '@/shared/lib/helpers/classNames'
import cls from './RegistrationPage.module.sass'

interface RegistrationPageProps {
    className?: string
}

export default function RegistrationPage({ className }: RegistrationPageProps) {
    return (
        <div className={classNames(cls.RegistrationPage, {}, [className || ''])}>
            {/*   <RegistrationForm />
            <Row gap={16} style={{ justifyContent: "center" }}>
                <RegistrationWithGoogle />
                <RegistrationWithFacebook />
                <RegistrationWithApple />
            </Row>
        </AuthContainer> */}
            RegistrationPage
        </div>
    )
}