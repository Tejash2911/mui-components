import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpBackend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

// i18n initialization
i18n
  .use(HttpBackend) // load translations via HTTP (from /public/locales)
  .use(LanguageDetector) // detect user language (localStorage, navigator, etc.)
  .use(initReactI18next) // pass i18n instance to react-i18next
  .init({
    fallbackLng: 'en', // default language
    supportedLngs: ['en', 'es', 'gu'], // declare supported languages
    ns: ['translation'], // namespaces (can add more like "auth", "dashboard")
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false // React already escapes values
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json' // where translation files live
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'] // save user language in localStorage
    },
    react: {
      useSuspense: true // enable suspense (loading translations)
    }
  })

export default i18n
