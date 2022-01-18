import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField } from '@mui/material';
import DatePicker from "../DatePicker";
import ExpencesCategory from "./ExpencesCategory";

const columns = [
    { 
        field: 'date', 
        headerName: 'Date', 
        editable: true, 
        width: 200,
        renderCell: (params) =>
            <DatePicker
                value=""
                renderInput={(params) => <TextField {...params} />}
            />
    },
    {
        field: 'categoryId',
        headerName: 'Category',
        width: 250,
        editable: true,
        renderCell: (params) =>
        <ExpencesCategory />
    },
    {
        field: 'name',
        headerName: 'Name',
        width: 400,
        editable: true,
    },
    {
        field: 'cost',
        headerName: 'Cost',
        type: 'number',
        width: 200,
        editable: true,
    },
];

export default function Expences(props) {
    const { expences, setExpences } = props;
    
    return (
        <div style={{ height: '400px', width: '100%' }}>
            <DataGrid
                autoHeight
                rows={expences}
                columns={columns}
                pageSize={6}
                disableSelectionOnClick
            /> 
        </div>
    );
}
