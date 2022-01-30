import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Grid, Button } from '@mui/material';
import { API } from "../config";

export default function Home(){

    const [trips, setTrips] = useState()

    useEffect(() => {
        fetch(`${API}/trips`)
        .then(response => {
            if (response.ok)
                return response.json();
            else
                throw new Error('Błąd sieci!');
        }).then(data => {
            console.log(data);
            if(data) {
                setTrips(data);
            }
            })
        .catch(error => {
            console.log(error);
            });
    }, []);

 return (
    <Grid container columnSpacing={0} padding={5} >
        <Grid item xs={12} display="flex" justifyContent="center" >
            <h1>Welcome to Travel Calculator!</h1>
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center" marginY={3}>
            <Button component={Link} to="/add" variant="contained" color="primary" size="large">
                Create Travel
            </Button>
        </Grid>
     </Grid>
 )
}