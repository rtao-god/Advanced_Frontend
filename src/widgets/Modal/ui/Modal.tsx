import classNames from '@/shared/lib/helpers/classNames'
import cls from './Modal.module.sass'
import { ReactNode, useRef, useEffect, useState } from 'react'
import useClickOutside from '@/shared/lib/hooks/useClickOutside'
import Portal from '@/shared/ui/Portal/Portal'

interface ModalProps {
  className?: string
  children: ReactNode
  onClose: () => void
}

export default function Modal({ className, children, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(true)
    return () => {
      setIsActive(false)
    }
  }, [])

  useClickOutside(modalRef, () => {
    setIsActive(false)
    setTimeout(onClose, 300)
  })

  return (
    <Portal>
      <div className={cls.Overlay}>
        <div ref={modalRef} className={classNames(cls.Modal, { [cls.active]: isActive }, className)}>
          <div className={cls.content}>{children}</div>
        </div>
      </div>
    </Portal>
  )
}
