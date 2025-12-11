import React from "react";
import "./Services.css";

export default function Services() {
    const services = [
        {
            icon: "🤖",
            title: "AI Integration & Automation",
            description: "We automate your repetitive processes using cutting-edge AI, saving time and reducing human error."
        },
        {
            icon: "💻",
            title: "Custom Web Applications",
            description: "We design scalable, secure apps tailored to your business needs."
        },
        {
            icon: "📊",
            title: "Data Analytics & Dashboards",
            description: "Turn complex data into actionable insights with interactive dashboards."
        },
        {
            icon: "☁️",
            title: "Cloud Deployment & DevOps",
            description: "Cloud hosting, scaling, CI/CD pipelines, and monitoring — all handled seamlessly."
        }
    ];

    return (
        <section id="services" className="section services">
            <div className="container">
                <div className="section-header">
                    <h2>Our Core Services</h2>
                    <p>Comprehensive solutions to power your digital transformation</p>
                </div>

                <div className="services-grid grid grid-4">
                    {services.map((service, index) => (
                        <div key={index} className="card service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="card-title">{service.title}</h3>
                            <p className="card-description">{service.description}</p>
                            <button className="btn-text">Learn More →</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
