import WhiteContentBlockProps from './types'
import cls from './WhiteContentBlock.module.sass'
import classNames from '@/shared/lib/helpers/classNames'

export default function WhiteContentBlock({ children, style, className }: WhiteContentBlockProps) {
  return (
    <div className={classNames(cls.WhiteContentBlock, {}, [className || ''])} style={style}>
      {children}
    </div>
  )
}
