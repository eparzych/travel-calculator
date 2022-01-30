import React, { useState } from 'react';

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

export function Form(props){

    return (
        <form>
            {props.children}
        </form>
    )
}
