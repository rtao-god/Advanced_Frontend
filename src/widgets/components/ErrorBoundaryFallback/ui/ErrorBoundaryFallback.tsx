import cls from './ErrorBoundaryFallback.module.scss'
import { Btn } from '@/shared/ui'
import classNames from '@/shared/lib/helpers/classNames'
import ErrorBoundaryFallbackProps from './types'

export default function ErrorBoundaryFallback({ className }: ErrorBoundaryFallbackProps) {
    const handleClick = () => {
        location.pathname = '/'
    }

    return (
        <div className={classNames(cls.Error_boundary_fallback, {}, [className ?? ''])}>
            {/* <img src={sick ? errorRed : error} alt="" /> */}
            <Btn color='#0064FA' width='436px' onClick={handleClick}>
                Вернуться
            </Btn>
        </div>
    )
}
