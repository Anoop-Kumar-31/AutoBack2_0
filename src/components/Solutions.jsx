import React from "react";
import "./Solutions.css";

export default function Solutions() {
    const solutions = [
        {
            icon: "⚡",
            title: "Workflow Automation",
            description: "Enable automated decision-making and seamless operations."
        },
        {
            icon: "💬",
            title: "Customer Support Chatbots",
            description: "AI chatbots that reduce your support load by up to 70%."
        },
        {
            icon: "📈",
            title: "Lead & Client Management Tools",
            description: "Custom CRM systems designed for high-growth businesses."
        },
        {
            icon: "📄",
            title: "AI-powered Document Processing",
            description: "Extract, validate, and manage documents automatically."
        }
    ];

    return (
        <section id="solutions" className="section solutions">
            <div className="container">
                <div className="section-header">
                    <h2>Solutions Tailored to Your Industry</h2>
                    <p>Proven approaches to solve real business challenges</p>
                </div>

                <div className="solutions-grid grid grid-2">
                    {solutions.map((solution, index) => (
                        <div key={index} className="solution-item">
                            <div className="solution-icon">{solution.icon}</div>
                            <div className="solution-content">
                                <h3>{solution.title}</h3>
                                <p>{solution.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
