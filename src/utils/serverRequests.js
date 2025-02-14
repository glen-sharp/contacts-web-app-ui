function GetContacts() {
    return fetch('http://localhost:8000/contact_details', {
        method: 'get',
    })
    .then(data => {
        return data
    })
    .catch((error) => {
        throw error;
    });
}

function AddContact(contact) {

    return fetch('http://localhost:8000/add_contact', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(contact)
    })
    .then(data => {
        return data
    })
    .catch((error) => {
        throw error;
    });
}

export {
    GetContacts,
    AddContact
}