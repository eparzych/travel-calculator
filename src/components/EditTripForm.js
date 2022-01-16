import React from 'react';
import { Grid, TextField } from '@mui/material';
import { useForm, Form } from './useForm';
import Controls from "../components/Controls/Controls";
import Box from '@mui/material/Box';

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

export default function EditTripForm(){
    

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
                    <h1>EDIT TRIP</h1>
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
                </Grid>
                <Grid item xs={6}
                ></Grid>
                <Grid item xs={6}>
                    <Box sx={{ 
                        dispaly: "flex",
                        alignItems: "flex-end",
                        justifyContent: "center"
                        }}
                        margin={1.5}>
                        <Controls.Button
                            type="submit"
                            text="Create travel"
                            color="primary" />
                    </Box>
                </Grid>
            </Grid>
        </Form>
    )
}

