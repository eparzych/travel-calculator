import React from 'react';
import { makeStyles} from '@mui/styles';
import { brown } from '@mui/material/colors';
import { Container, Paper } from '@mui/material';
import Routing from './Routing';

const useStyles = makeStyles(theme => ({

    appMain: {
        height: '100vh',
        padding: '5vh',
        backgroundImage: "url('https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413_960_720.jpg')",
        '& .MuiFormControl-root': {
            width: '100%',
            margin: theme.spacing(1, 0, 1, 0),
        },
        '& h1': {
            textTransform: 'upperCase',
            margin: theme.spacing(2, 0, 5),
            fontSize: '45px',
            fontWeight: "600",
        },
        '& h2': {
            textTransform: 'upperCase',
            fontSize: "20px"
        },
        '& p': {
            marginLeft: theme.spacing(5),
            fontSize: '20px'
        },
        '& p span': {
            textTransform: 'upperCase',
            fontSize: '22px',
            fontWeight: "600",
        },
        '& .imgCard': {
            width: '100%',
            height: '6.5rem',
        }
    },
}))

export default function PageContainer(){

    const classes = useStyles();

    return(
        <div className={classes.appMain}>
            <Container>
                <Paper sx={{height: "90vh", background: brown[50]}} elevation={4}>
                    <Routing/>
                </Paper>
            </Container>
        </div>
    )
}
