"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Switch, Container, Typography } from "@mui/material";
import { useState } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({ palette: { mode: darkMode ? "dark" : "light" } });

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container style={{ textAlign: "center", marginTop: "20px" }}>
            <Typography variant="h4">Telegram Login</Typography>
            <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
            {children}
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
