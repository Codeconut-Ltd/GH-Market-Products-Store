import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import de from "languages/de-DE"
import en from "languages/en-US"

/**
 * Language/Locale management.
 */
const config = {
  resources: {
    de: { translations: de },
    en: { translations: en },
  },
  lng: navigator.language,
  fallbackLng: "en",
  debug: false,
  ns: ["translations"],
  defaultNS: "translations",
  interpolation: {
    escapeValue: false,
    formatSeparator: ",",
  },
  react: {
    useSuspense: true,
  },
}

i18n.use(initReactI18next).init(config)

export default i18n
