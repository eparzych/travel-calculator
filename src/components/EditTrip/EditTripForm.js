import React, { useState } from 'react';
import { Grid, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useForm, Form } from '../useForm';
import Controls from "../Controls/Controls";
import Expences from "./Expences";

const initialFValues = {
    id: 0,
    tourName:'Dolomity',
    city:'Passo del Tonale',
    country: 'Italy',
    startDate: new Date(),
    endDate: new Date(),
    sum: '0',
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

    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h1" component="h1" marginLeft={5}>
                    {values.tourName}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="subtitle1" component="p" marginLeft={5}>
                    <span>City:</span> {values.city}
                </Typography>
                <Typography variant="subtitle1" component="p" marginLeft={5}>
                    <span>Country:</span> {values.country}
                </Typography>
                <Typography variant="subtitle1" component="p" marginLeft={5}>
                    <span>Start date:</span> {values.startDate.toString()}
                </Typography>
                <Typography variant="subtitle1" component="p" marginLeft={5}>
                    <span>End date:</span> {values.endDate.toString()} 
                </Typography>
            </Grid>
            <Grid item xs={12} marginY={4.5}>
                <Expences expences={values.expences}/>
            </Grid> 

            {/* <Grid item xs={12} marginY={4.5}>
                {values.expences.map(expense => <Expences />)}
            </Grid>
            <Grid item xs={8.5}/>
            <Grid item xs={3.5} marginBottom={3}>
                <Typography variant="subtitle1" component="p">
                    <span>Sum: {initialFValues.sum}</span>
                </Typography>
            </Grid> */}


            <Grid item xs={5} />
            <Grid item xs={7}>
                <Controls.Button sx={{ }}
                    type="submit"
                    text="Save travel"
                    color="primary" />
            </Grid>
            <Grid item xs={5} />
        </Grid>
    )
}

