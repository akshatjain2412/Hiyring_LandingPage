import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuIcon, CloseIcon } from "../icons/Icons";

/**
 * Navbar — fixed top bar with logo, nav links, CTAs and a responsive hamburger.
 * Import and place at the top of any page layout.
 */
export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const goTo = (path) => {
        setMenuOpen(false);
        navigate(path);
    };

    return (
        <>
            {/* ── Mobile Menu overlay ────────────────────────────────────────── */}
            {menuOpen && (
                <div className="mobile-menu">
                    <div onClick={() => goTo("/")} className="mobile-menu-link">Home</div>
                    <div onClick={() => goTo("/solutions")} className="mobile-menu-link">Solutions</div>
                    <div onClick={() => goTo("/pricing")} className="mobile-menu-link">Pricing</div>
                    <div onClick={() => goTo("/resources")} className="mobile-menu-link">Resources</div>
                    <div className="mobile-menu-btns">
                        <button className="btn-ghost" style={{ flex: 1 }} onClick={() => goTo("/login")}>Log In</button>
                        <button className="btn-primary" style={{ flex: 1 }} onClick={() => goTo("/signup")}>Sign Up</button>
                    </div>
                </div>
            )}

            {/* ── Desktop Navbar ─────────────────────────────────────────────── */}
            <nav className="nav">
                <div className="nav-logo" onClick={() => goTo("/")}>Hiyring</div>

                <div className="nav-links">
                    <span className="nav-link" onClick={() => goTo("/solutions")}>Solutions</span>
                    <span className="nav-link" onClick={() => goTo("/case-studies")}>How it works</span>
                    <span className="nav-link" onClick={() => goTo("/pricing")}>Pricing</span>
                    <span className="nav-link" onClick={() => goTo("/resources")}>Resources</span>
                </div>

                <div className="nav-ctas">
                    <button className="btn-ghost" onClick={() => goTo("/login")}>Log In</button>
                    <button className="btn-primary" onClick={() => goTo("/signup")}>Sign up</button>
                </div>

                <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                    {menuOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
            </nav>
        </>
    );
}
