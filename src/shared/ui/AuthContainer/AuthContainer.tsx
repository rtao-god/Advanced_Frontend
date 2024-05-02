import { FC } from "react";
import { IAuthContainerProps } from "./types";
import cls from "./AuthContainer.module.sass";
import classNames from "@/shared/lib/helpers/classNames";
import { Text } from "../Text/Text";
import { WhiteContentBlock } from "../WhiteContentBlock/WhiteContentBlock";

export const AuthContainer: FC<IAuthContainerProps> = ({ className, children, title }) => {
    return (
        <div className={classNames(cls.AuthContainer, {}, [className || ''])}>
            <WhiteContentBlock className={cls.wrapper}>
                <Text className={cls.title} type="h2" position="center" fz="24px">
                    {title}
                </Text>
                {children}
            </WhiteContentBlock>
        </div>
    );
};