import { useState } from "react";
import { getMonthDaysPerYear } from "./getMonthDaysPerYear";

export const useWeek = (month: number, year: number) => {
  const [keepMonth, setKeepMonth] = useState(month);
  const [keepYear, setKeepYear] = useState(year);

  const actualTime = Date.now();
  const [actualDate, setActualDate] = useState(new Date(actualTime));
  const [weekday, setWeekDay] = useState(actualDate.getDay() || 7);
  const [selectDay, setSelectDay] = useState(actualDate.getDate());
  const [daysOfYear, setDaysOfYear] = useState(getMonthDaysPerYear(keepYear));

  const dayPositionByWeekDay = [1, 2, 3, 4, 5, 6, 7];

  const getWeek = (newDay = selectDay, newMonth = keepMonth) =>
    dayPositionByWeekDay.map((_, index) => {
      const month = daysOfYear[newMonth];
      const weekForReturn = month[newDay - weekday + index];
      if (!weekForReturn && index + 1 < weekday) {
        const backMonth = daysOfYear[newMonth - 1];
        return backMonth[backMonth.length + newDay - weekday + index];
      } else if (!weekForReturn && index + 1 >= weekday) {
        const nextMonth = daysOfYear[newMonth + 1];
        return nextMonth[index - weekday];
      }
      return weekForReturn;
    });

  const [week, setWeek] = useState(getWeek());

  const changeDay = (newDay: number, newDayWeek: number) => {
    setSelectDay(newDay);
    setWeekDay(newDayWeek);
  };

  const nextWeek = () => {
    actualDate.setDate(selectDay + 7);
    setActualDate(actualDate);
    setKeepMonth(actualDate.getMonth());
    setSelectDay(actualDate.getDate());
    setWeek(getWeek(actualDate.getDate(), actualDate.getMonth()));
  };

  const prevWeek = () => {
    if (selectDay - 7 < 0) {
      actualDate.setDate(0);
      const pastDate = actualDate.getDate() + selectDay - 7;
      actualDate.setDate(pastDate);
      setActualDate(actualDate);
      setSelectDay(pastDate);
    } else {
      actualDate.setDate(selectDay - 7);
      setSelectDay(actualDate.getDate());
      setActualDate(actualDate);
    }
    setKeepMonth(actualDate.getMonth());
    setWeek(getWeek(actualDate.getDate(), actualDate.getMonth()));
  };

  return {
    week,
    weekday,
    keepMonth,
    changeDay,
    nextWeek,
    prevWeek,
  };
};
