import { FC, ReactNode, Suspense } from "react";
import { Loader } from "@/widgets/Loader";

interface Props {
    children: ReactNode;
}

export const PSuspense: FC<Props> = ({ children }): JSX.Element => {
    return <Suspense fallback={<Loader />}>{children}</Suspense>;
};