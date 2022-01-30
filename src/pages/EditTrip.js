import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Grid, Box, Button } from '@mui/material';
import { useForm, Form } from '../components/useForm';
import Expences from "../components/EditTrip/Expences";
import { API } from "../config";

function sumExpences (expences){
    let sum = expences.reduce((prev, curr) => {
        return prev + curr.cost;
    }, 0)
    return sum;
}

export default function EditTrip(){
    
    const { id } = useParams();
    const navigate = useNavigate();

    const initialFValues = {
        tourName: "",
        city: "",
        country: "",
        startDate: "",
        endDate: "",
        totalCost: 0,
        expences: []
    }

    const [ values, setValues ] = useState(initialFValues);

    useEffect(() => {
        fetch(`${API}/trips/${id}`)
        .then(response => {
            if (response.ok)
                return response.json();
            else
                throw new Error('Błąd sieci!');
        }).then(data => {
            console.log(data);
            if(data) {
                setValues(data);
            }
            })
        .catch(error => {
            console.log(error);
            });
    }, []);

    useEffect(() => {
        let sum = sumExpences(values.expences);
        if (sum != values.totalCost) {
            setValues({...values, totalCost: sum});
        }
    }, [values]);
    
    const setExpences = (value) => {
        setValues({
            ...values,
            expences: value
        })
    }

    const addExpence = () => {
        setExpences([...values.expences,  
            {
                id: values.expences.length,
                date: new Date(),
                categoryId: '',
                name: '',
                cost: 0
            },
        ]) 
    }

    const buttonSubmit = (e) => {
        e.preventDefault();

        fetch(`${API}/trips/${id}`, {
            method: "PUT",
            body: JSON.stringify(values),            
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            navigate("/") ;
        })
        .catch(error => {
            console.log(error);
        });
    };

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
                    <span>Start date:</span> {values.startDate}
                </p>
                <p>
                    <span>End date:</span> {values.endDate} 
                </p>
            </Grid>
            <Grid item xs={8} display="flex" justifyContent="flex-end">
                <h2>Total Cost: {values.totalCost}  </h2>
            </Grid>
            <Grid item xs={4} display="flex" justifyContent="flex-end">
                <Button variant="contained" size="medium" onClick={addExpence}>
                    Add expence
                </Button>
            </Grid>
            <Grid item xs={12} marginY={4.5}>
                <Expences expences={values.expences} setExpences={setExpences}/>
            </Grid> 
            <Grid item xs={12} >
                <Box sx={{ marginY: 3 }} display="flex" justifyContent="center" alignItems="center">
                    <Button variant="contained" size="large" onClick={buttonSubmit}>
                        Save Travel
                    </Button>
                </Box>
            </Grid>
        </Grid>
    </Form>
    )
}
