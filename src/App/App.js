import React from 'react';
import './App.css';
import { createTheme } from '@mui/material';
import { makeStyles, ThemeProvider } from '@mui/styles';
import AddTrip from "../components/AddTrip";

const theme = createTheme({})

const useStyles = makeStyles({
  appMain: {
    width: '100%'
  }
})

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
        <div className={classes.appMain}>
          <AddTrip />
        </div>
    </ThemeProvider>
  );
}

export default App;
