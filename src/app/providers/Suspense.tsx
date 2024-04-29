import { Loader } from "@/widgets";
import { FC, ReactNode, Suspense, useEffect, useState } from "react";

interface Props {
    children: ReactNode;
}

// const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const PSuspense: FC<Props> = ({ children }): JSX.Element => {
  /*   const [isReady, setIsReady] = useState(false);
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        delay().then(() => {
            setIsReady(true);
            setShowLoader(false);
        });
    }, []);

    if (!isReady) {
        return <Loader />;
    }
 */
    return (
        <Suspense fallback={/* showLoader ?  */<Loader /> /* : null */}>
            {children}
        </Suspense>
    );
};
