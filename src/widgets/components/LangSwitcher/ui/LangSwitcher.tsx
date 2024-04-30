import classNames from '@/shared/lib/helpers/classNames'
import cls from './LangSwitcher.module.sass'
import { useTranslation } from 'react-i18next'
import Btn from '@/shared/ui/Btn/Btn'

interface LangSwitcherProps {
  className?: string
}

export default function LangSwitcher({ className }: LangSwitcherProps) {
  const { t, i18n } = useTranslation()

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Btn className={classNames(cls.className, {}, [className || ''])} onClick={toggle}>
      {t('Translate')}{' '}
    </Btn>
  )
}