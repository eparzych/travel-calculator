import React from 'react';
import { makeStyles} from '@mui/styles';
import { brown } from '@mui/material/colors';
import { Container, Paper } from '@mui/material';
import Routing from './Routing';

const useStyles = makeStyles(theme => ({
    status: {
        danger: '#FF72B1',
      },

    appMain: {
        paddingTop: '5vh',
        paddingBottom: '5vh',
        height: "100%",
        backgroundImage: "url('https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413_960_720.jpg')",
        '& .MuiFormControl-root': {
            width: '100%',
            margin: theme.spacing(1, 0, 1, 0),
        },
        '& .MuiOutlinedInput-root.MuiInputBase-root.MuiInputBase-colorPrimary.Mui-error': {
            background: '#f8dddf'
        },
        '& .MuiFormHelperText-root.Mui-error' :{
            // background: '#e26971',
            fontSize: "16px",
            fontWeight: "500",
            color: "#e26971",
        },

        '& h1': {
            textTransform: 'upperCase',
            margin: theme.spacing(2, 0, 5),
            fontSize: '50px',
            fontWeight: "600",
            textOverflow: "ellipsis",
            overflow: "hidden"
        },
        '& h2': {
            textTransform: 'upperCase',
            fontSize: "20px",
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap"
        },
        '& p': {
            marginLeft: theme.spacing(5),
            fontSize: '20px',
            textOverflow: "ellipsis",
            overflow: "hidden"
        },
        '& p span': {
            textTransform: 'upperCase',
            fontSize: '22px',
            fontWeight: "600",
            textOverflow: "ellipsis",
            overflow: "hidden"
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
            <Container >
                <Paper sx={{height: "90vh", background: brown[50], overflow: "auto"}} elevation={4} >
                    <Routing/>
                </Paper>
            </Container>
        </div>
    )
}
