import { useTranslation } from 'react-i18next'
import cls from './AboutPage.module.scss'
import classNames from '@/shared/lib/helpers/classNames'
import Layout from '../Layout/Layout'
import DatePicker from '@/features/datePicker/ui/DatePicker/DatePicker'

interface AboutPageProps {
    className?: string
}

export default function AboutPage({ className }: AboutPageProps) {
    const { t } = useTranslation('about')

    return (
        <Layout>
            <div className={classNames(cls.AboutPage, {}, [className ?? ''])}>
                <DatePicker />
            </div>
        </Layout>
    )
}
