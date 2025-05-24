export const getMonthName = (language: string, monthNumber: number) => {
  const date = new Date(Date.now());
  date.setMonth(monthNumber);
  const languageTag = language == "Español" ? "es-ES" : "en-EN";
  const monthName = date
    .toLocaleString(languageTag, { month: "long" })
    .toUpperCase();
  return monthName;
};
