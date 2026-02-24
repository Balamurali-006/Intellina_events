import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Workshop.css';

// Note: Speaker images should be in public/assets/workshop/
const speaker1Img = "/assets/workshop/speaker1.jpeg";
const speaker2Img = "/assets/workshop/speaker2.jpeg";
const speakerKalaivaniImg = "/assets/workshop/kalaivani_mam.jpeg";
const speakerGobinathImg = "/assets/workshop/gobinath.png";

const WORKSHOPS_DATA = {
    'agentic-ai': {
        title: "AI Apps with Google’s ADK: From \"Can Machines Think?\" to \"Machines That Act\"",
        mom: [
            "The Cognitive Cycle: Understanding the ReAct pattern (Reason + Act) and how agents break down vague instructions (e.g., \"Plan a trip to Palakkad\") into executable steps.",
            "Hello, ADK: Setting up your first agent in under 100 lines of code.",
            "Multi-Agent Orchestration: Building a \"Trip Planner\" system where specialized sub-agents (Weather, Location, Packing) collaborate to deliver a final itinerary.",
            "Beyond Text: A look at ADK’s multimodal capabilities, including real-time audio/video streaming for conversational agents.",
            "Observability: Using the ADK visualizer to debug agent thought processes and trace execution paths in real-time."
        ],
        speakers: [
            {
                name: "Bala Saatvik",
                role: "Data Scientist 1",
                company: "MiQ Digital",
                image: speaker1Img,
                linkedin: "https://www.linkedin.com/in/bala-saatvik-t-61027b227/"
            },
            {
                name: "Akshay Kumar",
                role: "Python and AI App Developer",
                company: "Kovan Labs",
                image: speaker2Img,
                linkedin: "https://www.linkedin.com/in/akshay-kumar-k-01176525a/"
            }
        ]
    },
    'generative-ai': {
        title: <>Reinforcement Learning <br /><span style={{ fontSize: '0.6em', color: 'rgba(255,255,255,0.85)', fontWeight: '500', marginTop: '12px', display: 'inline-block' }}>From Games to Self-Driving Cars</span></>,
        mom: [
            "Introduction: Why Reinforcement Learning?",
            "Foundations of Reinforcement Learning",
            "From Games to Breakthroughs",
            "Deep Reinforcement Learning",
            "RL in Autonomous Vehicles",
            "Beyond Driving: Real-World Applications",
            "Challenges in Reinforcement Learning",
            "Future of Reinforcement Learning"
        ],
        speakers: [
            {
                name: "Kalaivani K",
                role: "Assistant Professor",
                company: "Department of AI&DS, Coimbatore Institute of Technology",
                image: speakerKalaivaniImg
            }
        ]
    },
    'agentic-ai-systems': {
        title: "Agentic AI Systems: Planning, Memory & Tool Integration",
        mom: [
            "Introduction to Agentic AI Systems",
            "Planning complex workflows with AI agents",
            "Understanding persistent Memory in AI",
            "Integrating tools for enhanced agent capabilities",
            "Real-World examples and use cases"
        ],
        speakers: [
            {
                name: "Gobinath Arumugam",
                role: "CTO & Artificial Intelligence Architect",
                company: "XPLORE INTELLECTS PRIVATE LIMITED",
                image: speakerGobinathImg
            }
        ]
    }
};

const WorkshopDetail = () => {
    const { id } = useParams();
    const workshop = WORKSHOPS_DATA[id];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!workshop) {
        return <div className="workshop-container"><h1 className="workshop-title">Workshop Not Found</h1></div>;
    }

    return (
        <div className="workshop-container">
            <div className="workshop-detail-container">
                <Link to="/workshop" className="breadcrumb">
                    <span className="material-symbols-outlined" style={{ verticalAlign: 'middle', marginRight: '5px' }}>arrow_back</span>
                    Back to Workshops
                </Link>

                <h1 className="workshop-title" style={{ marginTop: '40px', fontSize: '2.5rem' }}>{workshop.title}</h1>

                <div className="mom-section">
                    <h2 className="mom-title">Workshop Highlights</h2>
                    <div className="mom-content">
                        <ul>
                            {workshop.mom.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="speakers-section">
                    <h2 className="speakers-title">Speaker{workshop.speakers.length > 1 ? 's' : ''}</h2>
                    <div className="speakers-grid">
                        {workshop.speakers.map((speaker, index) => (
                            <div key={index} className="speaker-card">
                                <div className="speaker-image-container">
                                    <img
                                        src={speaker.image}
                                        alt={speaker.name}
                                        className="speaker-image"
                                        onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }}
                                    />
                                </div>
                                <h3 className="speaker-name">{speaker.name}</h3>
                                {speaker.role && <p className="speaker-role">{speaker.role}</p>}
                                {speaker.company && <p className="speaker-company">{speaker.company}</p>}
                                {speaker.linkedin && (
                                    <div className="speaker-socials">
                                        <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn Profile">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="linkedin-icon-svg"
                                            >
                                                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkshopDetail;
