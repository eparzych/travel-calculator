import React from 'react';
import { makeStyles, withStyles } from '@mui/styles';

const useStyles = makeStyles({
    addTrip:{
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '100%',
        backgroundColor: '#253053'

    }
})

export default function AddTrip(){

    const classes = useStyles();
    return(
        <div className={classes.addTrip}>
<p>testttttt</p>
        </div>
    )
}
