// LanguageContext.js
import React, { createContext, useState, useEffect } from 'react';
import english from '../languages/english.json';
import albanian from '../languages/Albanian.json';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState(english);

  useEffect(() => {
    switch (language) {
      case 'en':
        setTranslations(english);
        break;
      case 'sq':
        setTranslations(albanian);
        break;
      default:
        setTranslations(english);
    }
  }, [language]);

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};