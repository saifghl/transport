import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="navbar-icon"
          fill="currentColor"
        >
          <path d="M1 18h16a1 1 0 0 0 1-1v-5h4.18a3 3 0 0 0 2.12-.88l1.71-1.71A3 3 0 0 0 26 8.59V8a1 1 0 0 0-1-1h-4.18a3 3 0 0 0-2.12.88l-1.71 1.71V9H5a1 1 0 0 0-1 1v7H2a1 1 0 0 0 0 2zm18-7h4v2.59a1 1 0 0 1-.29.71l-1.71 1.71A1 1 0 0 1 20 16v-5zM4 14v-2h8v2H4z" />
          <path d="M18 19a3 3 0 1 0 3-3 3 3 0 0 0-3 3zm2 0a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM6 19a3 3 0 1 0 3-3 3 3 0 0 0-3 3zm2 0a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
          {/* Simple truck representation */}
          <path d="M20 8h-3V4H3v13h2a3 3 0 0 0 6 0h4a3 3 0 0 0 6 0h2v-5l-3-4zM6 18.5a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 6 18.5zm13 0a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 19 18.5zM19 8l1.5 2H17V8h2z" />
        </svg>
        <span className="logo-text">TRANSPORTATION</span>
      </div>

      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About us</a></li>
        <li><a href="#features">Features</a></li>
        <li><span onClick={() => navigate('/contact')} style={{ cursor: 'pointer' }}>Contact</span></li>
      </ul>

      <div className="navbar-actions">
        <button className="btn btn-outline">Login</button>
        <button className="btn btn-primary" onClick={() => navigate('/admin-login')}>Admin Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
