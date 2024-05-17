import classNames from '@/shared/lib/helpers/classNames'
import cls from './WaveAnimate.module.sass'
import WaveAnimateProps from './types'

export default function WaveAnimate({ className }: WaveAnimateProps) {
  return (
    <div className={classNames(cls.WaveAnimate, {}, [className || ''])}>
      <div className={cls.waves}>
        <div className={`${cls.wave_container} ${cls.wave_animation}`}>
          <div className={`${cls.wave_layer} ${cls.bg_top}`}>
            <div className={cls.wave_top}></div>
          </div>

          <div className={`${cls.wave_layer} ${cls.bg_middle}`}>
            <div className={cls.wave_middle}></div>
          </div>

          <div className={`${cls.wave_layer} ${cls.bg_bottom}`}>
            <div className={cls.wave_bottom}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
