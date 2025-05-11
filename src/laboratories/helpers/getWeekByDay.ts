import { getDaysByYear } from "./getDaysByYear";

export const getWeekbyDay = (date = new Date(Date.now())) => {
  const dayPositionByWeekDay = [1, 2, 3, 4, 5, 6, 7];
  const daysOfYear = getDaysByYear(date.getFullYear());
  const newMonth = date.getMonth();
  const newDay = date.getDate();
  const weekday = date.getDay() || 7;
  return dayPositionByWeekDay.map((_, index) => {
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
};
