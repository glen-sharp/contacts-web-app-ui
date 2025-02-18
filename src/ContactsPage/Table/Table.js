import React from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from "@mui/material/IconButton";

import { DeleteContact } from "../../utils/serverRequests";
import './Table.css';

export default function ContactsTable({ contacts, fetchContacts }) {

    const columns = [
        {"id": "id", "name": "ID"},
        {"id": "name", "name": "Name"},
        {"id": "phone_number", "name": "Phone Number"},
        {"id": "address", "name": "Address"},
    ]

    async function deleteContact(id) {
        await DeleteContact(id);
        fetchContacts();
    }

    return (
        <Paper sx={{width: '62rem', marginLeft: '5%'}}>
            <TableContainer component={Paper}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            {columns.map((column)=>(
                                <TableCell style={{backgroundColor: '#c6c6c6'}} key={column.id}>{column.name}</TableCell>
                            ))}
                            <TableCell style={{backgroundColor: '#c6c6c6'}}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {contacts.contact_array && contacts.contact_array.map((val, key) => (
                            <TableRow key={key}>
                                <TableCell style={{backgroundColor: '#f2f2f2', width: '5%'}} align="left">{val.id}</TableCell>
                                <TableCell style={{backgroundColor: '#f2f2f2', width: '35%'}} align="left">{val.forename}&nbsp;{val.surname}</TableCell>
                                <TableCell style={{backgroundColor: '#f2f2f2', width: '14%'}} align="left">{val.phone_number}</TableCell>
                                <TableCell style={{backgroundColor: '#f2f2f2', width: '40%'}} align="left">{val.address}</TableCell>
                                <TableCell
                                style={{backgroundColor: '#f2f2f2', width: '5%', padding: '0.5rem'}}
                                align="left">
                                    <IconButton
                                    onClick={() => deleteContact(val.id)}
                                    >
                                        <DeleteForeverIcon fontSize="large"/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};