import { useEffect } from "react";
import { rightarrow, leftarrow } from "../../assets";
import { getWeekDaysNames } from "../helpers";

export const CalendaryBar = ({
  language,
  forChangeMonth,
  week,
  weekday,
  keepMonth,
  nextWeek,
  prevWeek,
  changeDay,
}: {
  language: string;
  forChangeMonth: (value: number) => void;
  week: Date[];
  weekday: number;
  selectDay: number;
  keepMonth: number;
  changeDay: (newDay: Date) => void;
  nextWeek: () => void;
  prevWeek: () => void;
}) => {
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
