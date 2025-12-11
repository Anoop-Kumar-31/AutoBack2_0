import React from "react";
import "./ContactCTA.css";

export default function ContactCTA() {
    return (
        <section id="contact" className="section contact-cta">
            <div className="container">
                <div className="cta-content">
                    <h2 className="cta-title">Let's Build Your Next Solution</h2>
                    <p className="cta-subtitle">
                        Tell us what you're building — we'll make it faster, smarter, and scalable.
                    </p>

                    <div className="cta-buttons">
                        <a
                            href="mailto:amt312002@gmail.com"
                            className="btn btn-primary btn-large"
                        >
                            Contact via Email
                        </a>
                        <a
                            href="https://calendly.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary btn-large"
                        >
                            Schedule a Call
                        </a>
                    </div>

                    <div className="cta-info">
                        <div className="info-item">
                            <span className="info-icon">📧</span>
                            <span className="info-text">contact@autoback.com</span>
                        </div>
                        <div className="info-item">
                            <span className="info-icon">⏱️</span>
                            <span className="info-text">Response within 24 hours</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cta-background">
                <div className="cta-gradient"></div>
            </div>
        </section>
    );
}
