import React from "react";
import { useState } from "react";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import './ContactInput.css'
import { AddContact } from "../../utils/serverRequests";

export default function ContactInput() {
    const [forenameValue, setForenameValue] = useState("")
    const [surnameValue, setSurnameValue] = useState("")
    const [phoneValue, setPhoneValue] = useState("")
    const [addressValue, setAddressValue] = useState("")

    const [isForenameNumValue, setIsFornameNumValue] = useState("")
    const [isSurnameNumValue, setIsSurnameNumValue] = useState("")
    const [isPhoneNumValue, setisPhoneNumValue] = useState("")

    function add_contact() {
        var contact = {
            forename: forenameValue,
            surname: surnameValue,
            address: addressValue,
            phone_number: Number(phoneValue)
        };

        AddContact(contact);

        setForenameValue("");
        setSurnameValue("");
        setPhoneValue("");
        setAddressValue("");
    }

    return (
        <div className="contact-input-wrapper">
            <div>
                <Box
                    component="form"
                    sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="forename-input"
                        label="Forename"
                        variant="filled"
                        value={forenameValue}
                        onChange={(e) => {
                            setForenameValue(e.target.value);
                            setIsFornameNumValue(!isNaN(+e.target.value));
                        }}
                        error={isForenameNumValue && forenameValue ? true : false}
                        helperText={
                            isForenameNumValue && forenameValue ? "Input must be string" : ""
                        }
                        onKeyDown={(e) => {
                            if (forenameValue && surnameValue && phoneValue && addressValue && e.key === "Enter" && !isForenameNumValue && !isSurnameNumValue && isPhoneNumValue)
                                add_contact()
                        }}
                    />
                    <TextField
                        id="surname-input"
                        label="Surname"
                        variant="filled"
                        value={surnameValue}
                        onChange={(e) => {
                            setSurnameValue(e.target.value);
                            setIsSurnameNumValue(!isNaN(+e.target.value));
                        }}
                        error={isSurnameNumValue && surnameValue ? true : false}
                        helperText={
                            isSurnameNumValue && surnameValue ? "Input must be string" : ""
                        }
                        onKeyDown={(e) => {
                            if (forenameValue && surnameValue && phoneValue && addressValue && e.key === "Enter" && !isForenameNumValue && !isSurnameNumValue && isPhoneNumValue)
                                add_contact()
                        }}
                    />
                    <TextField
                        id="phone-number-input"
                        label="Phone Number"
                        variant="filled"
                        value={phoneValue}
                        onChange={(e) => {
                            setPhoneValue(e.target.value);
                            setisPhoneNumValue(!isNaN(+e.target.value));;
                        }}
                        error={!isPhoneNumValue && phoneValue ? true : false}
                        helperText={
                            !isPhoneNumValue && phoneValue ? "Input must be numeric" : ""
                        }
                        onKeyDown={(e) => {
                            if (forenameValue && surnameValue && phoneValue && addressValue && e.key === "Enter" && !isForenameNumValue && !isSurnameNumValue && isPhoneNumValue)
                                add_contact()
                        }}
                    />
                    <TextField
                        id="address-input"
                        label="Address"
                        variant="filled"
                        value={addressValue}
                        onChange={(e) => setAddressValue(e.target.value)}
                        onKeyDown={(e) => {
                            if (forenameValue && surnameValue && phoneValue && addressValue && e.key === "Enter" && !isForenameNumValue && !isSurnameNumValue && isPhoneNumValue)
                                add_contact()
                        }}
                    />
                </Box>
            </div>
            <div>
                <Stack direction="row" spacing={2} marginTop={2} marginLeft={4}>
                    <Button
                    variant="contained"
                    onClick={() => add_contact()}
                    disabled={forenameValue && surnameValue && phoneValue && addressValue && !isForenameNumValue && !isSurnameNumValue && isPhoneNumValue ? false : true}
                    >Add Contact</Button>
                </Stack>
            </div>
        </div>
    )
};