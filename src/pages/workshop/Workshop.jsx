import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Workshop.css';

const Workshop = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const workshops = [
        {
            id: 'agentic-ai',
            title: 'AI Apps with Google’s ADK',
            subtitle: 'From "Can Machines Think?" to "Machines That Act"',
            active: true
        },
        {
            id: 'generative-ai',
            title: 'Reinforcement Learning',
            subtitle: <>From Games to Self-Driving Cars<br />with Dr. Kalaivani K</>,
            active: true
        },
        {
            id: 'agentic-ai-systems',
            title: 'Agentic AI Systems',
            subtitle: 'Planning, Memory & Tool Integration with Gobinath Arumugam',
            active: true
        }
    ];

    const handleCardClick = (workshop) => {
        if (workshop.active) {
            navigate(`/workshop/${workshop.id}`);
        }
    };

    return (
        <div className="workshop-container">
            <h1 className="workshop-title">Workshops</h1>
            <div className="workshop-grid">
                {workshops.map((workshop) => (
                    <div
                        key={workshop.id}
                        className={`workshop-card ${!workshop.active ? 'placeholder' : ''}`}
                        onClick={() => handleCardClick(workshop)}
                    >
                        <h2 className="workshop-card-title">{workshop.title}</h2>
                        <p className="workshop-card-subtitle">{workshop.subtitle}</p>
                        {workshop.active && (
                            <button className="explore-button">EXPLORE SESSION</button>
                        )}
                    </div>
                ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px', paddingBottom: '40px' }}>
                <a
                    href="https://forms.gle/EFw8the1sxFdRWMh6"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        background: 'linear-gradient(135deg, #166534, #22c55e)',
                        border: '1px solid rgba(34, 197, 94, 0.5)',
                        borderRadius: '50px',
                        color: '#ffffff',
                        cursor: 'pointer',
                        fontFamily: "'Orbitron', monospace, sans-serif",
                        fontSize: '1.1rem',
                        fontWeight: 800,
                        letterSpacing: '2px',
                        padding: '18px 48px',
                        textTransform: 'uppercase',
                        transition: 'all 0.3s ease',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 20px rgba(34, 197, 94, 0.4)',
                        textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(135deg, #22c55e, #4ade80)';
                        e.currentTarget.style.boxShadow = '0 0 30px rgba(34, 197, 94, 0.6)';
                        e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(135deg, #166534, #22c55e)';
                        e.currentTarget.style.boxShadow = '0 0 20px rgba(34, 197, 94, 0.4)';
                        e.currentTarget.style.transform = 'scale(1)';
                    }}
                >
                    REGISTER FOR WORKSHOP
                </a>
            </div>
        </div>
    );
};

export default Workshop;
