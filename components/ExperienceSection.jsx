// components/ExperienceSection.jsx
import React from "react";

// Example dynamic data
const experiences = [
    {
        title: "Software Engineer",
        company: "Emythmakers.com",
        date: "Jan 2026 - Present",
        points: [
            "Developed reusable components with Next.js, Javascript, and Bootstrap.",
            "Translated mockups into responsive web interfaces.",
            "Integrated RESTful APIs and handled error states securely.",
            "Contributed to stand-ups and async GitHub reviews",
            "Collaborated with clients to gather requirements, provide technical consultation, and deliver tailored solutions that matched business needs."
        ],
        tags: ["Next.js", "React js", "Javascript", "Bootstrap", "RESTful APIs", "GitHub", "Client Collaboration", "Database", "mySQL"],
    },
    {
        title: "Junior Software Engineer",
        company: "Emythmakers.com",
        date: "Feb 2025 - Dec 2025",
        points: [
            "Designed and developed responsive, user-friendly news portal websites using React.js and modern frontend frameworks, ensuring smooth performance and scalability",
            "Translated mockups into responsive web interfaces.",
            "Integrated RESTful APIs and handled error states securely.",
            "Contributed to stand-ups and async GitHub reviews"
        ],
        tags: ["Next.js", "Javascript", "Bootstrap", "RESTful APIs", "GitHub"]
    },
    // Add more experiences as needed
];

const ExperienceSection = () => {
    return (
        <section className="py-5 bg-dark text-light experi-Section" id="experience">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="fw-bold me-title">Experience</h2>
                    <hr className="mx-auto my-3 borderTitle" />
                    <p className="lead">
                        My professional journey in <span className="text-warning">software development</span>
                    </p>
                    {/* <p>Get to know the person behind the code</p> */}
                </div>
                <div className="row">
                    <div className="col-lg-10 m-auto">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className={`card bg-secondary experience-card ${index === 0 ? "current-card" : ""}`}
                            >
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-start mb-2 flex-wrap">
                                        <div>
                                            <h5 className="card-title">{exp.title}</h5>
                                            <h6 className="card-subtitle mb-2 text-info">
                                                {exp.company}
                                            </h6>
                                        </div>

                                        <span className="text-muted">
                                            {exp.date}

                                            {index === 0 && (
                                                <span className="current-badge ms-2">
                                                    Current
                                                </span>
                                            )}
                                        </span>
                                    </div>

                                    <ul className="mb-3">
                                        {exp.points.map((point, idx) => (
                                            <li key={idx}>{point}</li>
                                        ))}
                                    </ul>

                                    <div className="tech-tags">
                                        {exp.tags.map((tag, idx) => (
                                            <span key={idx} className="techName">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ExperienceSection;