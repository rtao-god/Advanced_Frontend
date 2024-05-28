import AuthContainerProps from './types'
import cls from './AuthContainer.module.sass'
import classNames from '@/shared/lib/helpers/classNames'
import Text from '../Text/Text'
import WhiteContentBlock from '../WhiteContentBlock/WhiteContentBlock'

export default function AuthContainer({ className, children, title }: AuthContainerProps) {
    return (
        <div className={classNames(cls.Auth_container, {}, [className ?? ''])}>
            <WhiteContentBlock className={cls.wrapper}>
                <Text className={cls.title} color='#e6edf3' type='h2' position='center' fz='24px'>
                    {title}
                </Text>
                {children}
            </WhiteContentBlock>
        </div>
    )
}
