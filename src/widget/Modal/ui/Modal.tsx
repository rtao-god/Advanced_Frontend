import { classNames } from '@/shared/lib/classNames'
import cls from './Modal.module.sass'
import { ReactNode, useRef, useEffect, useState } from 'react'
import useClickOutside from '@/shared/hooks/useClickOutside'

interface ModalProps {
  className?: string
  children: ReactNode
  onClose: () => void
}

export default function Modal({ className, children, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)

  // Initiate opening animation when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true)
    }, 300) // Delay slightly to ensure CSS transition takes place
    return () => clearTimeout(timer)
  })

  useClickOutside(modalRef, () => {
    setIsActive(false) // Trigger closing animation
    setTimeout(onClose, 100) // Delay the onClose handler to allow animation to complete
  })

  return (
    <div ref={modalRef} className={classNames(cls.Modal, {}, [className, !isActive && 'hidden'])}>
      <div className={cls.content}>{children}</div>
    </div>
  )
}
