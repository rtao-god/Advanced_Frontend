import { FC } from "react";
import { IImageProps } from "./types";

export const Image: FC<IImageProps> = ({
    src,
    alt,
    width,
    height,
    style,
    onClick,
    className,
}) => {
    return (
        <img
            src={src}
            alt={alt}
            onClick={onClick}
            style={{ ...style, minWidth: width, height }}
            className={className}
        />
    );
};