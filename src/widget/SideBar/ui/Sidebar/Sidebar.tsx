import { classNames } from '@/shared/lib/classNames'
import cls from './Sidebar.module.sass'
import { useState } from 'react'

interface SidebarProps {
    className?: string
}

export default function Sidebar({ className }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button onClick={onToggle}>toggle </button>
        </div>
    )
}