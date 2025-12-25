import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Logo Column */}
                <div className="footer-section logo-section">
                    <div className="footer-logo">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            className="footer-icon"
                            fill="currentColor"
                        >
                            <path d="M1 18h16a1 1 0 0 0 1-1v-5h4.18a3 3 0 0 0 2.12-.88l1.71-1.71A3 3 0 0 0 26 8.59V8a1 1 0 0 0-1-1h-4.18a3 3 0 0 0-2.12.88l-1.71 1.71V9H5a1 1 0 0 0-1 1v7H2a1 1 0 0 0 0 2zm18-7h4v2.59a1 1 0 0 1-.29.71l-1.71 1.71A1 1 0 0 1 20 16v-5zM4 14v-2h8v2H4z" />
                            <path d="M18 19a3 3 0 1 0 3-3 3 3 0 0 0-3 3zm2 0a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM6 19a3 3 0 1 0 3-3 3 3 0 0 0-3 3zm2 0a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
                            <path d="M20 8h-3V4H3v13h2a3 3 0 0 0 6 0h4a3 3 0 0 0 6 0h2v-5l-3-4zM6 18.5a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 6 18.5zm13 0a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 19 18.5zM19 8l1.5 2H17V8h2z" />
                        </svg>
                        <span className="logo-text">TRANSPORTATION</span>
                    </div>
                </div>

                {/* Quick Links Column */}
                <div className="footer-section links-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About us</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                    </ul>
                </div>

                {/* Legal Column */}
                <div className="footer-section legal-section">
                    <h3>Legal</h3>
                    <ul>
                        <li><a href="#privacy">Privacy Policy</a></li>
                        <li><a href="#terms">Terms of Service</a></li>
                        <li><a href="#cookies">Cookies Policy</a></li>
                    </ul>
                </div>

                {/* Contact Us Column */}
                <div className="footer-section contact-section">
                    <h3>Contact Us</h3>
                    <ul>
                        <li className="contact-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <span className="text">123, Logistics way, Sort<br />Transport City, TC - 92001</span>
                        </li>
                        <li className="contact-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            <span className="text">+1 00000 123-4567</span>
                        </li>
                        <li className="contact-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <span className="text">travel@transportation.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Proudly Powered by Prenaya . All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
