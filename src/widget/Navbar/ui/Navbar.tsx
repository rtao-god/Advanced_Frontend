import cls from './Navbar.module.sass'
import classNames from '@/shared/lib/helpers/classNames'
import AppLink, { AppLinkTheme } from '@/shared/ui/AppLink/AppLink'
import { LangSwitcher } from '@/widget/LangSwitcher'
import { useState } from 'react'
import Btn from '@/shared/ui/Btn/Btn'
import { Modal } from '@/widget/Modal'
import useModal from '@/shared/lib/hooks/useModal'
import { useTheme } from '@/shared/lib/hooks/useTheme'

interface NavbarProps {
  className?: string
}

export default function Navbar({ className }: NavbarProps) {
  const { toggleTheme } = useTheme()

  const { isOpen, toggleModal, closeModal } = useModal()

  return (
    <div className={classNames(cls.Navbar, {}, [className || ''])}>
      <Btn onClick={toggleTheme}> Change theme </Btn>
      <LangSwitcher className={cls.lang} />

      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to="/">
          MainPage
        </AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY} to="about">
          AboutPage
        </AppLink>

        <Btn onClick={toggleModal}> Войти </Btn>

        {isOpen &&
          <Modal onClose={closeModal}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto id aperiam ullam autem quia, assumenda eos beatae at voluptate consequatur nesciunt quod expedita delectus eaque ipsum maxime iure numquam atque!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat rerum ipsam repudiandae culpa, ipsa mollitia ut corrupti itaque laboriosam asperiores totam facere id placeat debitis alias sint ducimus! Voluptate, facilis.</p>
          </Modal>
        }
      </div>
    </div>
  )
}
