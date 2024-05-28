import LayoutProps from './types'
import { Navbar, Sidebar, Footer } from '@/widgets'
import { TABLET, MOBILE } from '@/shared/utils'
import cls from './Layout.module.sass'
import classNames from '@/shared/lib/helpers/classNames'

export default function Layout({ children, className }: LayoutProps) {
    const isDesktop = !MOBILE && !TABLET

    return (
        <div className={classNames(cls.Layout, {}, [className ?? ''])}>
            {isDesktop && <Navbar />}
            <div className={cls.content}>
                {isDesktop && <Sidebar />}
                <div className={cls.main}>{children}</div>
                {isDesktop && <Footer />}
            </div>
        </div>
    )
}
