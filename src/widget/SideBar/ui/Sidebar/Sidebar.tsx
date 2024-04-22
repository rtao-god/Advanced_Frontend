import classNames from '@/shared/lib/classNames'
import cls from './Sidebar.module.sass'
import { useState } from 'react'
import Button from '@/shared/ui/Button/Button'

interface SidebarProps {
  className?: string
}

export default function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className || ''])}>
      <Button onClick={onToggle}>toggle </Button>
    </div>
  )
}
