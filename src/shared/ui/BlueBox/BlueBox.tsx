import { CSSProperties, FC, ReactNode } from "react";

import cls from "./BlueBox.module.sass";
import classNames from "@/shared/lib/helpers/classNames";

interface IBlueBoxProps {
    children: ReactNode;
    style?: CSSProperties;
    className?: string;
}

export const BlueBox: FC<IBlueBoxProps> = ({ children, style, className }) => {
    return (
        <div
            className={classNames(cls.BlueBox, {}, [className || ''])}
            style={style}
        >
            {children}
        </div>
    );
};