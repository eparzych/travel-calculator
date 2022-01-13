import React, { useState, useEffect } from 'react';
import AddTripForm from "./AddTripForm";
import { Grid, TextField, makeStyles, FormControl, RadioGroup, FormControlLabel, Ratio, FormLabel } from '@mui/styles';
import { Paper } from '@mui/material';


const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function AddTrip(){

    const classes = useStyles();

    return(
        <Paper className={classes.pageContent}>
            <AddTripForm />
        </Paper>
    )
}
