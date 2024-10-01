import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { allDaysByMonth } from "../hooks/getDate";
import { rightarrow } from "../../assets";
import { leftarrow } from "../../assets";

export const CalendaryBar = () => {
  const { language } = useContext(LanguageContext);

  const actualTime = Date.now();
  const actualDate = new Date(actualTime);
  const [weekday, setWeekDay] = useState(actualDate.getDay() || 7);
  const [selectDay, setSelectDay] = useState(actualDate.getDate());
  const daysOfTheMonth = allDaysByMonth(
    actualDate.getMonth(),
    actualDate.getFullYear()
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
        onClick={() => setSelectDay(selectDay - 7)}
      />
      {dayPositionByWeekDay.map((value, index) => {
        const numberDay = daysOfTheMonth[
          selectDay + (dayPositionByWeekDay[index] - weekday)
        ].getDay()
          ? daysOfTheMonth[
              selectDay + (dayPositionByWeekDay[index] - weekday)
            ].getDay()
          : 0;
        return (
          <div className="weekday-container" key={value}>
            <span className="weekday">{HomeWords[index]}.</span>
            <div
              className={`weekday-number ${
                weekday === dayPositionByWeekDay[index] ? "select" : ""
              }`}
              onClick={() => {
                setSelectDay(numberDay);
                setWeekDay(dayPositionByWeekDay[index]);
                console.log(weekday);
              }}
            >
              {numberDay}
            </div>
          </div>
        );
      })}
      <img
        src={rightarrow}
        className="little-image"
        alt=""
        onClick={() => setSelectDay(selectDay + 7)}
      />
    </div>
  );
};
