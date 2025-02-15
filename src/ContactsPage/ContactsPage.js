import React from "react";
import { useState, useEffect } from "react";

import ContactsTable from "./Table/Table";
import ContactInput from "./ContactInput/ContactInput";
import HeaderBar from "./HeaderBar/HeaderBar";
import { GetContacts } from "../utils/serverRequests";

export default function ContactsPage() {

    const [contacts, setContacts] = useState([])

    async function getData() {
        const response = await GetContacts()
        const data = await response.json()
        setContacts(data)
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <div>
                <HeaderBar/>
            </div>
            <div>
                <ContactInput
                fetchContacts={getData}
                />
            </div>
            <div>
                <ContactsTable
                contacts={contacts}
                fetchContacts={getData}
                />
            </div>
        </div>
    );
};