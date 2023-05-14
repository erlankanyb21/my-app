import React, { useState } from 'react';
import { requester } from "../requester";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../components/contacts/Contacts.css"

const Contacts = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await requester.post('/atelier/contacts/item', formData);
      console.log(response.data);
      toast.success('Message sended successfully!');

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <main className="section-contacts">
        <section className="container">
          <div className="title-1">
            <h1>Contact Us</h1>
          </div>

          <div className="row">
            <div className="col-md-6">
              <h3>Our Location:</h3>
              <p>123 Main Street</p>
              <p>Anytown, USA 12345</p>
              <p>Email: info@example.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
            <div className="col-md-6">
              <h3>Contact Form:</h3>
              <form onSubmit={handleSubmit} className="form-container">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Name:</label>

                  <input type="text"
                    className="form-input"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />

                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email:</label>

                  <input type="email"
                    className="form-input"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />

                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message:</label>

                  <textarea
                    className="form-input"
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Leave your message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  >

                  </textarea>

                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </section>
        <div className="map-container">
          <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.886831739777!2d-73.98724868462286!3d40.7446922793281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2593d36c1f56d%3A0xfac9e20867a6b4e7!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620029382787!5m2!1sen!2sus" width="100%" height="400" allowFullScreen="" loading="lazy"></iframe>
        </div>
      </main>
    </>
  );
};

export default Contacts;