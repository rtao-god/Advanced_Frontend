import TextProps from './types'
import cls from './Text.module.scss'
import classNames from '@/shared/lib/helpers/classNames'
import { Element } from '@/shared/ui'

export default function Text({
    type = 'p',
    children,
    position = 'start',
    fz,
    color = '',
    fw,
    onClick,
    style,
    className = ''
}: TextProps) {
    return (
        <Element
            type={type}
            className={classNames(cls.Text, {}, [className || '', cls[type]])}
            onClick={onClick}
            style={{
                textAlign: position,
                fontSize: fz,
                color: color,
                fontWeight: fw,
                ...style
            }}>
            {children}
        </Element>
    )
}
