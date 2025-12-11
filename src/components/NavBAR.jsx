import React, { useState, useEffect } from "react";
import image from "../images/SelectedL.png";
import "./NavBar.css";

export default function NavBAR() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsExpanded(false);
        }
    };

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src={image} alt="AutoBack Logo" />
                </div>

                <button
                    className="navbar-toggle"
                    onClick={() => setIsExpanded(!isExpanded)}
                    aria-label="Toggle navigation"
                >
                    <span className={isExpanded ? 'bar bar-1 active' : 'bar bar-1'}></span>
                    <span className={isExpanded ? 'bar bar-2 active' : 'bar bar-2'}></span>
                    <span className={isExpanded ? 'bar bar-3 active' : 'bar bar-3'}></span>
                </button>

                <ul className={`navbar-menu ${isExpanded ? 'navbar-menu-active' : ''}`}>
                    <li onClick={() => scrollToSection('home')}>Home</li>
                    <li onClick={() => scrollToSection('services')}>Services</li>
                    <li onClick={() => scrollToSection('solutions')}>Solutions</li>
                    <li onClick={() => scrollToSection('about')}>About</li>
                    <li onClick={() => scrollToSection('contact')}>Contact</li>
                </ul>
            </div>
        </nav>
    );
}
