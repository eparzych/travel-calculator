import React from 'react';
import './App.css';
import { createTheme } from '@mui/material';
import { makeStyles, ThemeProvider } from '@mui/styles';
import AddTrip from "../components/AddTrip";

const theme = createTheme({
  palette: {
    primary: {
      main: "#333996",
      light: '#3c44b126'
    },
    secondary: {
      main: "#f83245",
      light: '#f8324526'
    },
    background: {
      default: "#f4f5fd"
    },
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    }
  },
  props:{
    MuiIconButton:{
      disableRipple:true
    }
  }
})

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
