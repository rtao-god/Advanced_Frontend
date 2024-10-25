import classNames from '@/shared/lib/helpers/classNames'
import { Btn, Icon, Link } from '@/shared/ui'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

export default function AppSidebar({ className }: SidebarProps) {
    const { t } = useTranslation('navbar')
    const [collapsed, setCollapsed] = useState(true)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            data-testid='sidebar'
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className ?? ''])}>
            <Btn data-testid='sidebar-toggle' onClick={onToggle} size='medium'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    focusable='false'
                    style={{ pointerEvents: 'none', display: 'inherit' }}
                    aria-hidden='true'>
                    <path d='M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z'></path>
                </svg>
            </Btn>
            <div className={cls.links}>
                <Link to={'/'} className={cls.link}>
                    <Icon name='home' />
                    <span className={cls.label}>{t('Main')}</span>
                </Link>
                <Link to={'/about'} className={cls.link}>
                    <Icon name='about' />
                    <span className={cls.label}>{t('About us')}</span>
                </Link>
            </div>
        </div>
    )
}
