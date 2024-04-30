import { FC } from "react";
import { IImageProps } from "./types";

export const ImageWithSvg: FC<IImageProps> = ({
    svg,
    width,
    height,
    style,
    onClick,
    className,
}) => {
    return (
        <div style={{ ...style, minWidth: width, height, }} onClick={onClick} className={className}>
            {svg}
        </div>
    );
};