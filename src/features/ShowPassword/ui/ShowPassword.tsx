import { EyeClose, EyeOpen } from '@/shared/assets/icons/ShowPassword'
import ShowPasswordProps from '../types'
import { ImageWithSvg } from '@/shared/ui'

export default function ShowPassword({ className, isShow, onClick }: ShowPasswordProps) {
    return (
        <ImageWithSvg
            svg={isShow ? <EyeOpen className={className} /> : <EyeClose className={className} />}
            onClick={onClick}
            style={{ fill: '#B1B2B4', cursor: 'pointer' }}
        />
    )
}
