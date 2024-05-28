import cls from './Navbar.module.sass'
import classNames from '@/shared/lib/helpers/classNames'
import { LangSwitcher } from '@/widgets/components/LangSwitcher'
import Btn from '@/shared/ui/Btn/Btn'
import { useTheme } from '@/shared/lib/hooks/useTheme'
import AppLink from '@/shared/ui/AppLink/AppLink'
import Text from '@/shared/ui/Text/Text'
import Input from '@/shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { getIsAuthenticated } from '../model/getIsAuthenticated'
import { userActions } from '@/entities/User'

interface NavbarProps {
    className?: string
}

export default function Navbar({ className }: NavbarProps) {
    const { toggleTheme } = useTheme()

    const isAuthenticated = useSelector(getIsAuthenticated)

    const dispatch = useDispatch()

    function handleLogout() {
        console.log('LOGOT')
        dispatch(userActions.logout())
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className ?? ''])}>
            <Btn onClick={toggleTheme}> Change theme </Btn>
            <LangSwitcher className={cls.lang} />

            <div className={cls.links}>
                <AppLink to='/'>MainPage</AppLink>
                <AppLink to='/about'>AboutPage</AppLink>

                <label className={cls.switch}>
                    <Input type='checkbox' />
                    <span className={`${cls.slider} ${cls.slider_red}`}></span>
                </label>

                {isAuthenticated !== undefined ? (
                    <Btn onClick={handleLogout}> Выйти </Btn>
                ) : (
                    <>
                        <AppLink to='/login'>
                            <Text type='h2' fz='14px' color='#0064FA'>
                                Войти
                            </Text>
                        </AppLink>
                        <Text type='p' color='#0064FA'>
                            /
                        </Text>
                        <AppLink to='/registration'>
                            <Text type='h2' fz='14px' color='#0064FA'>
                                Регистрация
                            </Text>
                        </AppLink>
                    </>
                )}
            </div>
        </div>
    )
}
