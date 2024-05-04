import { Text } from "@/shared/ui/Text/Text";
import UserRankProps from "./types";
import classNames from '@/shared/lib/helpers/classNames'
import cls from './UserRank.module.sass'

export default function UserRank({ className, rank, position, fz = "14px", }: UserRankProps) {
    return (
        <div className={classNames(cls.UserRank, {}, [className || ''])}>
            <Text type="p" fz={fz} color="#B1B2B4" position={position}>
                rank: {rank}
            </Text>
        </div>
    )
}