import React from 'react';
import { useState } from 'react';
import { requester } from './requester';
import './Admin.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    const [formHome, setFormHome] = useState({
        ctaTitle: '',
        ctaDescription: '',
        servicesTitle: '',
      });
      
      const handleInputChange = (event) => {
        setFormHome({ ...formHome, [event.target.name]: event.target.value });
      };
    
      const handleSave = async (event) => {
        event.preventDefault();
        try {
          const response = await requester.put('/atelier/home/item/52', formHome);
          console.log(response.data);
          toast.success('Home changed successfully!');
    
        } catch (error) {
          console.error(error);
        }
      };

    return ( 
        <>
         <div>
            <h3>Home</h3>
            <form onSubmit={handleSave} >
              <label htmlFor="ctaTitle">CTA Title:</label>
              <input
                type="text"
                id="ctaTitle"
                name="ctaTitle"
                placeholder="Change Title"
                value={formHome.ctaTitle}
                onChange={handleInputChange}
                required
              />

              <br />

              <label htmlFor="ctaDescription">CTA Description:</label>
              <input
                type="text"
                id="ctaDescription"
                name="ctaDescription"
                placeholder="Change Description"
                value={formHome.ctaDescription}
                onChange={handleInputChange}
                required
              />

              <br />

              <label htmlFor="servicesTitle">servicesTitle:</label>
              <input
                type="text"
                id="servicesTitle"
                name="servicesTitle"
                placeholder="Change services Title"
                value={formHome.servicesTitle}
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
 
export default Home;