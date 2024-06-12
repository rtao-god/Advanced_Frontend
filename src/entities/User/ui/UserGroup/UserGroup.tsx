import { UserGroupProps } from './types'
import Text from '@/shared/ui/Text/Text'
import classNames from '@/shared/lib/helpers/classNames'
import cls from './UserGroup.module.sass'

export default function UserGroup({ className, group, fz }: UserGroupProps) {
    return (
        <div className={classNames(cls.User_group, {}, [className ?? ''])}>
            <Text type='p' fz={fz ?? '16px'} color='#7D7F82'>
                {group}
            </Text>
        </div>
    )
}
