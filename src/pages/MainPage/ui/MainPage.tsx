import { useTranslation } from 'react-i18next'
import cls from './MainPage.module.sass'
import { BugButton } from '@/app/providers/ErrorBoundary'
import { Modal } from '@/widget/Modal'
import { classNames } from '@/shared/lib/classNames'
import useModal from '@/shared/hooks/useModal'

interface MainPageProps {
  className?: string;
}

export default function MainPage({ className }: MainPageProps) {
  const { t } = useTranslation('main');
  const { isOpen, toggleModal, closeModal } = useModal();

  return (
    <div className={classNames(cls.MainPage, {}, [className])}>
      {t('MainPage')}
      <BugButton />
      <button onClick={toggleModal}>Toggle Modal</button>
      {isOpen && (
        <Modal onClose={closeModal}>
          <p>lol</p>
        </Modal>
      )}
    </div>
  );
}
