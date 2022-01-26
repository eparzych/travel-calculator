import React from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import plLocale from 'date-fns/locale/pl';
import PageContainer from "./PageContainer";

import { teal, brown } from '@mui/material/colors';

const theme = createTheme({
  palette: {
      primary: {
          light: teal[50],
          main: brown[500],
          dark: teal[900],
          contrastText: brown[50],
      }
  },
})

function App() {

  return (
    <ThemeProvider theme={theme}> 
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={plLocale}>
        <PageContainer/>
      </LocalizationProvider>
    </ThemeProvider>           
  );
}

export default App;
