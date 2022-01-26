import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Grid, Button } from '@mui/material';

export default function Home(){

 return (
    <Grid container columnSpacing={0} padding={5} >
        <Grid item xs={12} display="flex" justifyContent="center" >
            <h1>Witaj na stronie Travel Calculator!</h1>
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center" marginY={3}>
            <Button component={Link} to="/add" variant="contained" color="primary" size="large">
                Create Travel
            </Button>
        </Grid>
     </Grid>
 )
}