import { useEffect, useState } from "react";
import { getWeek } from "../helpers";

export const useWeek = (month: number, year: number) => {
  const [keepMonth, setKeepMonth] = useState(month);
  const [keepYear, setKeepYear] = useState(year);

  const actualTime = Date.now();
  const [actualDate, setActualDate] = useState(new Date(actualTime));
  const [weekday, setWeekDay] = useState(actualDate.getDay() || 7);
  const [selectDay, setSelectDay] = useState(actualDate.getDate());
  const [week, setWeek] = useState(getWeek(keepYear, keepMonth, selectDay));

  useEffect(() => {
    const selectDate = week.find((date) => date.getDate() === selectDay);
    const month = selectDate?.getMonth() ?? actualDate.getMonth();
    const year = selectDate?.getFullYear() ?? actualDate.getFullYear();
    setKeepMonth(month);
    setKeepYear(year);
  }, [selectDay]);

  const changeDay = (newDay: Date) => {
    setSelectDay(newDay.getDate());
    setWeekDay(newDay.getDay());
  };

  const nextWeek = () => {
    actualDate.setDate(selectDay + 7);
    setActualDate(actualDate);
    setSelectDay(actualDate.getDate());
    setWeek(
      getWeek(
        actualDate.getFullYear(),
        actualDate.getMonth(),
        actualDate.getDate(),
      ),
    );
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
    setWeek(
      getWeek(
        actualDate.getFullYear(),
        actualDate.getMonth(),
        actualDate.getDate(),
      ),
    );
  };

  return {
    week,
    weekday,
    selectDay,
    keepMonth,
    changeDay,
    nextWeek,
    prevWeek,
  };
};
