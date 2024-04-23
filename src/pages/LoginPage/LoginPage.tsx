import classNames from '@/shared/lib/helpers/classNames'
import cls from './LoginPage.module.sass'

interface LoginPageProps {
    className?: string
}

export default function LoginPage({ className }: LoginPageProps) {
  return (
    <div className={classNames(cls.LoginPage, {}, [className || ''])}>
     LoginPage
    </div>
  )
}