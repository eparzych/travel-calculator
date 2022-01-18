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
        resetForm
    }
}

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '100%',
            margin: theme.spacing(0, 0, 3, 0),
        },
        '& h1': {
            textTransform: 'upperCase',
            margin: theme.spacing(6, 6, 4),
            fontSize: '52px',
            fontWeight: "500",
        },
        '& p': {
            marginLeft: theme.spacing(12),
            fontSize: '20px'
        },
        '& p span': {
            textTransform: 'upperCase',
            fontSize: '22px',
            fontWeight: "600",
        },
    },
}))

export function Form(props){

    const classes = useStyles();

    return (
        <form className={classes.root}>
            {props.children}
        </form>
    )
}