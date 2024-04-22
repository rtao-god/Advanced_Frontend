import classNames from '@/shared/lib/classNames'
import cls from './LangSwitcher.module.sass'
import { useTranslation } from 'react-i18next'
import Button from '@/shared/ui/Button/Button'

interface LangSwitcherProps {
  className?: string
}

export default function LangSwitcher({ className }: LangSwitcherProps) {
  const { t, i18n } = useTranslation()

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button className={classNames(cls.className, {}, [className || ''])} onClick={toggle}>
      {' '}
      {t('Translate')}{' '}
    </Button>
  )
}
