import classNames from '@/shared/lib/helpers/classNames'
import cls from './Footer.module.sass'
import WaveAnimate from '@/shared/ui/animations/WaveAnimate/WaveAnimate'

interface FooterProps {
  className?: string
}

export default function Footer({ className }: FooterProps) {
  return (
    <div className={classNames(cls.Footer, {}, [className || ''])}>
      <WaveAnimate />
    </div>
  )
}
