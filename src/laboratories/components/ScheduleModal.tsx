import { useState } from "react";
import { NotificationModal } from "./NotificationModal";
import { rightarrow, leftarrow } from "../../assets";
import { getWeekDaysNames, getMonthDaysPerYear } from "../helpers";

const firstDayMonthPosition = (month?: number) => {
  const date = new Date(Date.now());
  if (month) date.setMonth(month);
  date.setDate(1);
  const weekDay = date.getDay() || 7;
  return Array(weekDay - 1).fill(undefined);
};

export const ScheduleModal = ({
  language,
  exitModal,
  forChangeMonth,
  month,
  actualDate,
  keepMonth,
  week,
  changeDay,
}: {
  language: string;
  exitModal: () => void;
  forChangeMonth: (number: number) => void;
  month: string;
  actualDate: Date;
  keepMonth: number;
  week: Date[];
  changeDay: (newDate: Date) => void;
}) => {
  const [voidDays, setVoidDays] = useState(firstDayMonthPosition(keepMonth));
  const [daysPerMonth, setDaysPerMonth] = useState(
    getMonthDaysPerYear(actualDate.getFullYear()),
  );
  const weekDays = getWeekDaysNames(language);

  const backMonth = () => {
    actualDate.setMonth(keepMonth - 1);
    const date = new Date(
      actualDate.getFullYear(),
      actualDate.getMonth(),
      actualDate.getDate(),
    );
    changeDay(date);
    forChangeMonth(actualDate.getMonth());
    setVoidDays(firstDayMonthPosition(actualDate.getMonth()));
  };

  const nextMonth = () => {
    actualDate.setMonth(keepMonth + 1);
    const date = new Date(
      actualDate.getFullYear(),
      actualDate.getMonth(),
      actualDate.getDate(),
    );
    changeDay(date);
    forChangeMonth(actualDate.getMonth());
    setVoidDays(firstDayMonthPosition(actualDate.getMonth()));
  };

  return (
    <>
      <NotificationModal>
        <div className="weekdays">
          <img
            src={leftarrow}
            className="little-image"
            alt=""
            onClick={backMonth}
          />
          <h1 className="pointered" onClick={exitModal}>
            {month}
          </h1>
          <img
            src={rightarrow}
            className="little-image"
            alt=""
            onClick={nextMonth}
          />
        </div>
        <div className="weekdays">
          {weekDays.map((weekDay) => (
            <span className="weekday" key={weekDay}>
              {weekDay}.
            </span>
          ))}
        </div>
        <div className="weekdays-schedule">
          {voidDays.map((fakeDay, index) => (
            <div className="fake-weekday-number" key={index}>
              {fakeDay}
            </div>
          ))}
          {daysPerMonth[keepMonth].map((monthDays: Date) => (
            <div
              className={`weekday-number ${
                week
                  .map((days) => days.getDate())
                  .find((day) => day === monthDays.getDate())
                  ? "select"
                  : ""
              }`}
              onClick={() => {
                console.log(monthDays);
                changeDay(monthDays);
              }}
              key={monthDays.getDate()}
            >
              {monthDays.getDate()}
            </div>
          ))}
        </div>
        <button className="button-large">Continuar</button>
      </NotificationModal>
    </>
  );
};
