import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import heroTeam from "../assets/hero-team.png";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FAQItem from "../components/ui/FAQItem";
import {
    VideoIcon, ScreeningIcon, AnalyticsIcon, BiasIcon, LangIcon, ClockIcon,
    TeamIcon, CustomIcon, SecurityIcon, StarIcon, CheckIcon, ArrowRight,
    InviteIcon, AIIcon, RankIcon, HireIcon,
} from "../components/icons/Icons";

// ─── Data ─────────────────────────────────────────────────────────────────────
const faqs = [
    {
        q: "Is AI Hiring against certain kinds of backgrounds?",
        a: "No, our AI is designed to be inclusive and evaluate candidates based on relevant skills and qualifications, regardless of their background. We continuously audit our systems to minimize bias.",
    },
    {
        q: "Can I customize the interview questions?",
        a: "Absolutely! You can create fully custom question banks, set specific evaluation criteria, and tailor the interview flow to your role requirements.",
    },
    {
        q: "How do you handle data privacy and security?",
        a: "We take data privacy seriously. All candidate data is encrypted in transit and at rest, and we comply with GDPR, CCPA, and other major data protection regulations.",
    },
    {
        q: "How long does the AI assessment take?",
        a: "Typical AI assessments take between 15–45 minutes depending on the role complexity and number of questions configured.",
    },
    {
        q: "Can multiple hiring managers collaborate?",
        a: "Yes! Our collaborative hiring features allow multiple team members to review assessments, leave feedback, and make joint decisions.",
    },
];

const features9 = [
    { icon: <VideoIcon />, title: "AI Video Interviews", desc: "Conduct asynchronous AI-powered video interviews with automated language analysis that goes beyond keywords." },
    { icon: <ScreeningIcon />, title: "Instant Screening", desc: "Instantly rank the entire pool of candidates to easily remove unfit candidates from your pipeline." },
    { icon: <AnalyticsIcon />, title: "Advanced Analytics", desc: "Generate detailed candidate reports with rich scoring, sentiment analysis and rich interview dashboards." },
    { icon: <BiasIcon />, title: "Bias Reduction", desc: "AI anonymizes candidate evaluations to ensure objective, fair assessments across all applicants." },
    { icon: <LangIcon />, title: "Multi-Language Support", desc: "Conduct interviews in 30+ languages, reaching global candidates, reducing language barriers and more." },
    { icon: <ClockIcon />, title: "24/7 Availability", desc: "Candidates can interview on their own schedule, increasing completion rates by up to 3× compared to traditional methods." },
    { icon: <TeamIcon />, title: "Collaborative Hiring", desc: "Share assessments with your team, gather feedback, and make hiring decisions together efficiently." },
    { icon: <CustomIcon />, title: "Custom Question Banks", desc: "Create role-specific question libraries with follow-up prompts and custom evaluation rubrics for each position." },
    { icon: <SecurityIcon />, title: "Enterprise Security", desc: "Enterprise-grade encryption, SSO support, audit logs and compliance with GDPR, SOC 2, and HIPAA standards." },
];

