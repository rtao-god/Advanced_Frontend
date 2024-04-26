import { FC } from "react";
import { IText } from "./types";

import cls from "./Text.module.sass";

export const Text: FC<IText> = ({
    type = "p",
    children,
    position = "start",
    fz,
    color = "",
    fw,
    onClick,
    style,
    className,
}) => {
    switch (type) {
        case "h1":
            return (
                <h1
                    className={`${className} ${cls.h1}`}
                    onClick={onClick}
                    style={{
                        ...style,
                        textAlign: position,
                        fontSize: fz,
                        color: color,
                        fontWeight: fw,
                    }}
                >
                    {children}
                </h1>
            );
        case "h2":
            return (
                <h2
                    className={`${className} ${cls.h2}`}
                    onClick={onClick}
                    style={{
                        ...style,
                        textAlign: position,
                        fontSize: fz,
                        color: color,
                        fontWeight: fw,
                    }}
                >
                    {children}
                </h2>
            );
        case "h3":
            return (
                <h3
                    className={`${className} ${cls.h3}`}
                    onClick={onClick}
                    style={{
                        ...style,
                        textAlign: position,
                        fontSize: fz,
                        color: color,
                        fontWeight: fw,
                    }}
                >
                    {children}
                </h3>
            );
        case "h4":
            return (
                <h4
                    className={`${className} ${cls.h4}`}
                    onClick={onClick}
                    style={{
                        ...style,
                        textAlign: position,
                        fontSize: fz,
                        color: color,
                        fontWeight: fw,
                    }}
                >
                    {children}
                </h4>
            );
        case "h5":
            return (
                <h5
                    className={`${className} ${cls.h5}`}
                    onClick={onClick}
                    style={{
                        ...style,
                        textAlign: position,
                        fontSize: fz,
                        color: color,
                        fontWeight: fw,
                    }}
                >
                    {children}
                </h5>
            );
        case "h6":
            return (
                <h6
                    className={`${className} ${cls.h6}`}
                    onClick={onClick}
                    style={{
                        ...style,
                        textAlign: position,
                        fontSize: fz,
                        color: color,
                        fontWeight: fw,
                    }}
                >
                    {children}
                </h6>
            );
        default:
            return (
                <p
                    className={`${className} ${cls.p}`}
                    onClick={onClick}
                    style={{
                        ...style,
                        textAlign: position,
                        fontSize: fz,
                        color: color,
                        fontWeight: fw,
                    }}
                >
                    {children}
                </p>
            );
    }
};