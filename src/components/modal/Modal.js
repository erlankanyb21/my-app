import React, { useState } from "react";
import "./Modal.css";
import vk from "../../img/icons/vk.svg"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Modal = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted: ", username, password);
    if (username === "admin" && password === "admin") {
      window.location.href = '/admin'
      onClose();
    } else {
      toast.error("Incorrect login or password")
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2 className="modal-title">Authorization</h2>
          <button type="submit" className="modal-close" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                className="modal-input"
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                className="modal-input"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
            <div className="modal-separator">
              <span className="modal-separator-text">or sign in with:</span>
            </div>
            <div className="social-icons">
              <img alt="" src={vk} ></img>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
