import { useTranslation } from 'react-i18next'
import cls from './AboutPage.module.sass'
import classNames from '@/shared/lib/helpers/classNames'
import Layout from '../Layout/Layout'

interface AboutPageProps {
    className?: string
}

export default function AboutPage({ className }: AboutPageProps) {
    const { t } = useTranslation('about')

    return (
        <Layout>
            <div className={classNames(cls.AboutPage, {}, [className || ''])}>
                {t('AboutPage')}
                <div>{t('test')}</div>
                <div>{t('test1')}</div>
                <div>{t('test2')}</div>
                <div>{t('test3')}</div>
                <div>{t('test4')}</div>
                <div>{t('test5')}</div>
            </div>
        </Layout>
    )
}
