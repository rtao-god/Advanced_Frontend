import classNames from '@/shared/lib/helpers/classNames'
import cls from './Sidebar.module.sass'
import { useState } from 'react'
import Btn from '@/shared/ui/Btn/Btn'

interface SidebarProps {
  className?: string
}

export default function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className || ''])} data-testid="sidebar">
      <Btn onClick={onToggle}>toggle </Btn>
    </div>
  )
}
