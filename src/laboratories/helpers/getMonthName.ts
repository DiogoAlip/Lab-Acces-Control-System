export const getMonthName = (language: string, monthNumber = 0) => {
  const date = new Date(Date.now());
  const languageTag = language == "Español" ? "es-ES" : "en-EN";
  if (monthNumber) date.setMonth(monthNumber);
  return date.toLocaleString(languageTag, { month: "long" }).toUpperCase();
};
