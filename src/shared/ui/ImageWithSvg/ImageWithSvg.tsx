import ImageProps from './types'

export default function ImageWithSvg({ svg, width, height, style, onClick, className }: ImageProps) {
    return (
        <div style={{ ...style, minWidth: width, height }} onClick={onClick} className={className}>
            {svg}
        </div>
    )
}
