import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './themeContext';
import ThemeToggle from './themeToggle';
import './App.css';

const AppContent = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className={isDark ? 'app dark' : 'app light'}>
      <h1>Hello, Anurag!</h1>
      <ThemeToggle />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
