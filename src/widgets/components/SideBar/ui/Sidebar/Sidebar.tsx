import Home from '@/shared/icons'
import About from '@/shared/icons/About'
import classNames from '@/shared/lib/helpers/classNames'
import AppLink from '@/shared/ui/AppLink/AppLink'
import Btn from '@/shared/ui/Btn/Btn'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './Sidebar.module.sass'

interface SidebarProps {
    className?: string
}

export default function AppSidebar({ className }: SidebarProps) {
    const { t } = useTranslation('navbar')
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            data-testid='sidebar'
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className ?? ''])}>
            <Btn className={cls.collapse_button} data-testid='sidebar-toggle' onClick={onToggle}>
                {collapsed ? '>' : '<'}
            </Btn>
            <div className={classNames(cls.links)}>
                <AppLink to={'/'} className={cls.link}>
                    <Home className={cls.icon} />
                    <span className={cls.label}>{t('mainPage')}</span>
                </AppLink>
                <AppLink to={'/about'} className={cls.link}>
                    <About className={cls.icon} />
                    <span className={cls.label}>{t('aboutPage')}</span>
                </AppLink>
            </div>
            {/* <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div> */}
        </div>
    )
}
