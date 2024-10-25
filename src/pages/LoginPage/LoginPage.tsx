import classNames from '@/shared/lib/helpers/classNames'
import cls from './LoginPage.module.sass'
import { UserLogin } from '@/features/UserLogin'
import { Line, Row, Rows, AuthContainer, Text } from '@/shared/ui'
import AuthWithGoogle from '@/features/AuthWithGoogle/AuthWithGoogle'
import LoginPageProps from './types'

export default function LoginPage({ className }: LoginPageProps) {
    return (
        <div className={classNames(cls.LoginPage, {}, [className ?? ''])}>
            <AuthContainer title='Вход'>
                <UserLogin />
                <Row gap={20}>
                    <Line color='#D6E7FF' />
                    <Text type='p' fz='14px' color='#D6E7FF'>
                        Или
                    </Text>
                    <Line color='#D6E7FF' />
                </Row>
                <Rows gap={16} rows={['auto']}>
                    <AuthWithGoogle />
                    {/*   <AuthWithFacebook />
                <AuthWithApple /> */}
                </Rows>
            </AuthContainer>
        </div>
    )
}
