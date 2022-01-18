import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function ExpencesCategory() {
  const [category, setCategory] = useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
        <Select
            fullWidth
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={handleChange}
        >
            <MenuItem value="transport">Transport</MenuItem>
            <MenuItem value="accomodation">Accomodation</MenuItem>
            <MenuItem value="ticket">Ticket</MenuItem>          
            <MenuItem value="food">Food</MenuItem>
            <MenuItem value="other">Other</MenuItem>
        </Select>
  );
}