import React, { useState } from 'react';
import { Grid, TextField, Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useForm, Form } from '../useForm';
import Expences from "./Expences";


const initialFValues = {
    id: 0,
    tourName:'Dolomity',
    city:'Passo del Tonale',
    country: 'Italy',
    startDate: new Date(),
    endDate: new Date(),
    expences: [
        {
            id: 0,
            date: new Date(),
            categoryId: '',
            name: '',
            cost: ''
        },
        {
            id: 1,
            date: new Date(),
            categoryId: '',
            name: '',
            cost: ''
        },        {
            id: 2,
            date: new Date(),
            categoryId: '',
            name: '',
            cost: ''
        },
    ]
}


export default function EditTripForm(){

    const [ values, setValues ] = useState(initialFValues);

    const setExpences = (value) => {
        setValues({
            ...values,
            expences: value
        })
    }

    return (
    <Form>
        <Grid container padding={5} columnSpacing={4}>
            <Grid item xs={12}>
                <h1>{values.tourName}</h1>
            </Grid>
            <Grid item xs={12}>
                <p>
                    <span>City:</span> {values.city}
                </p>
                <p>
                    <span>Country:</span> {values.country}
                </p>
                <p>
                    <span>Start date:</span> {values.startDate.toString()}
                </p>
                <p>
                    <span>End date:</span> {values.endDate.toString()} 
                </p>
            </Grid>
            <Grid item xs={12} marginY={4.5}>
                <Expences expences={values.expences} setExpences={setExpences}/>
            </Grid> 
            <Grid item xs={12} >
                <Box sx={{ marginY: 3 }} display="flex" justifyContent="center" alignItems="center">
                    <Button variant="contained"
                            size="large"
                            // href="#text-buttons"
                            // type="submit"
                    >
                        Save Travel
                    </Button>
                </Box>
            </Grid>
        </Grid>
    </Form>
    )
}

