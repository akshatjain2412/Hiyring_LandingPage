const navigate = (path) => { window.location.href = path; };

/**
 * Footer — dark footer with brand info, navigation columns, and newsletter signup.
 * Import and place at the bottom of any page layout.
 */
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                {/* Brand */}
                <div className="footer-brand">
                    <div className="footer-logo">Hiyring</div>
                    <p className="footer-brand-desc">
                        Transforming talent acquisition through AI-powered interviews and candidate assessment technology.
                    </p>
                    <div className="footer-social">
                        {["in", "tw", "fb", "yt"].map((s, i) => (
                            <div key={i} className="footer-social-btn">{s}</div>
                        ))}
                    </div>
                </div>

                {/* Product */}
                <div>
                    <div className="footer-col-title">Product</div>
                    <ul className="footer-links">
                        {["AI Interviews", "Screening", "Analytics", "Integrations", "Pricing"].map((l, i) => (
                            <li key={i}><span className="footer-link" onClick={() => navigate("/")}>{l}</span></li>
                        ))}
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <div className="footer-col-title">Company</div>
                    <ul className="footer-links">
                        {["About Us", "Careers", "Blog", "Press", "Partners"].map((l, i) => (
                            <li key={i}><span className="footer-link" onClick={() => navigate("/")}>{l}</span></li>
                        ))}
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <div className="footer-col-title">Newsletter</div>
                    <p style={{ fontSize: 13, color: "#777", marginBottom: 16, lineHeight: 1.6 }}>
                        Stay updated with the latest in AI hiring.
                    </p>
                    <div style={{ display: "flex", gap: 8 }}>
                        <input
                            type="email"
                            placeholder="Your email"
                            style={{
                                flex: 1, background: "#222", border: "1px solid #333", borderRadius: 6,
                                padding: "10px 12px", color: "#fff", fontSize: 13,
                                fontFamily: "var(--font)", outline: "none",
                            }}
                        />
                        <button
                            style={{
                                background: "var(--orange)", border: "none", borderRadius: 6,
                                padding: "10px 14px", color: "#fff", cursor: "pointer",
                                fontSize: 13, fontFamily: "var(--font)", fontWeight: 400, whiteSpace: "nowrap",
                            }}
                            onClick={() => alert("Subscribed!")}
                        >
                            Join
                        </button>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-copy">© 2026 Hiyring. All rights reserved.</div>
                <div className="footer-bottom-links">
                    <span className="footer-bottom-link">Privacy Policy</span>
                    <span className="footer-bottom-link">Terms of Service</span>
                    <span className="footer-bottom-link">Cookies</span>
                </div>
            </div>
        </footer>
    );
}
