export const getMonthDaysPerYear = (year: number) => {
  let month = 0;
  let yearSchedule = {} as Record<number, Array<number>>;
  const date = new Date(year, month, 1);
  while (date.getFullYear() === year) {
    const days = new Array<Date>();
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    yearSchedule = {
      ...yearSchedule,
      [`${month}`]: days.map((date) => date.getDate()),
    };
    date.setMonth(++month);
  }
  return yearSchedule;
};
