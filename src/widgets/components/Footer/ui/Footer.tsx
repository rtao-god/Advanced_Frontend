import classNames from '@/shared/lib/helpers/classNames'
import cls from './Footer.module.scss'
import { WaveAnimate } from '@/shared/ui'

interface FooterProps {
    className?: string
}

export default function Footer({ className }: FooterProps) {
    return (
        <div className={classNames(cls.Footer, {}, [className ?? ''])}>
            <WaveAnimate />
        </div>
    )
}
