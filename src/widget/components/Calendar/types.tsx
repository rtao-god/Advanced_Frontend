import { SetStateAction, Dispatch } from "react";

export interface ICalendare {
    width?: string;
    height?: string;
    info: boolean;
    selectDate?: Date;
    setSelectDate?: Dispatch<SetStateAction<Date | undefined>>;
    setSelectDateEnd?: Dispatch<SetStateAction<Date | undefined>>;
    borderColor?: string;
}