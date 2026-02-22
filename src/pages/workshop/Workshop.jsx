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
            title: 'Agentic AI Workshop',
            subtitle: 'Building Agentic AI Apps with Google’s ADK: From "Can Machines Think?" to "Machines That Act"',
            active: true
        },
        {
            id: 'generative-ai',
            title: 'Generative AI Unleashed',
            subtitle: 'Transforming Ideas into Intelligent Creations with Dr. Kalaivani K',
            active: true
        },
        {
            id: 'placeholder-2',
            title: 'Coming Soon',
            subtitle: 'Stay tuned for our upcoming workshop session.',
            active: false
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
        </div>
    );
};

export default Workshop;
