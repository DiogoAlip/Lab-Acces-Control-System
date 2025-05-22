import { useState } from "react";
import { NotificationModal } from "./NotificationModal";
import { rightarrow, leftarrow } from "../../assets";
import {
  getWeekDaysNames,
  getMonthDaysPerYear,
  getMonthName,
} from "../helpers";

const firstDayMonthPosition = (month?: number) => {
  const date = new Date(Date.now());
  if (month) date.setMonth(month);
  date.setDate(1);
  return date.getDay() - 1 && 5;
};

export const ScheduleModal = ({
  date,
  language,
  exitModal,
  forChangeMonth,
  month,
}: {
  date: Date;
  language: string;
  exitModal: () => void;
  forChangeMonth: (number: number) => void;
  month: string;
}) => {
  const today = date.getDate();
  const [voidDays, setVoidDays] = useState(
    Array(firstDayMonthPosition()).fill(undefined),
  );
  const [daysPerMonth, setDaysPerMonth] = useState(
    getMonthDaysPerYear(date.getFullYear()),
  );
  const weekDays = getWeekDaysNames(language);
  const [monthName, setMonthName] = useState(
    getMonthName(language, date.getMonth()),
  );

  const backMonth = () => {
    //setVoidDays(Array(firstDayMonthPosition(date.getMonth())).fill(undefined));
  };

  const nextMonth = () => {
    //setVoidDays(Array(firstDayMonthPosition(date.getMonth())).fill(undefined));
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
          {daysPerMonth[date.getMonth()].map((monthDays: Date) => (
            <div
              className={`weekday-number ${
                today === monthDays.getDate() ? "select" : ""
              }`}
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
