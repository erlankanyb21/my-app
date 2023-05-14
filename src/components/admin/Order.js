import React, { useEffect, useState } from 'react';
import { getOrders } from '../../api/getData';
import { requester } from './requester';
import './Admin.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Order = () => {

    const [orders, setorders] = useState([]);
    useEffect(() => {
        getOrders()
            .then((data) => setorders(data.data))
    }, []);

    const handleDelete = (id) => {
        requester.delete(`/atelier/order/item/${id}`)
            .then((res) => {
                toast.success('Order deleted successfully');
                setorders(orders.filter((order) => order.id !== id));
            })
            .catch((error) => {
                toast.error(error);
            });
    };

    return (
        <>
            <div className="container">
                <h3>Orders</h3>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Description</th>
                            <th>Budget</th>
                            <th>Deadline</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((orders) => (
                            <tr key={orders.id}>
                                <td>{orders.id}</td>
                                <td>{orders.name}</td>
                                <td>{orders.phoneNumber}</td>
                                <td>{orders.email}</td>
                                <td>{orders.description}</td>
                                <td>{orders.budget}</td>
                                <td>{orders.deadline}</td>
                                <td>
                                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(orders.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Order;