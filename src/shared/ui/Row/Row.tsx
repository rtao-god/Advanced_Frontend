import { CSSProperties, FC, ReactNode } from "react";

import cls from "./Row.module.sass";
import classNames from "@/shared/lib/helpers/classNames";

interface IRowProps {
    children: ReactNode;
    style?: CSSProperties;
    gap: number;
    className?: string;
    onClick?: () => void;
}

export const Row: FC<IRowProps> = ({
    children,
    style,
    gap,
    className,
    onClick,
}) => {
    return (
        <div
            className={classNames(cls.Row, {}, [className || ''])}
            style={{ ...style, gridGap: gap }}
            onClick={onClick}
        >
            {children}
        </div>
    );
};