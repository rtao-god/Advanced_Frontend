import { useTheme } from '@/app/providers/ThemeProvider'
import cls from './Navbar.module.sass'
import { classNames } from '@/shared/lib/classNames'
import AppLink, { AppLinkTheme } from '@/shared/ui/AppLink/AppLink'

interface NavbarProps {
  className?: string
}

export default function Navbar({ className }: NavbarProps) {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <button onClick={toggleTheme}> Change theme </button>

      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to='/'> MainPage </AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY} to='about'> AboutPage </AppLink>
      </div>
    </div>
  )
}

