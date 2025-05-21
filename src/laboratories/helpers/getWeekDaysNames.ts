export const getWeekDaysNames = (language: string) => {
  const SpanishWords = ["Lun", "Mar", "Mier", "Jue", "Vie", "Sab", "Dom"];
  const EnglishWords = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return language === "Español" ? SpanishWords : EnglishWords;
};
