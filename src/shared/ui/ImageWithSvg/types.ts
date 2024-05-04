import { ImgHTMLAttributes, ReactNode } from 'react'

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  svg: ReactNode
}
