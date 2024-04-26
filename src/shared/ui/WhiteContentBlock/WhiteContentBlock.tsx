import { FC } from "react";
import { IWhiteContentBlockProps } from "./types";

import cls from "./WhiteContentBlock.module.sass";
import { useAuth } from "@/shared/model/store/auth";
import classNames from "@/shared/lib/helpers/classNames";

export const WhiteContentBlock: FC<IWhiteContentBlockProps> = ({
    children,
    style,
    className,
}) => {
    const { user } = useAuth();

    return (
        <div
            className={classNames(cls.WhiteContentBlock, {}, [className || '', cls.sick])}
            style={style}
        >
            {children}
        </div>
    );
};