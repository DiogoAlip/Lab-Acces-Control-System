export const getMonthDaysPerYear = (year: number) => {
  const result: { [key: number]: Date[] } = {};

  for (let month = 0; month < 12; month++) {
    const days: Date[] = [];
    let day = 1;

    let currentDate = new Date(year, month, day);

    while (currentDate.getMonth() === month) {
      days.push(new Date(currentDate));
      day++;
      currentDate = new Date(year, month, day);
    }

    result[month] = days;
  }

  return result;
};
