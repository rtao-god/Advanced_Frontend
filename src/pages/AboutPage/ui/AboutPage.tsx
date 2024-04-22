import { useTranslation } from 'react-i18next'
import styles from './AboutPage.module.sass'

interface AboutPageProps {}

export default function AboutPage({}: AboutPageProps) {
  const { t } = useTranslation('about')

  return (
    <div>
      {t('AboutPage')}
      <div>{t('test')}</div>
      <div>{t('test1')}</div>
      <div>{t('test2')}</div>
      <div>{t('test3')}</div>
      <div>{t('test4')}</div>
      <div>{t('test5')}</div>
    </div>
  )
}
