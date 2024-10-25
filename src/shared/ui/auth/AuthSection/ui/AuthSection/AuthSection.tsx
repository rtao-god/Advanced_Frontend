import classNames from '@/shared/lib/helpers/classNames'
import cls from './AuthSection.module.scss'
import AuthSectionProps from './types'
import { Btn, Link, Text } from '@/shared/ui'

export default function AuthSection({ className }: AuthSectionProps) {
    return (
        <div className={classNames(cls.AuthSection, {}, [className ?? ''])}>
            <Btn> Выйти </Btn>:{' '}
            <div className={cls.auth}>
                <Link to='/login'>
                    <Text type='h2' fz='14px' color='#0064FA'>
                        Войти
                    </Text>
                </Link>
                <Text type='p' color='#0064FA'>
                    /
                </Text>
                <Link to='/registration'>
                    <Text type='h2' fz='14px' color='#0064FA'>
                        Регистрация
                    </Text>
                </Link>
            </div>
        </div>
    )
}
