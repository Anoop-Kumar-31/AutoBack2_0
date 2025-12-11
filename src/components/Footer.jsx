import React from "react";
import "./Footer.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section footer-brand">
                        <h3>AutoBack</h3>
                        <p>AI-Powered Automation for Modern Businesses</p>
                    </div>

                    <div className="footer-section footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li onClick={() => scrollToSection('home')}>Home</li>
                            <li onClick={() => scrollToSection('services')}>Services</li>
                            <li onClick={() => scrollToSection('solutions')}>Solutions</li>
                            <li onClick={() => scrollToSection('about')}>About</li>
                            <li onClick={() => scrollToSection('contact')}>Contact</li>
                        </ul>
                    </div>

                    <div className="footer-section footer-contact">
                        <h4>Get in Touch</h4>
                        <ul>
                            <li>📧 contact@autoback.com</li>
                            <li>🌐 www.autoback.com</li>
                            <li>📍 Building Innovation Worldwide</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {currentYear} AutoBack. All rights reserved.</p>
                    <p className="footer-credit">Built by Anoop Kumar · Full Stack Developer</p>
                </div>
            </div>
        </footer>
    );
}