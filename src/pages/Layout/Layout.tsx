
import { FC } from "react";
import { TProps } from "./types"
import { Navbar, Sidebar } from "@/widgets";
import { TABLET, MOBILE } from "@/shared/utils";

import cls from "./Layout.module.sass";

export const Layout: FC<TProps> = ({ children }) => {
    return (
        <div>
            {!MOBILE && !TABLET && <Navbar />}
            {!MOBILE && !TABLET && <Sidebar />}
            <div className={cls.main}>{children}</div>
        </div>
    );
};
