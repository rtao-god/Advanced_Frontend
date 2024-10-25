import { useTheme } from '@/shared/lib/hooks/useTheme'
import classNames from '@/shared/lib/helpers/classNames'
import cls from './Btn.module.scss'
import BtnProps from './types'
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext'

export default function Btn({
    color,
    width,
    children,
    onClick = () => '',
    br,
    padding,
    disabled,
    border,
    height,
    type,
    fz,
    minW,
    className,
    size = 'medium',
    dataTestid
}: BtnProps) {
    const { theme } = useTheme()
    const themeColor = theme === Theme.DARK ? 'green' : 'blue'

    return (
        <button
            className={classNames(cls.Btn, { [cls[themeColor]]: true, [cls[size]]: true }, [className ?? ''])}
            type={type}
            style={{
                fontSize: fz,
                width: width,
                borderRadius: br,
                padding,
                height,
                minWidth: minW,
                color,
                border
            }}
            disabled={disabled}
            onClick={onClick}
            data-testid={dataTestid}>
            {children}
        </button>
    )
}
