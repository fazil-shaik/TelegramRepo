import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useState } from 'react';

export default function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({ palette: { mode: darkMode ? 'dark' : 'light' } });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  );
}
