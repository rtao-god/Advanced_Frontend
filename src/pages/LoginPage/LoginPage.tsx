import classNames from '@/shared/lib/helpers/classNames'
import cls from './LoginPage.module.sass'
import { AuthContainer } from '@/shared/ui/AuthContainer/AuthContainer'

interface LoginPageProps {
    className?: string
}

export default function LoginPage({ className }: LoginPageProps) {
    return (
        <div className={classNames(cls.LoginPage, {}, [className || ''])}>
            <AuthContainer title="Вход">
                fd
                {/* <UserLogin /> */}
                {/*    <Row gap={20}>
                    <Line color="#D6E7FF" />
                    <Text type="p" fz="14px" color="#D6E7FF">
                        Или
                    </Text>
                    <Line color="#D6E7FF" />
                </Row> */}
                {/*   <Rows gap={16} rows={["auto"]}>
                    <AuthWithGoogle />
                    <AuthWithFacebook />
                    <AuthWithApple />
                </Rows> */}
            </AuthContainer>
            LoginPage
        </div>
    )
}