import React, { createContext, useState } from 'react';
import { translations } from '../data/translations';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr');

  const t = (key) => {
    // Navigue dans l'objet translations
    const keys = key.split('.');
    let result = translations[language];
    for (const k of keys) {
      result = result[k];
      if (!result) {
        console.warn(`Translation key "${key}" not found for language "${language}"`);
        return key;
      }
    }
    return result;
  };

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
