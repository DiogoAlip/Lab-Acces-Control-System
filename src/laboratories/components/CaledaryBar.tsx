import { useWeek } from "../hooks/useWeek";
import { rightarrow, leftarrow } from "../../assets";
import { SetStateAction, Dispatch } from "react";

export const CalendaryBar = ({
  language,
  forOpenModal,
  date,
  forChangeMonth,
}: {
  language: string;
  forOpenModal: Dispatch<SetStateAction<boolean>>;
  date: Date;
  forChangeMonth: (value: number) => void;
}) => {
  const { week, weekday, keepMonth, nextWeek, prevWeek, changeDay } = useWeek(
    date.getMonth(),
    date.getFullYear()
  );

  const dayPositionByWeekDay = [1, 2, 3, 4, 5, 6, 7];

  const SpanishWords = ["Lun", "Mar", "Mier", "Jue", "Vie", "Sab", "Dom"];

  const EnglishWords = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const HomeWords = language == "Español" ? SpanishWords : EnglishWords;

  return (
    <div className="weekdays">
      <img
        src={leftarrow}
        className="little-image"
        alt=""
        onClick={() => {
          prevWeek();
          if (week[0] - 7 < 1) {
            forChangeMonth(keepMonth - 1);
          } else {
            forChangeMonth(keepMonth);
          }
        }}
      />
      {week.map((value, index) => {
        return (
          <div className="weekday-container" key={value}>
            <span className="weekday">{HomeWords[index]}.</span>
            <div
              className={`weekday-number ${
                weekday === dayPositionByWeekDay[index] ? "select" : ""
              }`}
              onClick={() => {
                changeDay(value, dayPositionByWeekDay[index]);
                forChangeMonth(keepMonth);
              }}
            >
              {week[index]}
            </div>
          </div>
        );
      })}
      <img
        src={rightarrow}
        className="little-image"
        alt=""
        onClick={() => {
          nextWeek();
          if (week[week.length - 1] + 7 > 31) {
            forChangeMonth(keepMonth + 1);
          } else {
            forChangeMonth(keepMonth);
          }
        }}
      />
    </div>
  );
};
