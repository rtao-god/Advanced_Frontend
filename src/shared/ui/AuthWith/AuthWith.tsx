import { FC } from "react";
import { IAuthWithProps } from "./types";

import { BlueBox } from "../BlueBox/BlueBox";
import { Text } from "../Text/Text";
import { Row } from "../Row/Row";
import { Image } from "../Image/Image";

export const AuthWith: FC<IAuthWithProps> = ({ img, text }) => {
    return (
        <BlueBox
            style={{
                padding: 16,
                borderColor: "#D6E7FF",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Row gap={10}>
                {img}
                {/* <Image src={img} alt="auth icon" width={24} height={24} /> */}
                <Text type="p">{text}</Text>
            </Row>
        </BlueBox>
    );
};