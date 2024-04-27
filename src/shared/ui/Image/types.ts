import { ImgHTMLAttributes, ReactNode } from 'react'

export interface IImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
}
