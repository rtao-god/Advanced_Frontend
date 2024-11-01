import cls from './MainPage.module.scss'
import classNames from '@/shared/lib/helpers/classNames'
import Layout from '../Layout/Layout'
import MainPageProps from './types'
import { PostsList } from '@/widgets/components'

export default function MainPage({ className }: MainPageProps) {
    return (
        <Layout>
            <div className={classNames(cls.Main_page, {}, [className ?? ''])}>
                <PostsList />
            </div>
        </Layout>
    )
}
