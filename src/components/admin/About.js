import React from 'react';
import { useState } from 'react';
import { requester } from './requester';
import './Admin.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const About = () => {

    const [formAbout, setFormAbout] = useState({
        title: '',
        imgUrl: '',
        description: '',
      });
      
      const handleInputChange = (event) => {
        setFormAbout({ ...formAbout, [event.target.name]: event.target.value });
      };
    
      const handleSave = async (event) => {
        event.preventDefault();
        try {
          const response = await requester.put('/atelier/about/item/1', formAbout);
          console.log(response.data);
          toast.success('About Us changed successfully!');
    
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <>
            <div>
                <h3>About Us</h3>
                <form onSubmit={handleSave}>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Change Title"
                        value={formAbout.title}
                        onChange={handleInputChange}
                        required
                    />

                    <br />

                    <label htmlFor="image">Image URL:</label>
                    <input
                        type="text"
                        id="imgUrl"
                        name="imgUrl"
                        placeholder="Change image via url"
                        value={formAbout.imgUrl}
                        onChange={handleInputChange}
                        required
                    />

                    <br />

                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        placeholder="Change description"
                        value={formAbout.description}
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

export default About;