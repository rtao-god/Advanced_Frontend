import { FC, ReactNode, CSSProperties } from "react";

import cls from "./Rows.module.sass";
import classNames from "@/shared/lib/helpers/classNames";

interface IRowsProps {
    children: ReactNode;
    rows: string[];
    gap: number;
    style?: CSSProperties;
    className?: string;
}

export const Rows: FC<IRowsProps> = ({
    children,
    rows,
    gap,
    className,
    style,
}) => {
    return (
        <div
            className={classNames(cls.Rows, {}, [className || ''])}
            style={{ gridGap: gap, gridTemplateRows: rows.join(" "), ...style }}
        >
            {children}
        </div>
    );
};