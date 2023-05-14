import React, { useState } from 'react';
import { requester } from "../requester";
import "../components/order/Order.css"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Order = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        description: '',
        budget: '',
        deadline: ''
    });

    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await requester.post('/atelier/order/item', formData);
            console.log(response.data);
            toast.success('Order submitted successfully!');

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <section className="section-order">
                <div className="container">
                    <h1>Custom Clothing Order Form</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber">Phone Number:</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="phoneNumber"
                                name="phoneNumber"
                                placeholder="Enter your phone number"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description of Clothing:</label>
                            <textarea
                                className="form-control"
                                id="description"
                                name="description"
                                rows="5"
                                placeholder="Please describe the clothing you would like us to create"
                                value={formData.description}
                                onChange={handleInputChange}
                                required
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="budget">Budget:</label>
                            <select
                                className="form-control"
                                id="budget"
                                name="budget"
                                value={formData.budget}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select a budget range</option>
                                <option value="$500-$1000">$500-$1000</option>
                                <option value="$1000-$1500">$1000-$1500</option>
                                <option value="$1500-$2000">$1500-$2000</option>
                                <option value="$2000+">$2000+</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="deadline">Deadline:</label>
                            <input
                                type="date"
                                className="form-control"
                                id="deadline"
                                name="deadline"
                                value={formData.deadline}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Order;

