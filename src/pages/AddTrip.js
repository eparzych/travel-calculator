import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, TextField, Button } from '@mui/material';
import { useForm, Form } from '../components/useForm';
import DatePicker from '@mui/lab/DatePicker';
import { API } from '../config';

const initialFValues = {
    id: 0,
    tourName:'',
    city:'',
    country: '',
    startDate: new Date(),
    endDate: new Date(),
    expences: []
}

export default function AddTrip(){
    
    const { 
        values, 
        setValues, 
        handleInputChange,
        handleDateChange,
        resetForm,
    } = useForm(initialFValues);

    const navigate = useNavigate();

    const buttonSubmit = (e) => {
        e.preventDefault();

        fetch(`${API}/trips/`, {
            method: "POST",
            body: JSON.stringify(values),            
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            navigate("/edit/" + data.id);
        })
        .catch(error => {
            console.log(error);
        });
    };

    return (
        <Form>
            <Grid container columnSpacing={4} padding={5} >
                <Grid item xs={12} >
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
                <Grid item xs={12} display="flex" justifyContent="center" alignItems="center" marginY= {6}>
                    <Button variant="contained"
                            size="large"
                            onClick={ buttonSubmit }
                    >
                        Create Travel
                    </Button>
                </Grid>
            </Grid>
        </Form>
    )
}
