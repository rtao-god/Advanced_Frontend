import { useTranslation } from 'react-i18next'
import styles from './MainPage.module.sass'

interface MainPageProps {

}

export default function MainPage({ }: MainPageProps) {
  const { t, i18n } = useTranslation('main')

  return (
    <div>
      {t('MainPage')}
    </div>
  )
}