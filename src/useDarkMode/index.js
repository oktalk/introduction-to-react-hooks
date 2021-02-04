import { useEffect, useState } from 'react'

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'dark') {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return {
    theme,
    toggleTheme,
  }
}

export const DarkModeExample = () => {
  const { theme, toggleTheme } = useDarkMode()
  return (
    <button type="button" onClick={toggleTheme}>
      Switch theme {theme}
    </button>
  );
}