import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

export default function Signup() {
    const nav = useNavigate();
    const [userType, setUserType] = useState("candidate");
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        agreeTerms: false,
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const validate = () => {
        const err = {};
        if (!formData.fullName.trim()) err.fullName = "Full name is required";
        if (!formData.email.trim()) err.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) err.email = "Enter a valid email";
        if (!formData.password) err.password = "Password is required";
        else if (formData.password.length < 8) err.password = "Minimum 8 characters";
        if (!formData.confirmPassword) err.confirmPassword = "Confirm password";
        else if (formData.password !== formData.confirmPassword) err.confirmPassword = "Passwords must match";
        if (!formData.agreeTerms) err.agreeTerms = "You must agree to continue";
        return err;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const err = validate();
        if (Object.keys(err).length > 0) {
            setErrors(err);
            return;
        }
        alert("Account created!");
        nav("/");
    };

    return (
        <>
            <Navbar />

            <div className="login-page">
                {/* ── Left Panel ── */}
                <div className="login-left">
                    <div className="login-left-content">
                        <h1 className="login-left-title">
                            Your dream job starts with<br />a <em>great profile</em>
                        </h1>
                        <p className="login-left-sub">
                            Complete your account details to join our network of top-tier talent and get
                            matched with leading companies worldwide.
                        </p>

                        <div className="login-trust-row">
                            {[
                                "Industry Standard Security",
                                "Verified Employers",
                                "Free for Candidates",
                            ].map((b, i) => (
                                <div key={i} className="login-trust-item">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                                    </svg>
                                    {b}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Right Panel ── */}
                <div className="login-right" style={{ flexDirection: "column" }}>

                    <div style={{ width: "100%", maxWidth: "520px" }}>


                        {/* Form Card */}
                        <div className="login-card" style={{ maxWidth: "100%" }}>
                            {/* Card Header */}
                            <div className="signup-card-header">
                                <div>
                                    <h2 className="signup-card-title">Create your account</h2>
                                    <p className="signup-card-subtitle">
                                        Enter your basic details to start your journey with Hiyring.
                                    </p>
                                </div>
                                <div className="signup-secure-badge">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                    SECURE
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="signup-form">
                                {/* Type Toggle */}
                                <div className="signup-type-toggle">
                                    <div
                                        className={`signup-type-btn ${userType === "candidate" ? "active" : ""}`}
                                        onClick={() => setUserType("candidate")}
                                    >
                                        Candidate
                                    </div>
                                    <div
                                        className={`signup-type-btn ${userType === "company" ? "active" : ""}`}
                                        onClick={() => setUserType("company")}
                                    >
                                        Company
                                    </div>
                                </div>

                                {/* Full Name */}
                                <div className="signup-field">
                                    <label className="signup-label">Full Name</label>
                                    <div className={`signup-input-wrap ${errors.fullName ? "error" : ""}`}>
                                        <span className="signup-input-icon">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                                            </svg>
                                        </span>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="signup-input"
                                        />
                                    </div>
                                    {errors.fullName && <span className="signup-error">{errors.fullName}</span>}
                                </div>

                                {/* Email + Phone row */}
                                <div className="signup-row">
                                    <div className="signup-field">
                                        <label className="signup-label">Email Address</label>
                                        <div className={`signup-input-wrap ${errors.email ? "error" : ""}`}>
                                            <span className="signup-input-icon">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                                    <polyline points="22,6 12,13 2,6" />
                                                </svg>
                                            </span>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="john@example.com"
                                                className="signup-input"
                                            />
                                        </div>
                                        {errors.email && <span className="signup-error">{errors.email}</span>}
                                    </div>

                                    <div className="signup-field">
                                        <label className="signup-label">Contact Number</label>
                                        <div className="signup-input-wrap">
                                            <span className="signup-input-icon">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.09 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11L8.91 10.6a16 16 0 0 0 6.49 6.49l1.43-1.43a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0 1 22 16.92z" />
                                                </svg>
                                            </span>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+1 (555) 000-0000"
                                                className="signup-input"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Passwords */}
                                <div className="signup-row">
                                    <div className="signup-field">
                                        <div className="signup-label-row">
                                            <label className="signup-label">Create Password</label>
                                        </div>
                                        <div className={`signup-input-wrap ${errors.password ? "error" : ""}`}>
                                            <span className="signup-input-icon">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                                </svg>
                                            </span>
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                placeholder="••••••••"
                                                className="signup-input"
                                            />
                                            <button
                                                type="button"
                                                className="signup-eye-btn"
                                                onClick={() => setShowPassword(!showPassword)}
                                                tabIndex={-1}
                                            >
                                                {showPassword ? (
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" /></svg>
                                                ) : (
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                                                )}
                                            </button>
                                        </div>
                                        {errors.password && <span className="signup-error">{errors.password}</span>}
                                    </div>

                                    <div className="signup-field">
                                        <div className="signup-label-row">
                                            <label className="signup-label">Confirm Password</label>
                                        </div>
                                        <div className={`signup-input-wrap ${errors.confirmPassword ? "error" : ""}`}>
                                            <span className="signup-input-icon">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </span>
                                            <input
                                                type={showConfirmPassword ? "text" : "password"}
                                                name="confirmPassword"
                                                value={formData.confirmPassword}
                                                onChange={handleChange}
                                                placeholder="••••••••"
                                                className="signup-input"
                                            />
                                            <button
                                                type="button"
                                                className="signup-eye-btn"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                tabIndex={-1}
                                            >
                                                {showConfirmPassword ? (
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" /></svg>
                                                ) : (
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                                                )}
                                            </button>
                                        </div>
                                        {errors.confirmPassword && <span className="signup-error">{errors.confirmPassword}</span>}
                                    </div>
                                </div>

                                {/* Terms */}
                                <div className="signup-terms">
                                    <label className="signup-checkbox-label">
                                        <input
                                            type="checkbox"
                                            name="agreeTerms"
                                            checked={formData.agreeTerms}
                                            onChange={handleChange}
                                            className="signup-checkbox"
                                        />
                                        <span className="signup-checkbox-custom" />
                                        <span className="signup-terms-text">
                                            I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
                                            <br />
                                            <span className="signup-terms-sub">By checking this, you consent to our data processing agreements.</span>
                                        </span>
                                    </label>
                                    {errors.agreeTerms && <span className="signup-error">{errors.agreeTerms}</span>}
                                </div>

                                {/* Submit Button */}
                                <button type="submit" className="signup-submit-btn">
                                    Sign Up
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </button>

                                {/* Divider */}
                                <div className="login-divider">
                                    <span>or continue with</span>
                                </div>

                                {/* Social Login */}
                                <div className="login-social-row">
                                    <button type="button" className="login-social-btn" onClick={() => alert(`Google signup as ${userType}`)}>
                                        <svg width="20" height="20" viewBox="0 0 24 24">
                                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                        </svg>
                                        Google
                                    </button>
                                    <button type="button" className="login-social-btn" onClick={() => alert(`LinkedIn signup as ${userType}`)}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A66C2">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                        LinkedIn
                                    </button>
                                </div>

                                {/* Login link */}
                                <p className="signup-login-link">
                                    Already have an account? <a href="/login" onClick={(e) => { e.preventDefault(); nav("/login"); }}>Log in here</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
