import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Grid, Box, Button } from '@mui/material';
import { spacing } from '@mui/system';
import { API } from "../config";
import TourCard from "../components/TourCard";

export default function Home(){

    const [trips, setTrips] = useState([]);

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
    <Grid container columnSpacing={2} padding={5}>
        <Grid item xs={12} display="flex" justifyContent="center" >
            <h1>Welcome to Travel Calculator!</h1>
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center" marginBottom={5}>
            <Button xs={{pb: 1}} component={Link} to="/add" variant="contained" color="primary" size="large">
                Create Travel
            </Button>
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="flexStart" flexWrap="wrap" height="calc(90vh - 290px)" overflow="auto">

                {trips.map(trip =>
                    <Grid item xs={3} padding={1} >
                        <TourCard 
                            key={trip.id} 
                            trip={trip} />
                    </Grid>
                )}

        </Grid>



     </Grid>
 )
}