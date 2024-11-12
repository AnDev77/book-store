import React, { useContext, useState } from 'react';
import Home from './pages/home'
import Layout from './components/layout/layout';
import { GlobalStyle } from './style/global';
import {ThemeProvider } from 'styled-components';
import { dark, getTheme, light, ThemeName } from './style/theme';
import ThemeSwitcher from './components/header/ThemeSwitcher';
import { BookStoreThemeProvider, ThemeContext } from './context/themeContext';

function App() {
  const themeName = useContext(ThemeContext);
  return (
    <BookStoreThemeProvider>
        <Layout>
          <Home/>
        </Layout>
    </BookStoreThemeProvider>
    
      
    
    
  );
}

export default App;
