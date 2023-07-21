// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Charger les fichiers de traduction pour chaque langue
const resources = {
  en: {
    translation: require('./locales/en.json'),
  },
  fr: {
    translation: require('./locales/fr.json'),
  },
};

i18n.use(initReactI18next).init({
  fallbackLng: 'fr', // Assurez-vous que 'fr' est défini comme langue par défaut
  debug: true, // Active les messages de débogage (à désactiver en production)
  resources,
});

export default i18n;
