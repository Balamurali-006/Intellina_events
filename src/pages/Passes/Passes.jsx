import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ChevronRight, ArrowRight, Terminal } from 'lucide-react';
import './Passes.css';

const REGISTRATION_URL = "https://docs.google.com/forms/d/e/1FAIpQLScUsI6og_xxSWquoO9k74xv3ZbN1xHb5D94Kw8jrLcpdih0Rw/viewform";

const passesData = [
    {
        name: "ELITE PASS",
        price: 350,
        tagline: "All-access pass for flagship events",
        events: [
            "RRR coding",
            "Worst UI Design",
            "Project Expo",
            "Bigg Boss",
            "Murder Mystery",
            "IPL Auction",
            "Fandom Frenzy Quiz",
            "Rapid Chess",
        ],
        dotColor: "#4ade80",
        accentColor: "#4ade80",
        emoji: "🔥",
        delay: 0.1,
        popular: true,
        hasWorkshop: true,
    },
    {
        name: "STANDARD PASS",
        price: 250,
        tagline: "Core events and workshops",
        events: [
            "Paper Presentation",
            "Web Designing",
            "Treasure Hunt",
            "Object Odyssey",
            "Connections",
            "Snap-Sense",
        ],
        dotColor: "#4ade80",
        accentColor: "#4ade80",
        emoji: "⚡",
        delay: 0.2,
        popular: false,
        hasWorkshop: true,
    },
];

const PassCard = ({ name, price, tagline, events, dotColor, accentColor, emoji, delay, popular, hasWorkshop }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay, ease: "easeOut" }}
        className="reg-pack"
        tabIndex={0}
        role="article"
        aria-label={`${name} pass - ₹${price}`}
    >
        {/* Colored accent line at top */}
        <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
            background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
            opacity: 0.6,
        }} />

        {/* Popular badge */}
        {popular && <span className="badge-popular">★ MOST POPULAR</span>}

        {/* Title with Icon Inline */}
        <div className="pack-title">
            <span style={{ fontSize: '1.6rem', filter: `drop-shadow(0 0 12px ${accentColor})`, lineHeight: 1 }}>{emoji}</span>
            {name}
        </div>

        {/* Price label */}
        <span className="pack-price-label">EARLY BIRD PRICE</span>

        {/* Price */}
        <p className="pack-price">₹{price}</p>

        {/* Tagline */}
        <p className="pack-desc">"{tagline}"</p>

        {/* Events List */}
        <ul className="pack-events">
            {events.map((event, i) => (
                <li key={i}>
                    <span className="dot" style={{ backgroundColor: dotColor, boxShadow: `0 0 12px ${dotColor}` }}></span>
                    {event}
                </li>
            ))}
        </ul>

        {/* Workshop Badge */}
        {hasWorkshop && (
            <div className="workshop-badge" style={{
                marginTop: '12px',
                padding: '8px 14px',
                background: `linear-gradient(135deg, ${accentColor}20, ${accentColor}40)`,
                border: `1.5px solid ${accentColor}`,
                borderRadius: '6px',
                textAlign: 'center',
                fontSize: '0.85rem',
                fontWeight: '600',
                color: accentColor,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                boxShadow: `0 0 12px ${accentColor}30`,
            }}>
                ✨ +Workshop Included
            </div>
        )}

        {/* Button */}
        <button
            className="btn-register"
            aria-label={`Register for ${name} pass`}
            onClick={() => window.open(REGISTRATION_URL, '_blank')}
        >
            REGISTER NOW <ArrowRight size={16} />
        </button>
    </motion.div>
);

/* Helper to convert hex to rgb for inline rgba */
function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
}

