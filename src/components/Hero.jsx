import React from "react";
import "./Hero.css";

export default function Hero() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="hero">
            <div className="hero-container">
                <div className="hero-content fade-in-up">
                    <h1 className="hero-title">
                        AI-Powered Automation for Modern Businesses
                    </h1>
                    <p className="hero-subtitle">
                        AutoBack builds intelligent systems that reduce costs, eliminate repetitive workflows,
                        and help companies scale faster with AI and automation.
                    </p>
                    <div className="hero-cta">
                        <button
                            className="btn btn-primary btn-large"
                            onClick={() => scrollToSection('contact')}
                        >
                            Request a Demo
                        </button>
                        <button
                            className="btn btn-secondary btn-large"
                            onClick={() => scrollToSection('solutions')}
                        >
                            View Our Solutions
                        </button>
                    </div>
                </div>

                <div className="hero-visual fade-in">
                    <div className="hero-card hero-card-1">
                        <div className="hero-icon">🤖</div>
                        <h4>AI Integration</h4>
                        <p>Smart automation</p>
                    </div>
                    <div className="hero-card hero-card-2">
                        <div className="hero-icon">📊</div>
                        <h4>Data Analytics</h4>
                        <p>Actionable insights</p>
                    </div>
                    <div className="hero-card hero-card-3">
                        <div className="hero-icon">☁️</div>
                        <h4>Cloud Solutions</h4>
                        <p>Scalable infrastructure</p>
                    </div>
                </div>
            </div>

            <div className="hero-background">
                <div className="hero-gradient"></div>
                <div className="hero-pattern"></div>
            </div>
        </section>
    );
}
