import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, TextField } from '@mui/material';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1),
        }
    }
}))

const initialFValues = {
    id: 0,
    title:'',
    city:'',
    startDate: new Date(),
    endDate: new Date(),
    isPermanent: false,
}

export default function AddTripForm(){

    const  [values, setValues] = useState(initialFValues);
    const classes = useStyles();

    const inputProps = {
        step: 300,
      };

    return(
        
        <form className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <TextField 
                        variant="outlined"
                        label="Tour name"
                        value={values.title}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                            variant="outlined"
                            label="City"
                            value={values.city} />
                </Grid>
                <Grid item xs={12}>
                    <TextField id="time" type="date" inputProps={inputProps} />
                </Grid>
            </Grid>
        </form>
    )
}
