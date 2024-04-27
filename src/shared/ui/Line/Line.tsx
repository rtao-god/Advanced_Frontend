import { FC } from "react";
import { ILineProps } from "./types";

import cls from "./Line.module.sass";
import classNames from "@/shared/lib/helpers/classNames";

export const Line: FC<ILineProps> = ({ className, color, height, width, style }) => {
    return (
        <div
            className={classNames(cls.Line, {}, [className || ''])}
            style={{ ...style, backgroundColor: color, width, height }}
        ></div>
    );
};