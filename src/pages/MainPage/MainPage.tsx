import { useTranslation } from 'react-i18next'
import cls from './MainPage.module.sass'
import { BugBtn } from '@/app/providers/ErrorBoundary'
import { Modal } from '@/widgets/components/Modal'
import classNames from '@/shared/lib/helpers/classNames'
import useModal from '@/shared/lib/hooks/useModal'
import Btn from '@/shared/ui/Btn/Btn'
import { Counter } from '@/entities/Counter'
import Layout from '../Layout/Layout'

interface MainPageProps {
  className?: string
}

export default function MainPage({ className }: MainPageProps) {
  const { t } = useTranslation('main')
  const { isOpen, toggleModal, closeModal } = useModal()

  return (
    <Layout>
      <div className={classNames(cls.MainPage, {}, [className || ''])}>
        <p>{t('MainPage')}</p>
        <BugBtn />
        <Counter />
        <p>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sint laborum qui cumque recusandae, perferendis
          quasi eos, impedit ex dolorem deserunt aperiam cum incidunt odit dolore! Ex beatae et repudiandae.{' '}
        </p>
        {/* <Btn onClick={toggleModal}>Toggle Modal</Btn> */}
        {/* {isOpen && (
          <Modal onClose={closeModal}>
            <p>Modal</p>
          </Modal>
        )} */}
      </div>
    </Layout>
  )
}
