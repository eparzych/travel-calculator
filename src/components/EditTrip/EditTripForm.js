import React from 'react';
import { Grid, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material';
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
    day: new Date(),
    categoryId: '',
    nameExpense: '',
    cost: '',
    sum: '0',
}

export default function EditTripForm(){

    return (
        <Form>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h1" component="h1" marginLeft={5}>
                        {initialFValues.tourName}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="subtitle1" component="p" marginLeft={5}>
                        <span>City:</span> {initialFValues.city}
                    </Typography>
                    <Typography variant="subtitle1" component="p" marginLeft={5}>
                        <span>Country</span>: {initialFValues.country}
                    </Typography>
                    <Typography variant="subtitle1" component="p" marginLeft={5}>
                        <span>Start date:</span>
                    </Typography>
                    <Typography variant="subtitle1" component="p" marginLeft={5}>
                        <span>End date:</span>
                    </Typography>
                </Grid>
                <Grid item xs={12} marginY={4.5}>
                    <Expences />
                </Grid>
                <Grid item xs={8.5}/>
                <Grid item xs={3.5} marginBottom={3}>
                    <Typography variant="subtitle1" component="p">
                        <span>Sum: {initialFValues.sum}</span>
                    </Typography>
                </Grid>
                <Grid item xs={5} />
                <Grid item xs={7}>
                    <Controls.Button sx={{ }}
                        type="submit"
                        text="Save travel"
                        color="primary" />
                </Grid>
                <Grid item xs={5} />
            </Grid>
        </Form>
    )
}

