// import { FC, useState, useEffect, ChangeEvent } from "react";
// import { ICalendare } from "./types";

// import { Input } from "@/shared/ui/Input";
// import { MOBILE, PC, SMALL_LAPTOP, TABLET } from "@/shared/utils";


// import styles from "./styles.module.sass";

// export const months = [
//     "Январь",
//     "Февраль",
//     "Март",
//     "Апрель",
//     "Май",
//     "Июнь",
//     "Июль",
//     "Август",
//     "Сентябрь",
//     "Октябрь",
//     "Ноябрь",
//     "Декабрь",
// ];
// export const decreasingMonths = [
//     "января",
//     "февраля",
//     "марта",
//     "апреля",
//     "мая",
//     "июня",
//     "июля",
//     "августа",
//     "сентября",
//     "октября",
//     "ноября",
//     "декабря",
// ];
// export const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
// export const fullDays = [
//     "Понедельник",
//     "Вторник",
//     "Среда",
//     "Четверг",
//     "Пятница",
//     "Суббота",
//     "Воскресенье",
// ];

// export const Calendar: FC<ICalendare> = ({
//     width,
//     height,
//     info,
//     selectDate,
//     setSelectDate,
//     setSelectDateEnd,
//     borderColor,
// }) => {
//     const currentDate: Date = new Date();
//     const [currentMonth, setCurrentMonth] = useState<number>(
//         currentDate.getMonth()
//     );
//     const [currentYear, setCurrentYear] = useState<number>(
//         currentDate.getFullYear()
//     );
//     const [selectedDay, setSelectedDay] = useState<string>(
//         currentDate.getDate().toString()
//     );
//     const [timeStart, setTimeStart] = useState<string>("");
//     const [timeEnd, setTimeEnd] = useState<string>("");
//     const [selectWeekDay, setSelectWeekDay] = useState<number>(
//         currentDate.getDay() === 0 ? 6 : currentDate.getDay()
//     );

//     useEffect(() => {
//         if (timeEnd?.length && setSelectDateEnd) {
//             setSelectDateEnd(
//                 new Date(
//                     `${currentYear}-${currentMonth + 1}-${selectedDay} ${
//                         timeEnd.length < 5 ? "00:00" : timeEnd
//                     }`
//                 )
//             );
//         } else if (timeStart?.length && setSelectDate) {
//             setSelectDate &&
//                 setSelectDate(
//                     new Date(
//                         `${currentYear}-${currentMonth + 1}-${selectedDay} ${
//                             timeStart.length < 5 ? "00:00" : timeStart
//                         }`
//                     )
//                 );
//         } else {
//             setSelectDate &&
//                 setSelectDate(
//                     new Date(
//                         `${currentYear}-${currentMonth + 1}-${selectedDay}`
//                     )
//                 );
//         }
//     }, [
//         currentMonth,
//         currentYear,
//         selectedDay,
//         setSelectDate,
//         setSelectDateEnd,
//         timeEnd,
//         timeStart,
//     ]);

//     useEffect(() => {
//         if (selectDate) {
//             const dayOfWeek = selectDate.getDay();
//             setSelectWeekDay(dayOfWeek === 0 ? 6 : dayOfWeek - 1);
//         }
//     }, [selectDate]);

//     const { user } = useAuth();

//     const sick = user && user.disease.length;
//     const active = `${styles.item} ${styles.active}`;
//     const activeRed = `${styles.item} ${styles.activeRed}`;

//     const handlePreviousMonth = () => {
//         if (currentMonth === 1) {
//             setCurrentMonth(11);
//             setCurrentYear(currentYear - 1);
//         } else {
//             setCurrentMonth(currentMonth - 1);
//         }
//     };

//     const handleNextMonth = () => {
//         if (currentMonth === 11) {
//             setCurrentMonth(0);
//             setCurrentYear(currentYear + 1);
//         } else {
//             setCurrentMonth(currentMonth + 1);
//         }
//     };

//     const handleSelectedDay = (day: string | undefined) => {
//         if (day === undefined) return;

//         setSelectedDay(day);
//     };

//     const getDaysInMonth = (
//         year: number,
//         month: number
//     ): (string | undefined)[] => {
//         const startDate = new Date(year, month, 1);
//         const endDate = new Date(year, month + 1, 0);
//         const days: (string | undefined)[] = [];

//         for (let i = 0; i < startDate.getDay() - 1; i++) {
//             days.push(undefined);
//         }

//         for (let day = 1; day <= endDate.getDate(); day++) {
//             days.push(day.toString());
//         }

