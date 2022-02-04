import React, {useState} from 'react';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
// import DatePicker from '@mui/lab/DatePicker';

export const expenceCategories = [
    "transport",
    "accomodation",
    "ticket",         
    "food",
    "other"
]

export default function Expences(props) {
    const { expences, setExpences } = props;

   const handleCommit = (e) => {
    setExpences(expences.map(expence => {
        if (expence.id == e.id) {
            return { ...expence, [e.field]:e.value }
        } else {
            return expence
        }
    }))
}

    const handleDeleteClick = (id) => (event) => {
        let newData = expences.filter(expence => expence.id != id);
        setExpences(newData);
    };

    // const handleDateChange = (id, name, value) => {
    //     setExpences(expences.map(expence => {
    //         if (expence.id == id) {
    //             return { ...expence, [name]:value }
    //         } else {
    //             return expence
    //         }
    //     }))
    //     console.log(expences)
    // }


    const columns = [
        { 
            field: 'date', 
            headerName: 'Date', 
            editable: true, 
            type: 'date',
            width: 180,
        //     renderCell: (params) =>
        //         <DatePicker
        //             value={params.value}
        //             // onChange={value => {handleDateChange(params.id, "date", value)}}
        //             renderInput={(params) => <TextField {...params} />} 
        //     />
        },
        {
            field: 'categoryId',
            headerName: 'Category',
            width: 220,
            editable: true,
            type: 'singleSelect',
            valueOptions: expenceCategories,
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 400,
            editable: true,
        },
        {
            field: 'cost',
            headerName: 'Cost [zł]',
            type: 'number',
            width: 170,
            editable: true,
        },
        {
            field: 'actions',
            headerName: 'Delete',
            type: 'actions',
            width: 100,
            getActions: ({id}) => [
                <GridActionsCellItem
                    icon={<DeleteIcon />}
                    label="Delete"
                    onClick={handleDeleteClick(id)}
                    color="inherit"
                />
            ]
        }
    ];


    return (
        <div style={{height: "350px"}}>
            <DataGrid 
                onCellEditCommit = {handleCommit}
                rows={expences}
                rowHeight= {35}
                columns={columns}
                pageSize={25}
                disableSelectionOnClick
            /> 
        </div>
    )
}
