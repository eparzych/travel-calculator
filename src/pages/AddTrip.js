import React from 'react';
import { makeStyles} from '@mui/styles';
import { Container, Paper } from '@mui/material';
import AddTripForm from "../components/AddTripForm";
import { brown } from '@mui/material/colors';


const useStyles = makeStyles(theme => ({
    appMain: {
        height: '100vh',
        padding: '5vh 0',
        backgroundImage: "url('https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413_960_720.jpg')"
    },
}))

export default function AddTrip(){

    const classes = useStyles();

    return(
        <div className={classes.appMain}>
            <Container>
                <Paper sx={{height: "90vh", background: brown[50]}} elevation={4} padding={15}>                
                    <AddTripForm />
                </Paper>
            </Container>
        </div>
    )
}
