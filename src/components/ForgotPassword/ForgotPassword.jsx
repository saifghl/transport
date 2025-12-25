import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
    const navigate = useNavigate();

    return (
        <div className="forgot-password-container">
            <div className="forgot-card">
                <div className="forgot-header">
                    <div className="forgot-logo-container">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="28"
                            height="28"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M2.5 2v6h6M21.5 22v-6h-6" />
                            <path d="M22 11.5A10 10 0 0 0 3.2 7.2M2 12.5a10 10 0 0 0 18.8 4.2" />
                            {/* Simple refresh/cycle icon representation */}
                        </svg>
                    </div>
                    <h2>Forgot Password?</h2>
                    <p>Enter the email address associated with your account and we'll send you a link to reset your password.</p>
                </div>

                <form className="forgot-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="email">Email/User Name</label>
                        <div className="input-wrapper">
                            <span className="input-icon">✉️</span>
                            <input type="text" id="email" placeholder="Enter Your Email or User Name" />
                        </div>
                    </div>

                    <button type="submit" className="login-btn">Login to Dashboard</button> {/* Keeping text exactly as requested/shown */}

                    <div className="back-to-login">
                        <span onClick={() => navigate('/admin-login')}>Back to login</span>
                    </div>
                </form>
            </div>
            <div className="forgot-footer">
                <a href="#support">Need help? Contact Support</a>
            </div>
        </div>
    );
};

export default ForgotPassword;
