import cls from './Navbar.module.sass'
import classNames from '@/shared/lib/helpers/classNames'
import { LangSwitcher } from '@/widgets/components/LangSwitcher'
import { useTheme } from '@/shared/lib/hooks/useTheme'
import { Btn, Text, Link, AuthSection, getIsAuthenticated } from '@/shared/ui'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from '@/entities/User'
import NavbarProps from './types'

export default function Navbar({ className }: NavbarProps) {
    const { toggleTheme } = useTheme()

    return (
        <div className={classNames(cls.Navbar, {}, [className ?? ''])}>
            <Btn width='20' onClick={toggleTheme}>
                Change theme
            </Btn>
            <LangSwitcher className={cls.lang} />
            <div className={cls.links}>
                <Link to='/'>MainPage</Link>
                <Link to='/about'>AboutPage</Link>
            </div>
            {/* <label className={cls.switch}>
                <Input type='checkbox' />
                <span className={`${cls.slider} ${cls.slider_red}`}></span>
            </label> */}
            <AuthSection />
        </div>
    )
}
