import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import lg from "../assets/lg.png";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Close menu when route changes
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    // Track scroll for enhanced glassmorphism
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close on escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") setMenuOpen(false);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleHomeClick = () => {
        closeMenu();
        if (location.pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
            <div className="navbar-container">
                {/* Brand / Logo - takes back to homepage */}
                <Link
                    to="/"
                    className="nav-brand"
                    onClick={handleHomeClick}
                    aria-label="E-Cell IIT Palakkad Home"
                >
                    <div className="nav-logo-box">
                        <img src={lg} alt="E-Cell IIT Palakkad Logo" className="nav-logo" />
                    </div>
                    <div className="nav-brand-text">
                        <span className="brand-title">E-CELL</span>
                        <span className="brand-subtitle">IIT PALAKKAD</span>
                    </div>
                </Link>

                {/* Animated Hamburger Button */}
                <button
                    type="button"
                    className={`nav-menu-btn ${menuOpen ? "open" : ""}`}
                    onClick={toggleMenu}
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                >
                    <span className="nav-btn-bar"></span>
                    <span className="nav-btn-bar"></span>
                    <span className="nav-btn-bar"></span>
                </button>

                {/* Backdrop overlay for mobile menu */}
                {menuOpen && (
                    <div
                        className="nav-backdrop"
                        onClick={closeMenu}
                        aria-hidden="true"
                    />
                )}

                {/* Nav Links */}
                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <li className="nav-item">
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) =>
                                `nav-link ${isActive ? "active" : ""}`
                            }
                            onClick={handleHomeClick}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/allevents"
                            className={({ isActive }) =>
                                `nav-link ${isActive ? "active" : ""}`
                            }
                            onClick={closeMenu}
                        >
                            Events
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `nav-link ${isActive ? "active" : ""}`
                            }
                            onClick={closeMenu}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
