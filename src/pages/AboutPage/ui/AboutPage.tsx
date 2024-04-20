import { useTranslation } from 'react-i18next'
import styles from './AboutPage.module.sass'

interface AboutPageProps {
              
}

export default function AboutPage({ }: AboutPageProps) {
  const { t, i18n } = useTranslation()

  return (
    <div>
      AboutPage
      {t('AboutPage')}
    </div>
  )
}