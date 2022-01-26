import React, { useState } from 'react';
import { makeStyles } from "@mui/styles";

export function useForm(initialFValues){

    const [values, setValues] = useState(initialFValues);

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    const handleDateChange = (name, value) => {
        setValues({
            ...values,
            [name]:value
        })
    }

    const resetForm = () => {
        setValues(initialFValues);
    }

    return {
        values,
        setValues,
        handleInputChange,
        handleDateChange,
        resetForm,
    }
}

const useStyles = makeStyles(theme => ({

}))

export function Form(props){

    const classes = useStyles();

    return (
        <form className={classes.root}>
            {props.children}
        </form>
    )
}
