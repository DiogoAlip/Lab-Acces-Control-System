import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { getLanguage } from "./getLanguageAPI";
export const GetSelectLenguage = (text: string) => {
  const { language } = useContext(LanguageContext);
  return language === "Español" ? text : getLanguage(text);
};
