import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Grid, Box, Button } from '@mui/material';
import Expences from "../components/EditTrip/Expences";
import Chart from "../components/Chart";
import { API } from "../config";

function sumExpences (expences){
    let sum = expences.reduce((prev, curr) => {
        return prev + curr.cost;
    }, 0)
    return sum;
}

const localDate = (date) => {
    if (date != "") {
        date = new Date(date).toLocaleDateString()
    }
    return date;
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
            data.expences.forEach(expence => expence.date = new Date(expence.date));
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

    const getNewExpenceId = () => {
        let newId = 0;
        
        if(values.expences.length != 0){
            let max = values.expences[0].id;
            
            for (let i = 1; i < values.expences.length; i++) {
                if(values.expences[i].id > max){
                    max = values.expences[i].id;
                }
            }
            newId = max +1;
        }
        return newId;
    }

    const addExpence = () => {
        setExpences([...values.expences,  
            {
                id: getNewExpenceId(),
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
        <Grid container height={100} padding={5} columnSpacing={4} >
            <Grid item  xs={12} sm={7}>
                <h1>{values.tourName}</h1>
                <p>
                    <span>City:</span> {values.city}
                </p>
                <p>
                    <span>Country:</span> {values.country}
                </p>
                <p>
                    <span>Start date:</span> { localDate(values.startDate) }
                </p>
                <p>
                    <span>End date:</span> { localDate(values.endDate) } 
                </p>
            </Grid>
            <Grid item xs={12} sm={5}>
                <Chart expences = { values.expences } />
            </Grid>
            <Grid item xs={12} sm={8} display="flex" justifyContent="flex-end" sx={{ marginY:1.5}}>
                <h2>Total Cost: {values.totalCost} zł</h2>
            </Grid>
            <Grid item xs={12} sm={4} display="flex" justifyContent="flex-end" >
                <Button variant="contained" size="medium" onClick={addExpence}>
                    Add expence
                </Button>
            </Grid>
            <Grid item xs={12} marginY={4.5}   >
                <Expences expences={values.expences} setExpences={setExpences} />
            </Grid> 
            <Grid item xs={12} >
                <Box sx={{ marginY: 1.5 }} display="flex" justifyContent="center" alignItems="center">
                    <Button variant="contained" size="large" onClick={buttonSubmit}>
                        Save Travel
                    </Button>
                </Box>
            </Grid>
        </Grid>
    )
}
