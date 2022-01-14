import React, { useState, useEffect } from 'react';
import { Grid, TextField } from '@mui/material';
import { useForm, Form } from './useForm';
import Controls from "../components/Controls/Controls";


const initialFValues = {
    id: 0,
    tourName:'',
    city:'',
    startDate: new Date(),
    endDate: new Date(),
}

const inputProps = {
    step: 300,
  };

export default function AddTripForm(){
    
    // const  [values, setValues] = useState(initialFValues);

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
                    <h1>NEW TRAVEL</h1>
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
                </Grid>
                <Grid item xs={6}>
                
                    <TextField id="time" type="date" inputProps={inputProps} />
                    <TextField id="time" type="date" inputProps={inputProps} />
{/* 
                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit" />
                        <Controls.Button
                            text="Reset"
                            color="default" />
                    </div> */}
                </Grid>
            </Grid>
        </Form>
    )
}

