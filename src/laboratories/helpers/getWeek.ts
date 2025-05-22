export const getWeek = (year: number, month: number, day: number) => {
  const firstOfMonth = new Date(year, month, day);
  const dayOfWeek = firstOfMonth.getDay() || 7;
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
