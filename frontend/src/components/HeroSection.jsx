import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import "./heroSection.css";
const HeroSection = () => {

    // This function initializes the particle engine.
    // It ensures the external script loads only once.
    const particlesInit = useCallback(async engine => {
        // console.log(engine);
        await loadSlim(engine);
    }, []);

    // THE CONFIGURATION
    // This controls the look and feel of the network effect.
    const particlesConfig = {
        // Crucial: Keeps particles contained to this section, not the whole body
        fullScreen: { enable: false },
        background: {
            // A professional deep slate blue/black background
            color: {
                value: "#081B33", 
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                // Makes the network react when mouse hovers over it
                onHover: {
                    enable: true,
                    mode: "grab", // "grab" pulls nearby lines to the mouse
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 150,
                    links: {
                        opacity: 1,
                        color: "#00D9FF" // A bright cyan highlight on hover grab
                    }
                },
            },
        },
        particles: {
            color: {
                value: "#64E5FF", // Base color of the dots
            },
            links: {
                // THIS IS THE "NETWORK" PART
                color: "#9BCFE8",
                distance: 150, // How far dots must be to connect
                enable: true,
                opacity: 0.25, // Keep lines subtle so text is readable
                width: 1,
            },
            move: {
                // Makes the network slowly drift
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 1, // Slow, professional movement speed
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 100, // Number of dots on screen (adjust for density)
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    };


    return (
        <div className='heroContainer'>
            {/* The Particle Background */}
            <Particles 
                id="tsparticles" 
                init={particlesInit} 
                options={particlesConfig} 
                style={styles.particlesCanvas}
            />

            {/* The Overlay Content - Put your text here */}
            <div className='contentOverlay'>
                <h1 className='headline'>
                    <span>Entrepreneurship Cell</span><br />
                        <span>IIT Palakkad</span>
                </h1>
                <p className='subText'>
                    The Entrepreneurship Cell connects innovators, builders, and strategists.
                </p>
            </div>
        </div>
    );
};

// CSS-in-JS styles for structure (You can move these to a CSS file)
const styles = {
    heroContainer: {
        position: 'relative',
        height: '90vh', // Takes up 90% of the viewport height
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    particlesCanvas: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0, // Ensure it sits behind content
    },
    contentOverlay: {
        position: 'relative',
        zIndex: 1, // Ensure it sits ON TOP of particles
        textAlign: 'center',
        color: 'white',
        padding: '20px',
        maxWidth: '800px',
    },
    headline: {
        fontSize: '3.5rem',
        fontWeight: '800',
        marginBottom: '20px',
        letterSpacing: '-0.02em',
    },
    subText: {
        fontSize: '1.2rem',
        color: '#cbd5e1', // Slightly muted white for readability
        marginBottom: '30px',
    },
    ctaButton: {
        padding: '12px 32px',
        fontSize: '1rem',
        fontWeight: '600',
        backgroundColor: '#38bdf8', // A nice tech-cyan color
        color: '#0f172a',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'transform 0.2s ease',
    }
};

export default HeroSection;
