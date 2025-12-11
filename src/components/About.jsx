import React from "react";
import "./About.css";

export default function About() {
    return (
        <section id="about" className="section about">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h2>About AutoBack</h2>
                        <p className="about-intro">
                            AutoBack is a technology solutions company specializing in automation, AI integration,
                            and scalable product development.
                        </p>
                        <p className="about-description">
                            We help startups and enterprises transform operations using intelligent systems that
                            deliver real, measurable impact. Our team brings together expertise in artificial
                            intelligence, cloud infrastructure, and modern web development to solve complex
                            business challenges.
                        </p>
                        <p className="about-mission">
                            Our mission is simple: empower businesses to work smarter, not harder, through the
                            strategic use of automation and AI.
                        </p>
                    </div>

                    <div className="about-stats">
                        <div className="stat-card">
                            <div className="stat-value">20+</div>
                            <div className="stat-label">Projects Delivered</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-value">99%</div>
                            <div className="stat-label">Client Satisfaction</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-value">24/7</div>
                            <div className="stat-label">Support Available</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
