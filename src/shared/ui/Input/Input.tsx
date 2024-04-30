import { FC, InputHTMLAttributes, useEffect, useRef } from "react";

import cls from "./Input.module.sass";
import classNames from "@/shared/lib/helpers/classNames";
import { IInput } from "@/shared/types/input";

export const Input: FC<IInput & InputHTMLAttributes<HTMLInputElement>> = ({
    type = "text",
    placeholder,
    width = "100%",
    borderColor,
    bt,
    br,
    bb,
    bl,
    btr,
    bbr,
    btl,
    bbl,
    bgcolor,
    disabled,
    onChange,
    onBlur,
    value,
    height,
    borderRadius,
    padding,
    name,
    className,
    onFocus,
    fz,
    border,
}) => {
    const ref = useRef<string[]>([]);

    useEffect(() => {
        const arr: string[] = [];

        if (className) {
            arr.push(className);
        }

        ref.current = arr;
    }, [className]);

    const combinedClassName = ref.current.join(" ");

    return (
        <input
            className={classNames(cls.Input, {}, [className || '', combinedClassName])}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            style={{
                width: width,
                borderRadius: !borderRadius
                    ? `${btr} ${bbr} ${bbl} ${btl}`
                    : borderRadius,
                height,
                borderColor: borderColor,
                borderTop: bt,
                borderRight: br,
                borderBottom: bb,
                borderLeft: bl,
                backgroundColor: bgcolor,
                padding,
                fontSize: fz,
                border,
            }}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            value={value}
            name={name}
        />
    );
};