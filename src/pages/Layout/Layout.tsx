import LayoutProps from './types'
import { Navbar, Sidebar, Footer } from '@/widgets/components'
import { TABLET, MOBILE, PC } from '@/shared/utils'
import cls from './Layout.module.scss'
import classNames from '@/shared/lib/helpers/classNames'

export default function Layout({ children, className }: LayoutProps) {
    // const isDesktop = !MOBILE && !TABLET
    const isDesktop = MOBILE && TABLET // для тестов

    return (
        <div className={classNames(cls.Layout, {}, [className ?? ''])}>
            {/* {isDesktop && <Navbar />}
            <div className={cls.content}>
                {isDesktop && <Sidebar />}
                <div className={cls.main}>{children}</div>
                {isDesktop && <Footer />}
            </div> */}
            <Navbar />
            <div className={cls.content}>
                <Sidebar />
                <div className={cls.main}>{children}</div>
                <Footer />
            </div>
        </div>
    )
}
