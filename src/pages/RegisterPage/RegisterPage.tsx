import classNames from '@/shared/lib/helpers/classNames'
import cls from './RegisterPage.module.sass'

interface RegisterPageProps {
    className?: string
}

export default function RegisterPage({ className }: RegisterPageProps) {
    return (
        <div className={classNames(cls.RegisterPage, {}, [className || ''])}>
            RegisterPage
        </div>
    )
}