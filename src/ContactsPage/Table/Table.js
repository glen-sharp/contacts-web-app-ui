import React, { useState, useEffect } from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './Table.css'
import { GetContacts } from "../../utils/serverRequests";

export default function ContactsTable() {

    const columns = [
        {"id": "id", "name": "ID"},
        {"id": "name", "name": "Name"},
        {"id": "phone_number", "name": "Phone Number"},
        {"id": "address", "name": "Address"},
    ]

    const [Contacts, setContacts] = useState([])

    async function getData() {
        const response = await GetContacts()
        const data = await response.json();
        
        setContacts(data)
        return data
    }
    useEffect(() => {
        getData()
    }, [])


    return (
        <Paper sx={{width: '40%', marginLeft: '5%', marginTop: '5%'}}>
            <TableContainer component={Paper}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            {columns.map((column)=>(
                                <TableCell style={{backgroundColor: '#c6c6c6'}} key={column.id}>{column.name}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Contacts && Contacts.map((val, key) => (
                            <TableRow key={key}>
                                <TableCell style={{backgroundColor: '#f2f2f2', width: '10%'}} align="left">{val.id}</TableCell>
                                <TableCell style={{backgroundColor: '#f2f2f2', width: '15%'}} align="left">{val.forename}&nbsp;{val.surname}</TableCell>
                                <TableCell style={{backgroundColor: '#f2f2f2', width: '15%'}} align="left">{val.phone_number}</TableCell>
                                <TableCell style={{backgroundColor: '#f2f2f2', width: '30%'}} align="left">{val.address}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};