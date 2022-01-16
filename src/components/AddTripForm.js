import React from 'react';
import { Grid, TextField } from '@mui/material';
import { useForm, Form } from './useForm';
import Controls from "../components/Controls/Controls";
import Box from '@mui/material/Box';
import DatePicker from "./DatePicker"

const initialFValues = {
    id: 0,
    tourName:'',
    city:'',
    country: '',
    startDate: new Date(),
    endDate: new Date(),
}

const inputProps = {
    step: 300,
  };

export default function AddTripForm(){
    
    const { 
        values, 
        setValues, 
        handleInputChange,
        resetForm
    } = useForm(initialFValues);

    return (
        <Form>
            <Grid container>
                <Grid item xs={12}>
                    <h1>New Travel</h1>
                </Grid>
                <Grid item xs={6}>
                    <Controls.Input
                        label="Tour name"
                        name="tourName"
                        value={values.tourName}
                        onChange = {handleInputChange} />
                    <Controls.Input 
                        label="City"
                        name="city"
                        value={values.city} 
                        onChange={handleInputChange} />
                    <Controls.Input 
                        label="Country"
                        name="country"
                        value={values.country} 
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <DatePicker />
                    <DatePicker />
                </Grid>
                <Grid item xs={5}></Grid>
                <Grid item xs={2}>
                    <Box sx={{ marginY: 3 }}>
                        <Controls.Button
                            type="submit"
                            text="Create travel"
                            color="primary" />
                    </Box>
                </Grid>
                <Grid item xs={5}></Grid>
            </Grid>
        </Form>
    )
}

