import classNames from '@/shared/lib/helpers/classNames'
import cls from './PageError.module.sass'
import { useTranslation } from 'react-i18next'
import { useBackOnPrevPage } from '@/shared/lib/hooks/useBackOnPrevPage'
import Btn from '@/shared/ui/Btn/Btn'

interface PageErrorProps {
    className?: string
    errorMessage?: string
    errorStack?: string
    errorInfo?: React.ErrorInfo
}

export default function PageError({ className, errorMessage, errorStack, errorInfo }: PageErrorProps) {
    const { t } = useTranslation('pageError')

    const reloadPage = () => {
        location.reload()
    }

    const { backOnPrevPage } = useBackOnPrevPage()

    const formattedErrorInfo = errorInfo ? JSON.stringify(errorInfo, null, 2) : null

    return (
        <div className={classNames(cls.Page_error, {}, [className ?? ''])}>
            <div className={cls.container}>
                <h2>Неправильно набран адрес или такой страницы не существует</h2>
                {errorMessage && (
                    <p>
                        <strong>Error:</strong> {errorMessage}
                    </p>
                )}
                {errorStack && (
                    <div>
                        <h3>Error Stack:</h3>
                        <pre>{errorStack}</pre>
                    </div>
                )}
                {formattedErrorInfo && (
                    <details>
                        <summary>More info</summary>
                        <pre>{formattedErrorInfo}</pre>
                    </details>
                )}
            </div>

            <Btn onClick={backOnPrevPage}>Вернуться</Btn>
            <Btn onClick={reloadPage}>Обновить страницу</Btn>
        </div>
    )
}
