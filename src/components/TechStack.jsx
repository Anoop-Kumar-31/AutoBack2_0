import React from "react";
import "./TechStack.css";

export default function TechStack() {
    const technologies = [
        {
            name: "React",
            category: "Frontend",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        },
        {
            name: "Node.js",
            category: "Backend",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        },
        {
            name: "Express",
            category: "Backend",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
        },
        {
            name: "Python",
            category: "AI/ML",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        },
        {
            name: "Django",
            category: "Backend",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
        },
        {
            name: "TailwindCSS",
            category: "Styling",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
        },
        {
            name: "Framer Motion",
            category: "Animation",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg"
        },
        {
            name: "AWS",
            category: "Cloud",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
        },
        {
            name: "Render",
            category: "Cloud",
            logo: "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/gkq3dkkfkec8edd6fuay?ik-sanitizeSvg=true"
        },
        {
            name: "Vercel",
            category: "Cloud",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg"
        }
    ];

    return (
        <section id="tech-stack" className="section tech-stack">
            <div className="container">
                <div className="section-header">
                    <h2>Technology We Use</h2>
                    <p>Modern, battle-tested tools for building robust solutions</p>
                </div>

                <div className="tech-grid">
                    {technologies.map((tech, index) => (
                        <div key={index} className="tech-badge">
                            <img
                                src={tech.logo}
                                alt={`${tech.name} logo`}
                                className="tech-logo"
                                onError={(e) => {
                                    // Fallback if logo fails to load
                                    e.target.style.display = 'none';
                                }}
                            />
                            <span className="tech-name">{tech.name}</span>
                            <span className="tech-category">{tech.category}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
