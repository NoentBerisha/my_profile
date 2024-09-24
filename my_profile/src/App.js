// App.js
import React from 'react';
import Main from './main';
import { LanguageProvider } from './Context/LanguageContext';


const App = () => {
  return (
    <LanguageProvider>
    <Main />
    </LanguageProvider>
  );
}

export default App;