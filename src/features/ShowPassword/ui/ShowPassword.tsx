import ShowPasswordProps from '../types'
import { EyeClose, EyeOpen } from '@/shared/icons/ShowPassword/'
import { ImageWithSvg } from '@/shared/ui/ImageWithSvg/ImageWithSvg'

export default function ShowPassword({ className, isShow, onClick }: ShowPasswordProps) {
  return (
    <ImageWithSvg
      svg={isShow ? <EyeOpen className={className} /> : <EyeClose className={className} />}
      onClick={onClick}
      style={{ fill: '#B1B2B4', cursor: 'pointer' }}
    />
  )
}
