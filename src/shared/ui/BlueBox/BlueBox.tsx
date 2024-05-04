import cls from "./BlueBox.module.sass";
import classNames from "@/shared/lib/helpers/classNames";
import BlueBoxProps from "./types";

export default function BlueBox({ children, style, className }: BlueBoxProps) {
    return (
        <div
            className={classNames(cls.BlueBox, {}, [className || ''])}
            style={style}
        >
            {children}
        </div>
    );
};