//         const lastDayOfWeek = 7;
//         const remainingEmptyDays = (lastDayOfWeek - endDate.getDay()) % 7;

//         for (let i = 0; i < remainingEmptyDays; i++) {
//             days.push(undefined);
//         }

//         return days;
//     };

//     const daysInMonth = getDaysInMonth(currentYear, currentMonth);

//     const handleChangeTime = (e: ChangeEvent<HTMLInputElement>) => {
//         const currentValue = e.target.value;
//         const name = e.target.name;
//         const digitalOnly = currentValue.replace(/\D/g, "");
//         let formatedTime = digitalOnly;
//         const hours = +digitalOnly.slice(0, 2);
//         const minutes = +digitalOnly.slice(2, 4);

//         if (digitalOnly.length > 0) {
//             if (hours > 23 || minutes > 59) {
//                 return;
//             }

//             if (digitalOnly.length >= 2) {
//                 formatedTime = digitalOnly.slice(0, 2);
//             }

//             if (digitalOnly.length >= 3) {
//                 formatedTime += ":" + digitalOnly.slice(2, 4);
//             }
//         }

//         name === "timeStart" && setTimeStart(formatedTime);
//         name === "timeEnd" && setTimeEnd(formatedTime);
//     };

//     return (
//         <div
//             className={styles.calendar}
//             style={{
//                 width,
//                 height,
//                 borderColor:
//                     !borderColor && sick
//                         ? "#F7E6E8"
//                         : borderColor
//                         ? borderColor
//                         : "",
//             }}
//         >
//             <div className={styles.nav}>
//                 <div className={styles.date}>
//                     <Text
//                         type="h2"
//                         fz={PC || SMALL_LAPTOP || TABLET ? "18px" : "17px"}
//                     >
//                         {months[currentMonth]}
//                     </Text>
//                     &nbsp;
//                     <Text
//                         type="h2"
//                         fz={PC || SMALL_LAPTOP || TABLET ? "18px" : "17px"}
//                     >
//                         {currentYear}
//                     </Text>
//                 </div>
//                 <div className={styles.arrows}>
//                  {/*    <img
//                         src={arrowLeft}
//                         alt=""
//                         onClick={() => handlePreviousMonth()}
//                     />
//                     <img
//                         src={arrowRight}
//                         alt=""
//                         onClick={() => handleNextMonth()}
//                     /> */}
//                 </div>
//             </div>
//             <div className={styles.days}>
//                 <div className={styles.inner}>
//                     {days.map((item) => (
//                         <span key={item} className={styles.day}>
//                             {item}
//                         </span>
//                     ))}
//                 </div>
//                 <ul className={styles.list}>
//                     {daysInMonth.map((day) => (
//                         <li
//                             style={
//                                 day === undefined
//                                     ? { cursor: "" }
//                                     : { cursor: "pointer" }
//                             }
//                             key={day}
//                             className={
//                                 selectedDay === day && sick
//                                     ? activeRed
//                                     : selectedDay === day && !sick
//                                     ? active
//                                     : styles.item
//                             }
//                             onClick={() => handleSelectedDay(day)}
//                         >
//                             {day}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//             {info && (
//                 <>
//                     <div className={styles.line}></div>
//                     <div className={styles.info}>
//                         <div className={styles.box}>
//                             <div className={styles.text}>
//                                {/*  <Text type="p" fz="14px">
//                                     Время начала:
//                                 </Text> */}
//                             </div>
//                             <Input
//                                 type="text"
//                                 borderColor="#EBF3FF"
//                                 placeholder="00:00"
//                                 name="timeStart"
//                                 padding="12px"
//                                 value={timeStart}
//                                 onChange={handleChangeTime}
//                             />
//                         </div>
//                         <div className={styles.box}>
//                             <div className={styles.text}>
//                                 <Text type="p" fz="14px">
//                                     Конечное время:
//                                 </Text>
//                             </div>
//                             <Input
//                                 type="text"
//                                 borderColor="#EBF3FF"
//                                 name="timeEnd"
//                                 value={timeEnd}
//                                 padding="12px"
//                                 placeholder="00:00"
//                                 onChange={handleChangeTime}
//                             />
//                         </div>
//                     </div>
//                     <div
//                         className={
//                             sick
//                                 ? `${styles.result} ${styles.resultRed}`
//                                 : styles.result
//                         }
//                     >
//                         <Text type="p" fz={MOBILE ? "13px" : ""}>
//                             {fullDays[selectWeekDay]}, {selectedDay}&nbsp;
//                             {decreasingMonths[currentMonth]}&nbsp;
//                             {timeStart}
//                         </Text>
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };