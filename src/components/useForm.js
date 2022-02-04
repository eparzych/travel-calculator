import React, { useState } from 'react';

export function useForm(initialFValues){

    const [values, setValues] = useState(initialFValues);
    const [ errors, setErrors ] = useState({});

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

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        handleDateChange,
    }
}

export function Form(props){

    return (
        <form>
            {props.children}
        </form>
    )
}
