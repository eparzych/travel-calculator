import React from 'react';
import { Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import { useForm, Form } from '../useForm';
import Controls from "../Controls/Controls";
import * as expencessCategory from "./expencessCategory";

const initialFValues = {
    id: 0,
    categoryId: '',
    nameExpense: '',
    cost: '',
}

export default function Expences(){

    const { 
        values, 
        setValues, 
        handleInputChange,
        resetForm
    } = useForm(initialFValues);

    return(
        <Form>
            <Grid container>
                <Grid item xs={4}>
                    <Controls.Select
                            label="Category"
                            name="categoryId"
                            value={values.categoryId}
                            onChange = {handleInputChange}
                            options={expencessCategory.getExpencessCategory()} />
                </Grid>
                <Grid item xs={4}>
                    <Controls.Input
                                label="Name Expense"
                                name="nameExpense"
                                value={values.nameExpense}
                                onChange = {handleInputChange} />
                
                </Grid>
                <Grid item xs={4}>
                    <Controls.Input
                                    label="Cost"
                                    name="cost"
                                    value={values.cost}
                                    onChange = {handleInputChange} />
                </Grid>
            </Grid>
        </Form>
    )
}
