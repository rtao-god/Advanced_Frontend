import classNames from '@/shared/lib/classNames'
import cls from './PageError.module.sass'
import { useTranslation } from 'react-i18next'
import Button from '@/shared/ui/Button/Button'

interface PageErrorProps {
  className?: string
}

export default function PageError({ className }: PageErrorProps) {
  const { t } = useTranslation('pageError')

  const reloadPage = () => {
    location.reload()
  }

  return (
    <div className={classNames(cls.PageError, {}, [className || ''])}>
      <h1> {t('An unexpected error has occurred')} </h1>
      <Button onClick={reloadPage}> {t('Refresh the page')} </Button>
    </div>
  )
}