export default function Passes() {
    return (
        <div className="page-passes">
            <div id="unified-passes-page">
                <div className="passes-bg">
                    <div className="relative z-10" style={{ maxWidth: '1100px', margin: '0 auto', padding: '20px 20px 80px' }}>



                        {/* Hero Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="section-heading text-center text-[45px] mb-4 flex justify-center font-bold"
                            style={{ fontSize: '45px' }}
                        >
                            CHOOSE YOUR BATTLE PASS
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="page-subtitle text-center max-w-2xl mx-auto flex justify-center"
                            style={{ marginBottom: '60px' }}
                        >
                            <div className="inline-block px-6 py-2 rounded-full border border-red-500/30 bg-red-950/20 backdrop-blur-sm">
                                <p className="text-red-400 font-mono text-sm md:text-base tracking-widest uppercase animate-pulse mb-0">
                                    ⚠ Early Bird Registration - Active only for Few days — Expiring Soon
                                </p>
                            </div>
                        </motion.div>

                        {/* 2x2 Grid */}
                        <div className="passes-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '50px',
                            justifyContent: 'center',
                            justifyItems: 'center',
                            margin: '0 auto 80px',
                        }}>
                            {passesData.map((pass, i) => (
                                <PassCard key={i} {...pass} />
                            ))}
                        </div>

                        {/* Special Event Registration Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <h2 className="section-heading" style={{ fontSize: '36px', marginBottom: '40px' }}>
                                SPECIAL EVENT REGISTRATIONS
                            </h2>

                            <div
                                className="special-events-grid"
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                    gap: '40px',
                                    maxWidth: '900px',
                                    margin: '0 auto',
                                }}>
                                {/* GPTathon Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="special-event-card"
                                    style={{
                                        background: 'radial-gradient(ellipse at 50% 50%, #0a1f0a 0%, #050a05 70%)',
                                        border: '1px solid #22c55e',
                                        borderRadius: '20px',
                                        padding: '40px 32px',
                                        boxShadow: '0 0 20px rgba(34, 197, 94, 0.3), inset 0 0 20px rgba(34, 197, 94, 0.05)',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        transition: 'all 0.4s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                                        e.currentTarget.style.boxShadow = '0 0 40px rgba(34, 197, 94, 0.5), 0 0 80px rgba(34, 197, 94, 0.2)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                        e.currentTarget.style.boxShadow = '0 0 20px rgba(34, 197, 94, 0.3), inset 0 0 20px rgba(34, 197, 94, 0.05)';
                                    }}
                                >
                                    {/* Top accent line */}
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: '3px',
                                        background: 'linear-gradient(90deg, transparent, #22c55e, transparent)',
                                        opacity: 0.8,
                                    }} />

                                    <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🤖</div>
                                    <h3 style={{
                                        fontFamily: "'Cinzel', serif",
                                        fontSize: '1.8rem',
                                        fontWeight: 900,
                                        color: '#22c55e',
                                        textTransform: 'uppercase',
                                        letterSpacing: '3px',
                                        marginBottom: '12px',
                                        textShadow: '0 0 15px rgba(34, 197, 94, 0.5)',
                                    }}>
                                        GPT-ATHON
                                    </h3>
                                    <p style={{
                                        color: 'rgba(200, 255, 200, 0.7)',
                                        fontSize: '0.95rem',
                                        marginBottom: '24px',
                                        lineHeight: '1.6',
                                    }}>
                                        AI Innovation Challenge - Build the Future with Generative AI
                                    </p>
                                    <button
                                        onClick={() => window.open('https://unstop.com/o/1QyUbxr?lb=TncsUv60&utm_medium=Share&utm_source=harism8992&utm_campaign=Online_coding_challenge', '_blank')}
                                        style={{
                                            background: 'linear-gradient(135deg, #166534, #22c55e)',
                                            border: '1px solid rgba(34, 197, 94, 0.5)',
                                            borderRadius: '50px',
                                            color: '#ffffff',
                                            cursor: 'pointer',
                                            fontFamily: "'Orbitron', monospace",
                                            fontSize: '0.75rem',
                                            fontWeight: 700,
                                            letterSpacing: '2px',
                                            padding: '16px 32px',
                                            textTransform: 'uppercase',
                                            transition: 'all 0.3s ease',
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '8px',
                                            boxShadow: '0 0 15px rgba(34, 197, 94, 0.3)',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = 'linear-gradient(135deg, #22c55e, #4ade80)';
                                            e.currentTarget.style.boxShadow = '0 0 30px rgba(34, 197, 94, 0.6)';
                                            e.currentTarget.style.transform = 'scale(1.05)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'linear-gradient(135deg, #166534, #22c55e)';
                                            e.currentTarget.style.boxShadow = '0 0 15px rgba(34, 197, 94, 0.3)';
                                            e.currentTarget.style.transform = 'scale(1)';
                                        }}
                                    >
                                        REGISTER ON UNSTOP <ArrowRight size={16} />
                                    </button>
                                </motion.div>

                                {/* Hackathon Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="special-event-card"
                                    style={{
                                        background: 'radial-gradient(ellipse at 50% 50%, #0a1f0a 0%, #050a05 70%)',
                                        border: '1px solid #22c55e',
                                        borderRadius: '20px',
                                        padding: '40px 32px',
                                        boxShadow: '0 0 20px rgba(34, 197, 94, 0.3), inset 0 0 20px rgba(34, 197, 94, 0.05)',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        transition: 'all 0.4s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                                        e.currentTarget.style.boxShadow = '0 0 40px rgba(34, 197, 94, 0.5), 0 0 80px rgba(34, 197, 94, 0.2)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                        e.currentTarget.style.boxShadow = '0 0 20px rgba(34, 197, 94, 0.3), inset 0 0 20px rgba(34, 197, 94, 0.05)';
                                    }}
                                >
                                    {/* Top accent line */}
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: '3px',
                                        background: 'linear-gradient(90deg, transparent, #22c55e, transparent)',
                                        opacity: 0.8,
                                    }} />

                                    <div style={{ fontSize: '3rem', marginBottom: '16px' }}>💻</div>
                                    <h3 style={{
                                        fontFamily: "'Cinzel', serif",
                                        fontSize: '1.8rem',
                                        fontWeight: 900,
                                        color: '#22c55e',
                                        textTransform: 'uppercase',
                                        letterSpacing: '3px',
                                        marginBottom: '12px',
                                        textShadow: '0 0 15px rgba(34, 197, 94, 0.5)',
                                    }}>
                                        HACKATHON
                                    </h3>
                                    <p style={{
                                        color: 'rgba(200, 255, 200, 0.7)',
                                        fontSize: '0.95rem',
                                        marginBottom: '24px',
                                        lineHeight: '1.6',
                                    }}>
                                        Web Agent Hackathon - Build Intelligent Agents That Shape Tomorrow
                                    </p>
                                    <button
                                        onClick={() => window.open('https://unstop.com/o/pbuTYrw?lb=MZOG3iNE&utm_medium=Share&utm_source=dharsb2554&utm_campaign=Online_coding_challenge', '_blank')}
                                        style={{
                                            background: 'linear-gradient(135deg, #166534, #22c55e)',
                                            border: '1px solid rgba(34, 197, 94, 0.5)',
                                            borderRadius: '50px',
                                            color: '#ffffff',
                                            cursor: 'pointer',
                                            fontFamily: "'Orbitron', monospace",
                                            fontSize: '0.75rem',
                                            fontWeight: 700,
                                            letterSpacing: '2px',
                                            padding: '16px 32px',
                                            textTransform: 'uppercase',
                                            transition: 'all 0.3s ease',
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '8px',
                                            boxShadow: '0 0 15px rgba(34, 197, 94, 0.3)',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = 'linear-gradient(135deg, #22c55e, #4ade80)';
                                            e.currentTarget.style.boxShadow = '0 0 30px rgba(34, 197, 94, 0.6)';
                                            e.currentTarget.style.transform = 'scale(1.05)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'linear-gradient(135deg, #166534, #22c55e)';
                                            e.currentTarget.style.boxShadow = '0 0 15px rgba(34, 197, 94, 0.3)';
                                            e.currentTarget.style.transform = 'scale(1)';
                                        }}
                                    >
                                        REGISTER ON UNSTOP <ArrowRight size={16} />
                                    </button>
                                </motion.div>
                            </div>
                        </motion.div>


                        {/* Final CTA */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-center pt-10 flex flex-col items-center"
                            style={{ borderTop: '1px solid rgba(255,26,26,0.08)' }}
                        >
                            <br />
                            <p className="warning-text mt-6">
                                ⚠ One pass allows access only to events listed under it.
                            </p>

                            <div style={{
                                marginTop: 18,
                                padding: '12px 18px',
                                display: 'inline-block',
                                borderRadius: 10,
                                border: '1.5px solid #4ade80',
                                background: 'linear-gradient(135deg, rgba(74,222,128,0.06), rgba(74,222,128,0.03))',
                                color: '#065f46',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.6px'
                            }}>
                                EVENTS CAN BE REGISTERED INDIVIDUALLY : Rs.80/ Person for an Event
                            </div>

                            {/* Individual Event Registration Button */}
                            <button
                                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScUsI6og_xxSWquoO9k74xv3ZbN1xHb5D94Kw8jrLcpdih0Rw/viewform', '_blank')}
                                style={{
                                    marginTop: '24px',
                                    background: 'linear-gradient(135deg, #166534, #22c55e)',
                                    border: '1px solid rgba(34, 197, 94, 0.5)',
                                    borderRadius: '50px',
                                    color: '#ffffff',
                                    cursor: 'pointer',
                                    fontFamily: "'Orbitron', monospace",
                                    fontSize: '0.75rem',
                                    fontWeight: 700,
                                    letterSpacing: '2px',
                                    padding: '16px 32px',
                                    textTransform: 'uppercase',
                                    transition: 'all 0.3s ease',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                    boxShadow: '0 0 15px rgba(34, 197, 94, 0.3)',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'linear-gradient(135deg, #22c55e, #4ade80)';
                                    e.currentTarget.style.boxShadow = '0 0 30px rgba(34, 197, 94, 0.6)';
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'linear-gradient(135deg, #166534, #22c55e)';
                                    e.currentTarget.style.boxShadow = '0 0 15px rgba(34, 197, 94, 0.3)';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                            >
                                <ArrowRight size={16} /> Register for individual events
                            </button>
                        </motion.div>
                    </div >
                </div >
            </div>
        </div>
    );
}
