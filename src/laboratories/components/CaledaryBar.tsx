import { useEffect } from "react";
import { useWeek } from "../hooks/useWeek";
import { rightarrow, leftarrow } from "../../assets";
import { getWeekDaysNames } from "../helpers";

export const CalendaryBar = ({
  language,
  date,
  forChangeMonth,
}: {
  language: string;
  date: Date;
  forChangeMonth: (value: number) => void;
}) => {
  const { week, weekday, keepMonth, nextWeek, prevWeek, changeDay } = useWeek(
    date.getMonth(),
    date.getFullYear(),
  );

  useEffect(() => {
    forChangeMonth(keepMonth);
  }, [keepMonth]);

  const HomeWords = getWeekDaysNames(language);

  return (
    <div className="weekdays">
      <img src={leftarrow} className="little-image" alt="" onClick={prevWeek} />
      {week.map((value, index) => {
        return (
          <div className="weekday-container" key={value.getDate()}>
            <span className="weekday">{HomeWords[index]}.</span>
            <div
              className={`weekday-number ${
                weekday === value.getDay() ? "select" : ""
              }`}
              onClick={() => changeDay(value)}
            >
              {week[index].getDate()}
            </div>
          </div>
        );
      })}
      <img
        src={rightarrow}
        className="little-image"
        alt=""
        onClick={nextWeek}
      />
    </div>
  );
};