// ─── LandingPage ──────────────────────────────────────────────────────────────
export default function LandingPage() {
    const navigate = useNavigate();
    const revealRefs = useRef([]);

    // Scroll-reveal observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
            { threshold: 0.1 }
        );
        revealRefs.current.forEach((r) => r && observer.observe(r));
        return () => observer.disconnect();
    }, []);

    const addReveal = (el) => {
        if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
    };

    return (
        <>
            {/* ── Navigation ──────────────────────────────────────────────────── */}
            <Navbar />

            {/* ── Hero ────────────────────────────────────────────────────────── */}
            <section className="hero">
                <div className="hero-left">
                    <div className="hero-badge animate-fadeup">
                        <span className="hero-badge-dot" />
                        Powered by Frostrek LLP
                    </div>

                    <h1 className="hero-h1 animate-fadeup delay-1">
                        Hire Smarter.<br />
                        <em>Interview Better.</em>
                    </h1>

                    <p className="hero-sub animate-fadeup delay-2">
                        Hiyring streamlines your hiring process with autonomous AI video interviews.
                        Screen thousands of candidates in minutes, not weeks, with scientifically
                        focused assessments.
                    </p>

                    <div className="hero-btns animate-fadeup delay-3">
                        <button className="btn-lg btn-lg-orange" onClick={() => navigate("/signup")}>
                            For Companies
                        </button>
                        <button className="btn-lg btn-lg-outline" onClick={() => navigate("/signup?type=candidate")}>
                            For Candidates
                        </button>
                    </div>

                    <div className="hero-social animate-fadeup delay-4">
                        <div className="hero-avatars">
                            {["A", "B", "C", "D"].map((l, i) => (
                                <div key={i} className="avatar">{l}</div>
                            ))}
                        </div>
                        <p className="hero-social-text">
                            4,500+ companies already using our platform
                        </p>
                    </div>
                </div>

                <div className="hero-right">
                    <div className="hero-img-wrap">
                        <img
                            src={heroTeam}
                            alt="Team collaborating in a modern office"
                        />
                    </div>
                </div>
            </section>

            {/* ── Features Strip ──────────────────────────────────────────────── */}
            <div className="features-strip">
                <div className="features-strip-title reveal" ref={addReveal}>
                    <p className="section-tag">Why Choose Us</p>
                    <h2 className="section-title">Streamlined, Scientific, Seamless</h2>
                    <p className="section-sub mx-auto">
                        We've streamlined every part of hiring so you can focus on building
                        meaningful relationships with your talent.
                    </p>
                </div>

                <div className="features-4">
                    {[
                        { icon: <InviteIcon />, title: "Invite Candidates", desc: "Upload your list of candidates and initiate AI video interviews." },
                        { icon: <AIIcon />, title: "AI Assessment", desc: "Candidates receive responses to your interview questions with AI analysis." },
                        { icon: <RankIcon />, title: "Smart Ranking", desc: "Score and rank candidate assessments and create shortlists accurately." },
                        { icon: <HireIcon />, title: "Hire the Best", desc: "Identify and confidently advance the most qualified candidates for further evaluation." },
                    ].map((f, i) => (
                        <div key={i} className="feature-item reveal" ref={addReveal}>
                            <div className="feature-icon-wrap">{f.icon}</div>
                            <h3 className="feature-title">{f.title}</h3>
                            <p className="feature-desc">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Stats Bar ───────────────────────────────────────────────────── */}
            <div className="stats-bar">
                {[
                    { num: "2.5M", suffix: "+", label: "Interviews Analyzed" },
                    { num: "85", suffix: "%", label: "Faster Time to Hire" },
                    { num: "60", suffix: "%", label: "Reduced Hiring Costs" },
                    { num: "98", suffix: "%", label: "Candidate Satisfaction" },
                ].map((s, i) => (
                    <div key={i} className="stat-item">
                        <div className="stat-num">{s.num}<span>{s.suffix}</span></div>
                        <div className="stat-label">{s.label}</div>
                    </div>
                ))}
            </div>

            {/* ── Everything You Need ──────────────────────────────────────────── */}
            <section className="everything">
                <div className="text-center reveal" ref={addReveal}>
                    <p className="section-tag">Features</p>
                    <h2 className="section-title">Everything you need to<br /><em>hire brilliantly</em></h2>
                    <p className="section-sub mx-auto">
                        Powerful tools and intelligent approaches designed to revolutionize every
                        step of your interview process.
                    </p>
                </div>

                <div className="features-9">
                    {features9.map((f, i) => (
                        <div key={i} className="feat-card reveal" ref={addReveal}>
                            <div className="feat-card-icon">{f.icon}</div>
                            <h3 className="feat-card-title">{f.title}</h3>
                            <p className="feat-card-desc">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Build World-Class Teams ──────────────────────────────────────── */}
            <section className="build-teams">
                <div className="build-teams-inner">
                    <div className="build-teams-left reveal" ref={addReveal}>
                        <p className="section-tag">FOR COMPANIES</p>
                        <h2 className="section-title">Build world-class<br />teams <em>faster</em></h2>
                        <p className="section-sub">
                            Stop wasting time on manual screening. Let AI identify your best candidates
                            while your team focuses on what matters most.
                        </p>
                        <button className="build-teams-btn" onClick={() => navigate("/signup")}>
                            Start Hiring Smarter <ArrowRight />
                        </button>
                    </div>

                    <div className="build-teams-right">
                        {[
                            {
                                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
                                label: "Reduce Time-to-Hire by 70%",
                                desc: "Automate initial screening and let AI handle the first round, dramatically cutting your hiring timeline.",
                            },
                            {
                                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
                                label: "Save 40+ Hours Weekly",
                                desc: "Free your HR team from repetitive interviews so they can focus on strategic hiring decisions.",
                            },
                            {
                                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14" /><path d="M4.93 4.93a10 10 0 0 0 0 14.14" /></svg>,
                                label: "Better Candidate Quality",
                                desc: "AI-powered evaluations identify top talent with higher accuracy than traditional screening methods.",
                            },
                            {
                                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
                                label: "Scale Effortlessly",
                                desc: "Interview 10 or 10,000 candidates with the same consistency and quality, without extra headcount.",
                            },
                        ].map((s, i) => (
                            <div key={i} className="build-stat-card reveal" ref={addReveal}>
                                <div className="build-stat-icon">{s.icon}</div>
                                <div className="build-stat-label">{s.label}</div>
                                <div className="build-stat-desc">{s.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Land Your Dream Job ──────────────────────────────────────────── */}
            <section className="dream-job">
                <div className="dream-job-inner">
                    <div className="dream-left reveal" ref={addReveal}>
                        {[
                            {
                                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>,
                                title: "Interview on Your Terms",
                                desc: "No more scheduling headaches. Take your interview anytime, anywhere at your convenience.",
                            },
                            {
                                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>,
                                title: "Get Instant Feedback",
                                desc: "Receive personalized insights on your performance and areas for improvement after every session.",
                            },
                            {
                                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
                                title: "Fair & Unbiased Process",
                                desc: "Every candidate gets the same opportunity. AI evaluates your skills, not your background.",
                            },
                            {
                                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>,
                                title: "Practice & Prepare",
                                desc: "Access practice interviews tailored to your target role and industry to sharpen your skills.",
                            },
                        ].map((c, i) => (
                            <div key={i} className="dream-card">
                                <div className="dream-card-icon">{c.icon}</div>
                                <div className="dream-card-title">{c.title}</div>
                                <div className="dream-card-desc">{c.desc}</div>
                            </div>
                        ))}
                    </div>

                    <div className="dream-right reveal" ref={addReveal}>
                        <p className="section-tag">FOR CANDIDATES</p>
                        <h2 className="section-title">Land your dream<br />job with <em>confidence</em></h2>
                        <p className="section-sub">
                            Prepare smarter, interview better, and get the feedback you need to stand
                            out from the competition.
                        </p>
                        <button className="dream-start-btn" onClick={() => navigate("/signup?type=candidate")}>
                            Start Practicing <ArrowRight />
                        </button>
                    </div>
                </div>
            </section>

            {/* ── Testimonials ────────────────────────────────────────────────── */}
            <section className="testimonials">
                <div className="testimonials-inner">
                    <div className="testimonials-left reveal" ref={addReveal}>
                        <p className="section-tag">Testimonials</p>
                        <h2 className="section-title">Trusted by Hiring Managers Everywhere</h2>
                        <p>
                            Join thousands of companies who are transforming their hiring process
                            with our AI-powered platform.
                        </p>
                    </div>

                    <div className="testimonials-cards">
                        {[
                            { quote: "Hiyring completely transformed our engineering recruitment. We cut first-round screening time by 70% while increasing quality substantially.", name: "Sarah Jenkins", role: "Head of Engineering, TechCorp", init: "S" },
                            { quote: "The AI feedback system helped me identify my weaknesses and improve dramatically. I landed my dream job at a top tech company!", name: "Marcus Lee", role: "Software Engineer", init: "M" },
                            { quote: "As a hiring manager, I used to spend 20+ hours per week on screening. Now I focus only on the top candidates. Game changer.", name: "Priya Shah", role: "VP of Talent, Fintech Inc", init: "P" },
                            { quote: "The bias-reduction features are impressive. We saw a much more diverse candidate pool advance through our first rounds.", name: "James O'Brien", role: "Chief People Officer, ScaleUp", init: "J" },
                        ].map((t, i) => (
                            <div key={i} className="testimonial-card reveal" ref={addReveal}>
                                <div className="testimonial-stars">
                                    {[1, 2, 3, 4, 5].map((s) => <StarIcon key={s} />)}
                                </div>
                                <p className="testimonial-quote">"{t.quote}"</p>
                                <div className="testimonial-author">
                                    <div className="testimonial-avatar">{t.init}</div>
                                    <div>
                                        <div className="testimonial-name">{t.name}</div>
                                        <div className="testimonial-role">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Pricing ─────────────────────────────────────────────────────── */}
            <section className="pricing">
                <div className="text-center reveal" ref={addReveal}>
                    <p className="section-tag">Pricing</p>
                    <h2 className="section-title">Transparent Plans for Every Stage</h2>
                    <p className="section-sub mx-auto">
                        From growing startups to enterprise organizations, we have the perfect plan.
                    </p>
                </div>

                <div className="pricing-cards">
                    {/* Starter */}
                    <div className="pricing-card reveal" ref={addReveal}>
                        <div className="pricing-tier">Starter</div>
                        <div className="pricing-name">Basic</div>
                        <div className="pricing-tagline">For early-stage employers</div>
                        <div className="pricing-price"><sup>$</sup>199<span style={{ fontSize: 16, color: "#999" }}>/mo</span></div>
                        <div className="pricing-price-sub">Up to 5 job postings</div>
                        <ul className="pricing-features">
                            {["5 active postings", "AI video screening", "Standard analytics", "Email support"].map((f, i) => (
                                <li key={i} className="pricing-feature">
                                    <span className="check"><CheckIcon /></span>{f}
                                </li>
                            ))}
                        </ul>
                        <button className="pricing-btn pricing-btn-outline" onClick={() => navigate("/signup?plan=starter")}>
                            Get Started
                        </button>
                    </div>

                    {/* Professional */}
                    <div className="pricing-card featured reveal" ref={addReveal}>
                        <div className="pricing-badge">Most Popular</div>
                        <div className="pricing-tier">Professional</div>
                        <div className="pricing-name">Pro</div>
                        <div className="pricing-tagline">Our most popular plan</div>
                        <div className="pricing-price"><sup>$</sup>499<span style={{ fontSize: 16, color: "#999" }}>/mo</span></div>
                        <div className="pricing-price-sub">Unlimited job postings</div>
                        <ul className="pricing-features">
                            {["Unlimited postings", "Advanced AI screening", "Priority support", "Collaborative hiring", "Advanced analytics", "ATS integrations"].map((f, i) => (
                                <li key={i} className="pricing-feature">
                                    <span className="check"><CheckIcon /></span>{f}
                                </li>
                            ))}
                        </ul>
                        <button className="pricing-btn pricing-btn-fill" onClick={() => navigate("/signup?plan=pro")}>
                            Choose Pro
                        </button>
                    </div>

                    {/* Enterprise */}
                    <div className="pricing-card reveal" ref={addReveal}>
                        <div className="pricing-tier">Enterprise</div>
                        <div className="pricing-name">Custom</div>
                        <div className="pricing-tagline">For scaling organizations</div>
                        <div className="pricing-price" style={{ fontSize: 36 }}>Custom</div>
                        <div className="pricing-price-sub">Contact for pricing</div>
                        <ul className="pricing-features">
                            {["Unlimited everything", "Dedicated Account Manager", "Custom Branding", "SSO & Security Suite", "SLA guarantee", "Custom integrations"].map((f, i) => (
                                <li key={i} className="pricing-feature">
                                    <span className="check"><CheckIcon /></span>{f}
                                </li>
                            ))}
                        </ul>
                        <button className="pricing-btn pricing-btn-outline" onClick={() => navigate("/contact")}>
                            Contact Sales
                        </button>
                    </div>
                </div>
            </section>

            {/* ── FAQ ─────────────────────────────────────────────────────────── */}
            <section className="faq">
                <div className="text-center reveal" ref={addReveal}>
                    <p className="section-tag">Support</p>
                    <h2 className="section-title">Frequently Asked Questions</h2>
                </div>
                <div className="faq-list">
                    {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
                </div>
            </section>

            {/* ── Footer ──────────────────────────────────────────────────────── */}
            <Footer />
        </>
    );
}
