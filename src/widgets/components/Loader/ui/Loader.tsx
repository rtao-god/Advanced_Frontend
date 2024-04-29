import LoaderIcon from '@/shared/icons/LoaderIcon'
import cls from './Loader.module.sass'
import { ImageWithSvg } from '@/shared/ui/ImageWithSvg/ImageWithSvg'

interface LoaderProps {
  className?: string
}

export default function Loader({ className }: LoaderProps) {
  return (
    <ImageWithSvg svg={<LoaderIcon className={cls.Loader} />} />
  )
}