import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/lib/theme'; // Adjust the path if needed
import "./global.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='bg-default'>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
