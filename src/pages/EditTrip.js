import React from 'react';
import { makeStyles} from '@mui/styles';
import { teal } from '@mui/material/colors';
import { brown } from '@mui/material/colors';
import { red } from '@mui/material/colors';
import { Container, Paper, createTheme, ThemeProvider } from '@mui/material';
import EditTripForm from "../components/EditTripForm";

const theme = createTheme({
    palette: {
        primary: {
            light: teal[50],
            main: brown[500],
            dark: teal[900],
            contrastText: brown[50],
        }
    }
})

const useStyles = makeStyles(theme => ({
    appMain: {
        height: '100vh',
        padding: '5vh',
        backgroundImage: "url('https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413_960_720.jpg')"
    },
}))

export default function EditTrip(){

    const classes = useStyles();

    return(
        <div className={classes.appMain}>
            <Container>
                <ThemeProvider theme={theme}>
                    <Paper sx={{height: "90vh", background: brown[50]}} elevation={4}>                
                        <EditTripForm />
                    </Paper>
                </ThemeProvider>
            </Container>
        </div>
    )
}
