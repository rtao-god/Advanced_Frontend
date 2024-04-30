import { IShowPasswordProps } from '../types'
import { EyeClose, EyeOpen } from '@/shared/icons/ShowPassword/'
import { ImageWithSvg } from '@/shared/ui/ImageWithSvg/ImageWithSvg'

export default function ShowPassword({ className, isShow, onClick }: IShowPasswordProps) {
    return (
        <ImageWithSvg
            svg={isShow ? <EyeOpen className={className} /> : <EyeClose className={className} />}
            onClick={onClick}
            width={24}
            height={24}
            style={{ fill: "#B1B2B4" }}
        />
    )
}