import React from "react";
import "./WhyChooseUs.css";

export default function WhyChooseUs() {
    const reasons = [
        {
            icon: "🎯",
            title: "Proven expertise in AI & automation",
            description: "Years of experience delivering intelligent solutions"
        },
        {
            icon: "⚡",
            title: "Fast delivery with scalable architecture",
            description: "Built for speed and growth from day one"
        },
        {
            icon: "🔐",
            title: "Enterprise-grade security",
            description: "Your data is protected with industry-leading standards"
        },
        {
            icon: "🌎",
            title: "Cloud-ready deployments",
            description: "Seamless integration with modern cloud platforms"
        },
        {
            icon: "💡",
            title: "Custom solutions — no templates",
            description: "Tailored to your unique business needs"
        },
        {
            icon: "🤝",
            title: "Client-first approach",
            description: "Ongoing support and partnership for your success"
        }
    ];

    return (
        <section id="why-choose-us" className="section why-choose-us">
            <div className="container">
                <div className="section-header">
                    <h2>Why Companies Choose AutoBack</h2>
                    <p>The advantages that set us apart from the competition</p>
                </div>

                <div className="reasons-grid grid grid-3">
                    {reasons.map((reason, index) => (
                        <div key={index} className="reason-item">
                            <div className="reason-icon">{reason.icon}</div>
                            <h4>{reason.title}</h4>
                            <p>{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
