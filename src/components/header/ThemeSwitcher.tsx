import React, { useContext } from 'react'
import { ThemeName } from '../../style/theme'
import { ThemeContext } from '../../context/themeContext';

const ThemeSwitcher = () => {
    const {themeName, handleTheme} = useContext(ThemeContext); 
    
    return (
    <button onClick={handleTheme}>{themeName}</button>
  )
}

export default ThemeSwitcher
