import { Link } from 'react-router-dom'
import cls from './Link.module.scss'
import classNames from '@/shared/lib/helpers/classNames'
import AppLinkProps from './types'

export default function AppLink({ to, className, children }: AppLinkProps) {
    return (
        <Link to={to} className={classNames(cls.App_link, {}, [className ?? ''])}>
            {children}
        </Link>
    )
}
