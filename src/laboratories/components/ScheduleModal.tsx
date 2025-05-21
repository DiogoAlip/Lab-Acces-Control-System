import { NotificationModal } from "./NotificationModal";
import { rightarrow, leftarrow } from "../../assets";
import {
  getWeekDaysNames,
  getMonthDaysPerYear,
  getMonthName,
} from "../helpers";

export const ScheduleModal = ({
  date,
  language,
  exitModal,
}: {
  date: Date;
  language: string;
  exitModal: () => void;
}) => {
  const weekDays = getWeekDaysNames(language);
  const daysPerMonth = getMonthDaysPerYear(date.getFullYear());
  const monthName = getMonthName(language, date.getMonth());
  const today = date.getDate();

  const firstDayMonthPosition = (month = date.getMonth()) => {
    const date = new Date(Date.now());
    if (month) date.setMonth(month);
    date.setDate(1);
    return date.getDay() - 1 && 5;
  };

  const voidDays = Array(firstDayMonthPosition()).fill(undefined);

  return (
    <>
      <NotificationModal>
        <div className="weekdays">
          <img
            src={leftarrow}
            className="little-image"
            alt=""
            onClick={() => {}}
          />
          <h1 onClick={exitModal}>{monthName}</h1>
          <img
            src={rightarrow}
            className="little-image"
            alt=""
            onClick={() => {}}
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
