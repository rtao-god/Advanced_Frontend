import { useTranslation } from 'react-i18next'
import cls from './MainPage.module.sass'
import { BugBtn } from '@/app/providers/ErrorBoundary'
import classNames from '@/shared/lib/helpers/classNames'
import { Counter } from '@/entities/Counter'
import Layout from '../Layout/Layout'

interface MainPageProps {
    className?: string
}

export default function MainPage({ className }: MainPageProps) {
    const { t } = useTranslation('main')

    return (
        <Layout>
            <div className={classNames(cls.Main_page, {}, [className ?? ''])}>
                <p>{t('MainPage')}</p>
                <BugBtn />
                <Counter />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sint laborum qui cumque recusandae,
                    perferendis quasi eos, impedit ex dolorem deserunt aperiam cum incidunt odit dolore! Ex beatae et
                    repudiandae.
                </p>
            </div>
        </Layout>
    )
}
