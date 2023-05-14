import React from "react";
import Modal from "../components/modal/Modal";
import "../components/home/Home.css"
import { useEffect, useState } from 'react';
import { getHome } from '../api/getData';
import { getServices } from '../api/getData';
import ceoimg from "../img/projects/7.jpg"

const Home = () => {

  const [home, setHome] = useState([]);
  useEffect(() => {
    getHome()
      .then((data) => setHome(data.data))
  }, [])
  console.log(home, 'home');

  const [services, setServices] = useState([]);
  useEffect(() => {
    getServices()
      .then((data) => setServices(data.data))
  }, [])
  console.log(services, 'services');
  
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => setShowModal(true);

  const handleModalClose = () => setShowModal(false);

  return (
    <>
      <section className="cta">
        <div className="cta-text">
          {home.map((data) => (
            <>
              <h1>{data.ctaTitle}</h1>
              <p>{data.ctaDescription}</p>
            </>
          ))}
          <button onClick={() => { window.location.href = '/Order' }} className="btn">Order Now</button>
          <button onClick={handleModalOpen} className="btn">Sign in</button>

          {showModal && <Modal onClose={handleModalClose} />}

        </div>
      </section>

      <section className="featured">
        <div className="container">
          {home.map((data) => (
            <>
              <h1>{data.servicesTitle}</h1>
            </>
          ))}

          {/* Services */}
          <div className="row">
            {services.map((data) => (
              <div key={data.id} className="col-md-6">
                <div className="service">
                  <img src={data.image} width="500" height="100" alt="Service 1" className="img-fluid" />
                  <h1>{data.title}</h1>
                  <p>{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>About Us</h2>
              <p>We are a team of experienced professionals dedicated to providing high-quality services and solutions for our clients. Our company was founded with a mission to help businesses succeed by leveraging the latest technology and best practices.</p>
              <p>At our core, we believe in putting our clients first and building long-term partnerships based on trust and mutual respect. Our team is committed to delivering exceptional results and exceeding expectations.</p>
            </div>
            <div className="col-md-6">
              <img src={ceoimg} width="500" alt="Team" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;