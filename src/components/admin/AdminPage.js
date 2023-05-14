import React from 'react';
import { useState } from 'react';
import './Admin.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Home';
import About from './About';
import Works from './Works';
import Contacts from './Contacts';
import Order from './Order';

const AdminPage = () => {

  const [page, setPage] = useState('Home');

  const handleMenuClick = (page) => {
    setPage(page);
  };

  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <h1>Admin Panel</h1>
        <ul>
          <li onClick={() => handleMenuClick('Home')}>Home</li>
          <li onClick={() => handleMenuClick('About Us')}>About Us</li>
          <li onClick={() => handleMenuClick('Works')}>Works</li>
          <li onClick={() => handleMenuClick('Contacts')}>Contacts</li>
          <li onClick={() => handleMenuClick('Order')}>Order</li>
        </ul>
      </div>
      <div className="admin-form">
        <h2>Welcome to the Admin Panel!</h2>
        <p>Here you can manage your products, customers, and orders.</p>

        {page === 'Home' && (
          <Home/>
        )}

        {page === 'About Us' && (
          <About/>
        )}

        {page === 'Works' && (
         <Works/>
        )}

        {page === 'Contacts' &&
         <Contacts/>
        }

        {page === 'Order' &&
        <Order/>
        }

      </div>
    </div>
  );
}

export default AdminPage;