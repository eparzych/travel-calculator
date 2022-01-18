import React from 'react';
import { Grid, TextField, Button } from '@mui/material';
import { useForm, Form } from './useForm';
import Controls from "../components/Controls/Controls";
import Box from '@mui/material/Box';
import DatePicker from '@mui/lab/DatePicker';

const initialFValues = {
    id: 0,
    tourName:'',
    city:'',
    country: '',
    startDate: new Date(),
    endDate: new Date(),
}

export default function AddTripForm(){
    
    const { 
        values, 
        setValues, 
        handleInputChange,
        handleDateChange,
        resetForm
    } = useForm(initialFValues);

    return (
        <Form>
            <Grid container columnSpacing={2} >
                <Grid item xs={12}>
                    <h1>New Travel</h1>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Tour name"
                        name="tourName"
                        value={values.tourName}
                        onChange = {handleInputChange} />
                    <TextField
                        label="City"
                        name="city"
                        value={values.city} 
                        onChange={handleInputChange} />
                    <TextField
                        label="Country"
                        name="country"
                        value={values.country} 
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>

                        <DatePicker
                            label="Start date"
                            value={values.startDate}
                            onChange={value => handleDateChange("startDate", value)}
                            renderInput={(params) => <TextField {...params} />} 
                        />
                            <DatePicker
                                label="End date"
                                value={values.endDate}
                                onChange={value => handleDateChange("endDate", value)}
                                renderInput={(params) => <TextField {...params} />} 
                            />

                </Grid>
                <Grid item xs={5}></Grid>
                <Grid item xs={2}>
                    <Box sx={{ marginY: 3 }}>
                        <Button variant="contained"
                                size="large"
                                // href="#text-buttons"
                                // type="submit"
                        >
                            Create Travel
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={5}></Grid>
            </Grid>
        </Form>
    )
}

