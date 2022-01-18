import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
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
            <MenuItem value="accomodation">Ticket</MenuItem>          
            <MenuItem value="accomodation">Food</MenuItem>
            <MenuItem value="accomodation">Other</MenuItem>
        </Select>
  );
}