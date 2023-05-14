import React from 'react';
import { useState } from 'react';
import { requester } from './requester';
import './Admin.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Works = () => {

    const [formWorks, setFormWorks] = useState({
        name: '',
        imgUrl: '',
    });

    const handleInputChange = (event) => {
        setFormWorks({ ...formWorks, [event.target.name]: event.target.value });
    };

    const handleSave = async (event) => {
        event.preventDefault();
        try {
            const response = await requester.post('/atelier/works/item/', formWorks);
            console.log(response.data);
            toast.success('Works updated successfully!');

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div>
                <h3>Works</h3>
                <form onSubmit={handleSave}>
                    <label htmlFor="image">Image URL:</label>
                    <input
                        type="text"
                        id="imgUrl"
                        name="imgUrl"
                        placeholder="Add image via url"
                        value={formWorks.imgUrl}
                        onChange={handleInputChange}
                        required
                    />

                    <br />

                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Add it description"
                        value={formWorks.name}
                        onChange={handleInputChange}
                        required
                    />

                    <br />

                    <button className='button' type="submit">Save</button>
                </form>
            </div>
        </>
    );
}

export default Works;