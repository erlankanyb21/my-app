import React, { useEffect, useState } from 'react';
import { getContacts } from '../../api/getData';
import { requester } from './requester';
import './Admin.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contacts = () => {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        getContacts()
            .then((data) => setContacts(data.data))
    }, []);

    const handleDelete = (id) => {
        requester.delete(`/atelier/contacts/item/${id}`)
            .then((res) => {
                toast.success('Contact deleted successfully');
                setContacts(contacts.filter((contact) => contact.id !== id));
            })
            .catch((error) => {
                toast.error(error);
            });
    };

    return (
        <div className="container">
            <h3>Contacts</h3>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <tr key={contact.id}>
                            <td>{contact.id}</td>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.message}</td>
                            <td>
                                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(contact.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Contacts;
