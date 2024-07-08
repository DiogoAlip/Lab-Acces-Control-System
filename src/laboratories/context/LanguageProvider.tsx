import { LanguageContext } from "./LanguageContext";
import { ReactNode, useState } from "react";
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState("Español");
  const LanguageChager = (ln: string) => {
    setLanguage(ln);
  };
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <LanguageContext.Provider value={{ language, LanguageChager }}>
      {children}
    </LanguageContext.Provider>
  );
};
