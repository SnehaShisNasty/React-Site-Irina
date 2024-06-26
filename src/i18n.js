import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "./locales/en/translation.json"
import uaTranslation from "./locales/ua/translation.json"

const resources = {
  en: {
   translation: enTranslation
  },
  ua: {
    translation: uaTranslation
  }
  }

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
  resources,
  fallbackLng: 'en',
  interpolation: {
    escapeValue:false
  }
})

export default i18n
