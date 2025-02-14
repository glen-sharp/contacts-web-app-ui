import React from "react";

import ContactsTable from "./Table/Table";
import ContactInput from "./ContactInput/ContactInput";

export default function ContactsPage() {
    return (
    <div>
        <div>
            <ContactInput/>
        </div>
        <div>
            <ContactsTable/>
        </div>
    </div>
);
};