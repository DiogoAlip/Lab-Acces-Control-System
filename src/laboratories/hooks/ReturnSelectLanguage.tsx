import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { getLanguage } from "./getLanguageAPI";
export const ReturnSelectLenguage = (text: string) => {
  const { language } = useContext(LanguageContext);
  return language === "Español" ? text : getLanguage(text);
};
