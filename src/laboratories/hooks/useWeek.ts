import { useState } from "react";

export const useWeek = (month: number, year: number) => {
  const [keepMonth, setKeepMonth] = useState(month);
  const [keepYear, setKeepYear] = useState(year);

  const actualTime = Date.now();
  const [actualDate, setActualDate] = useState(new Date(actualTime));
  const [weekday, setWeekDay] = useState(actualDate.getDay() || 7);
  const [selectDay, setSelectDay] = useState(actualDate.getDate());

  const getWeek = (year: number, month: number, day: number) => {
    const firstOfMonth = new Date(year, month, day);
    let dayOfWeek = firstOfMonth.getDay();
    if (dayOfWeek === 0) dayOfWeek = 7;
    const startOfWeek = new Date(firstOfMonth);
    startOfWeek.setDate(firstOfMonth.getDate() - (dayOfWeek - 1));
    const week: Date[] = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      week.push(day);
    }
    return week;
  };

  const [week, setWeek] = useState(getWeek(keepYear, keepMonth, selectDay));

  const changeDay = (newDay: number, newDayWeek: number) => {
    setSelectDay(newDay);
    setWeekDay(newDayWeek);
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
