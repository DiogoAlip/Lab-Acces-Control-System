import { createContext } from "react";
export const LanguageContext = createContext({
  language: "",
  LanguageChager: (ln: string) => {},
});
