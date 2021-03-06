import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en";
import fr from "./fr";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en,
      fr,
    },
    lng: "fr",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

//document.documentElement.lang = newLang;
