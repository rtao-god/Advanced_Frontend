import cls from './ErrorBoundaryFallback.module.sass'
import Btn from '@/shared/ui/Btn/Btn'
import classNames from '@/shared/lib/helpers/classNames'

interface ErrorBoundaryFallback {
    className?: string
}

export default function ErrorBoundaryFallback({ className }: ErrorBoundaryFallback) {
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
