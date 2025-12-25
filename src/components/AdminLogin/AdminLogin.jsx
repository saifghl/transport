import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="admin-login-container">
            <div className="login-card">
                <div className="login-header">
                    <div className="login-logo-container">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="40"
                            height="40"
                            className="login-icon"
                            fill="white"
                        >
                            <path d="M1 18h16a1 1 0 0 0 1-1v-5h4.18a3 3 0 0 0 2.12-.88l1.71-1.71A3 3 0 0 0 26 8.59V8a1 1 0 0 0-1-1h-4.18a3 3 0 0 0-2.12.88l-1.71 1.71V9H5a1 1 0 0 0-1 1v7H2a1 1 0 0 0 0 2zm18-7h4v2.59a1 1 0 0 1-.29.71l-1.71 1.71A1 1 0 0 1 20 16v-5zM4 14v-2h8v2H4z" />
                            <path d="M18 19a3 3 0 1 0 3-3 3 3 0 0 0-3 3zm2 0a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM6 19a3 3 0 1 0 3-3 3 3 0 0 0-3 3zm2 0a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
                            <path d="M20 8h-3V4H3v13h2a3 3 0 0 0 6 0h4a3 3 0 0 0 6 0h2v-5l-3-4zM6 18.5a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 6 18.5zm13 0a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 19 18.5zM19 8l1.5 2H17V8h2z" />
                        </svg>
                    </div>
                    <h2>Admin Login</h2>
                    <p>Authorized access only, please enter your credentials.</p>
                </div>

                <form className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Email/User Name</label>
                        <div className="input-wrapper">
                            <span className="input-icon">✉️</span> {/* Using emoji temporarily, or can use SVG */}
                            <input type="text" id="email" placeholder="Enter Your Email or User Name" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <div className="input-wrapper">
                            <span className="input-icon">🔒</span>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                placeholder="Enter Your Password"
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? "👁️" : "👁️‍🗨️"}
                            </button>
                        </div>
                    </div>

                    <div className="form-actions">
                        <label className="checkbox-label">
                            <input type="checkbox" /> Remember me
                        </label>
                        <span className="forgot-password" onClick={() => navigate('/forgot-password')} style={{ cursor: 'pointer' }}>Forgot Password?</span>
                    </div>

                    <button type="submit" className="login-btn">Login to Dashboard</button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
