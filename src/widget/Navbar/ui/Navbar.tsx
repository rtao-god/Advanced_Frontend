import cls from './Navbar.module.sass'
import { classNames } from '@/shared/lib/classNames'
import AppLink, { AppLinkTheme } from '@/shared/ui/Input/AppLink/AppLink'

interface NavbarProps {
  className?: string
}

export default function Navbar({ className }: NavbarProps) {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      logo
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to='/'> MainPage </AppLink>
        <AppLink theme={AppLinkTheme.RED} to='about'> AboutPage </AppLink>
      </div>
    </div>
  )
}