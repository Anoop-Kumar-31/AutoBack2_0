import React from "react";
import "./CaseStudies.css";

export default function CaseStudies() {
    const caseStudies = [
        {
            title: "Automated Lead Management",
            problem: "A marketing agency lost leads due to manual spreadsheets.",
            solution: "Built AutoLead — automated CRM with reminders & analytics.",
            impact: "40% increase in conversions within 3 months.",
            metric: "40%",
            metricLabel: "Conversion Increase"
        },
        {
            title: "AI Support Bot",
            problem: "Customer support overwhelmed with repeated questions.",
            solution: "Trained an AI bot with custom FAQs & workflows.",
            impact: "60% reduction in support overhead.",
            metric: "60%",
            metricLabel: "Overhead Reduction"
        },
        {
            title: "Data Dashboard for SaaS Startup",
            problem: "No visibility into user behavior or churn.",
            solution: "Built live dashboards with charts & insights.",
            impact: "Improved retention by identifying churn points.",
            metric: "2x",
            metricLabel: "Retention Improvement"
        }
    ];

    return (
        <section id="case-studies" className="section case-studies">
            <div className="container">
                <div className="section-header">
                    <h2>Real Business Impact</h2>
                    <p>Success stories from companies we've helped transform</p>
                </div>

                <div className="case-studies-grid">
                    {caseStudies.map((study, index) => (
                        <div key={index} className="case-study-card card">
                            <div className="case-study-header">
                                <div className="case-study-number">0{index + 1}</div>
                                <h3>{study.title}</h3>
                            </div>

                            <div className="case-study-content">
                                <div className="case-study-section">
                                    <h5>Problem</h5>
                                    <p>{study.problem}</p>
                                </div>

                                <div className="case-study-section">
                                    <h5>Solution</h5>
                                    <p>{study.solution}</p>
                                </div>

                                <div className="case-study-section">
                                    <h5>Impact</h5>
                                    <p>{study.impact}</p>
                                </div>
                            </div>

                            <div className="case-study-metric">
                                <div className="metric-value">{study.metric}</div>
                                <div className="metric-label">{study.metricLabel}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
