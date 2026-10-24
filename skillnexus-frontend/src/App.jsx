import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";


/* =====================================================
   NAVBAR
===================================================== */

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <span className="logo-icon">✦</span>
        SkillNexus
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/dashboard">Dashboard</Link>

        <Link to="/skill-gap">Skills</Link>

        <Link to="/career-recommendations">
          Career Paths
        </Link>

        <Link to="/learning">Learning</Link>

        <Link to="/opportunities">Opportunities</Link>

        <Link to="/profile">Profile</Link>
        <Link to="/ai-career-advisor">
  AI Advisor
</Link>

        <Link to="/login" className="nav-login">
          Login
        </Link>
      </div>
    </nav>
  );
}


/* =====================================================
   HOME
===================================================== */

function Home() {
  return (
    <div className="nx-home">
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="nx-hero">

        <div className="nx-hero-bg nx-glow-one"></div>
        <div className="nx-hero-bg nx-glow-two"></div>
        <div className="nx-grid-bg"></div>

        <div className="nx-hero-content">

          <div className="nx-hero-left">

            <div className="nx-ai-pill">
              <span className="nx-pulse-dot"></span>
              ✨ AI-POWERED SKILL INTELLIGENCE
            </div>

            <h1>
              Discover Your Skills.
              <br />
              <span>Build Your Future.</span>
            </h1>

            <p>
              SkillNexus transforms your skills, career goals and
              learning journey into an intelligent roadmap for
              your future.
            </p>

            <div className="nx-hero-actions">

              <Link
                to="/onboarding"
                className="nx-primary-btn"
              >
                Get Started
                <span>→</span>
              </Link>

              <a
                href="#nx-features"
                className="nx-outline-btn"
              >
                Explore Platform
              </a>

            </div>

            <div className="nx-trust-row">

              <span>✓</span>
              Built for students & future professionals

            </div>

          </div>


          {/* HERO VISUAL */}

          <div className="nx-hero-visual">

            <div className="nx-orbit orbit-one"></div>
            <div className="nx-orbit orbit-two"></div>

            <div className="nx-floating nx-floating-left">
              <span className="nx-floating-icon">🎯</span>

              <div>
                <small>SKILL GAP</small>
                <strong>Identified</strong>
              </div>
            </div>


            <div className="nx-profile-card">

              <div className="nx-profile-top">

                <div>
                  <span>YOUR SKILL PROFILE</span>

                  <h3>
                    Career Readiness
                  </h3>
                </div>

                <div className="nx-score-ring">
                  <strong>78</strong>
                  <small>%</small>
                </div>

              </div>


              <div className="nx-main-progress">
                <div style={{ width: "78%" }}></div>
              </div>


              <div className="nx-skill-row">

                <div>
                  <span className="nx-mini-icon blue">
                    💻
                  </span>

                  <span>Programming</span>
                </div>

                <strong>85%</strong>

              </div>


              <div className="nx-skill-row">

                <div>
                  <span className="nx-mini-icon purple">
                    🧠
                  </span>

                  <span>Problem Solving</span>
                </div>

                <strong>72%</strong>

              </div>


              <div className="nx-skill-row">

                <div>
                  <span className="nx-mini-icon orange">
                    🤝
                  </span>

                  <span>Communication</span>
                </div>

                <strong>68%</strong>

              </div>


              <div className="nx-ai-insight">

                <div className="nx-insight-icon">
                  ✨
                </div>

                <div>
                  <strong>AI Insight</strong>

                  <p>
                    Strong technical foundation.
                    Improve communication to become more
                    career-ready.
                  </p>
                </div>

              </div>

            </div>


            <div className="nx-floating nx-floating-right">

              <span className="nx-floating-icon">
                🚀
              </span>

              <div>
                <small>CAREER PATH</small>
                <strong>Recommended</strong>
              </div>

            </div>


            <div className="nx-hero-orb">
              <span>✦</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section
        className="nx-features"
        id="nx-features"
      >

        <div className="nx-section-heading">

          <span>
            WHAT SKILLNEXUS OFFERS
          </span>

          <h2>
            Everything you need
            <br />
            <em>to grow your career.</em>
          </h2>

          <p>
            One intelligent platform to understand your skills,
            close your gaps and discover what's next.
          </p>

        </div>


        <div className="nx-feature-grid">


          <div className="nx-feature-card">

            <div className="nx-feature-number">
              01
            </div>

            <div className="nx-feature-icon blue">
              🎯
            </div>

            <h3>
              Skill Analysis
            </h3>

            <p>
              Understand your current abilities and measure
              your career readiness.
            </p>

            <Link to="/skill-gap">
              Analyze My Skills
              <span>→</span>
            </Link>

          </div>


          <div className="nx-feature-card">

            <div className="nx-feature-number">
              02
            </div>

            <div className="nx-feature-icon purple">
              🧩
            </div>

            <h3>
              Skill Gap Detection
            </h3>

            <p>
              Discover exactly which skills are missing for
              your target career.
            </p>

            <Link to="/skill-gap">
              Find My Gaps
              <span>→</span>
            </Link>

          </div>


          <div className="nx-feature-card">

            <div className="nx-feature-number">
              03
            </div>

            <div className="nx-feature-icon green">
              📚
            </div>

            <h3>
              Smart Learning
            </h3>

            <p>
              Follow personalized learning recommendations
              based on your career goals.
            </p>

            <Link to="/learning">
              Start Learning
              <span>→</span>
            </Link>

          </div>


          <div className="nx-feature-card">

            <div className="nx-feature-number">
              04
            </div>

            <div className="nx-feature-icon orange">
              🚀
            </div>

            <h3>
              Career Opportunities
            </h3>

            <p>
              Discover opportunities that align with your
              skills and career profile.
            </p>

            <Link to="/opportunities">
              Explore Opportunities
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <section className="nx-process">

        <div className="nx-process-inner">

          <div className="nx-process-heading">

            <span>
              HOW IT WORKS
            </span>

            <h2>
              Your journey
              <br />
              <em>starts here.</em>
            </h2>

            <p>
              From knowing where you are to discovering where
              you can go.
            </p>

          </div>


          <div className="nx-process-steps">

            <div className="nx-step">

              <div className="nx-step-number">
                01
              </div>

              <div>
                <h3>
                  Tell Us About Yourself
                </h3>

                <p>
                  Share your education, skills and career goals.
                </p>
              </div>

            </div>


            <div className="nx-step-line"></div>


            <div className="nx-step">

              <div className="nx-step-number purple">
                02
              </div>

              <div>
                <h3>
                  Analyze Your Skills
                </h3>

                <p>
                  SkillNexus identifies your strengths and
                  skill gaps.
                </p>
              </div>

            </div>


            <div className="nx-step-line"></div>


            <div className="nx-step">

              <div className="nx-step-number green">
                03
              </div>

              <div>
                <h3>
                  Get Your Path
                </h3>

                <p>
                  Follow a personalized roadmap toward your
                  target career.
                </p>
              </div>

            </div>

          </div>


          <div className="nx-career-visual">

            <div className="nx-road road-one"></div>
            <div className="nx-road road-two"></div>
            <div className="nx-road road-three"></div>

            <div className="nx-road-user">
              🎓
            </div>

            <div className="nx-road-tag tag-one">
              Better Skills
            </div>

            <div className="nx-road-tag tag-two">
              Higher Opportunities
            </div>

            <div className="nx-road-tag tag-three">
              Dream Career
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SKILLNEXUS ECOSYSTEM
      ===================================================== */}

      <section className="nx-ecosystem">

        <div className="nx-ecosystem-stars"></div>

        <div className="nx-section-heading dark-heading">

          <span>
            ONE PLATFORM. MULTIPLE ROLES.
          </span>

          <h2>
            The SkillNexus
            <br />
            <em>Ecosystem.</em>
          </h2>

          <p>
            One intelligence layer connecting students and
            faculty through skills, learning and career growth.
          </p>

        </div>


        <div className="nx-ecosystem-map">


          {/* STUDENT */}

          <div className="nx-ecosystem-side student-side">

            <div className="nx-person-orb student-orb">
              🎓
            </div>

            <div className="nx-side-content">

              <span>
                FOR STUDENTS
              </span>

              <h3>
                Discover
                <br />
                your potential.
              </h3>

              <p>
                Analyze skills, identify gaps and build
                your personalized career path.
              </p>

              <Link to="/login">
                Enter Student Portal
                <b>→</b>
              </Link>

            </div>

          </div>

{/* CENTRAL AI & INDUSTRY PORTAL */}
          <div className="nx-ai-core">
            <div className="nx-core-ring ring-one"></div>
            <div className="nx-core-ring ring-two"></div>

            <div className="nx-core-circle">
              <span className="nx-core-symbol">✦</span>
              <div className="nx-core-text-main">
                SkillNexus <span>AI</span>
              </div>
              <p className="nx-core-text-sub">Skill Intelligence</p>
            </div>

            <div className="nx-core-tags">
              Growth <span>•</span> Learning <span>•</span> Career
            </div>
          </div>

          {/* Industry Login placed directly below the circle */}
          <a href="/industry-login" className="nx-portal-link industry-portal-link">
            Enter Industry Portal →
          </a>


          {/* FACULTY */}

          <div className="nx-ecosystem-side faculty-side">

            <div className="nx-person-orb faculty-orb">
              👩‍🏫
            </div>

            <div className="nx-side-content">

              <span>
                FOR FACULTY
              </span>

              <h3>
                Empower
                <br />
                your students.
              </h3>

              <p>
                Monitor skill gaps, track learning progress
                and understand student development.
              </p>

              <Link to="/faculty-login">
                Enter Faculty Portal
                <b>→</b>
              </Link>

            </div>

          </div>
          {/* INDUSTRY */}

<div className="nx-ecosystem-side industry-side">

  <div className="nx-person-orb industry-orb">
    🏢
  </div>

  <div className="nx-side-content">

    <span>
      FOR INDUSTRY
    </span>

    <h3>
      Connect with
      <br />
      future talent.
    </h3>

    <p>
      Post internships, discover skilled students
      and collaborate with academia.
    </p>

    <Link to="/industry-login">
      Enter Industry Portal
      <b>→</b>
    </Link>

  </div>

</div>


          {/* CONNECTING LINES */}

          <div className="nx-connection connection-left"></div>
          <div className="nx-connection connection-right"></div>

        </div>


        {/* PLATFORM STATS */}

        <div className="nx-stats">

          <div>
            <strong>AI</strong>
            <span>Powered Intelligence</span>
          </div>

          <div>
            <strong>25+</strong>
            <span>Career Paths</span>
          </div>

          <div>
            <strong>15+</strong>
            <span>Skills Per Career</span>
          </div>

          <div>
            <strong>360°</strong>
            <span>Student Development</span>
          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="nx-final-cta">

        <div className="nx-final-glow"></div>

        <span>
          YOUR FUTURE STARTS WITH ONE STEP
        </span>

        <h2>
          Ready to discover
          <br />
          <em>what you're capable of?</em>
        </h2>

        <p>
          Let SkillNexus turn your skills into a smarter
          career journey.
        </p>

        <Link
          to="/onboarding"
          className="nx-primary-btn nx-final-btn"
        >
          Start Your Journey
          <span>→</span>
        </Link>

      </section>


      {/* FOOTER */}

      <footer className="nx-footer">

        <div className="nx-footer-logo">
          <span>✦</span>
          SkillNexus
        </div>

        <p>
          Smarter Skills. Brighter Futures.
        </p>

      </footer>

    </div>
  );
}

/* =====================================================
   ONBOARDING
===================================================== */
function Onboarding() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [education, setEducation] = useState("");
  const [careerGoal, setCareerGoal] = useState("");
  const [skills, setSkills] = useState("");
  const [loading, setLoading] = useState(false);

  const careerOptions = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Python Developer",
    "Java Developer",
    "Data Analyst",
    "Data Scientist",
    "AI/ML Engineer",
    "DevOps Engineer",
    "Cybersecurity Analyst",
    "Software Engineer",
    "Mobile App Developer",
    "Android Developer",
    "Data Engineer",
    "Machine Learning Engineer",
    "Generative AI Engineer",
    "Cloud Engineer",
    "Cloud Architect",
    "Security Engineer",
    "Ethical Hacker",
    "SOC Analyst",
    "UI/UX Designer",
    "Product Designer",
    "Business Analyst",
    "BI Analyst",
  ];

  const handleSignup = async () => {
    if (
      !name ||
      !email ||
      !password ||
      !education ||
      !careerGoal ||
      !skills
    ) {
      alert("Please fill all the fields before continuing.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);

    const signupData = {
      name,
      email,
      password,
      education,
      career_goal: careerGoal,
      skills,
    };

    try {
      const response = await fetch(
        "http://127.0.0.1:5000/api/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signupData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Signup failed.");
        setLoading(false);
        return;
      }

      localStorage.setItem(
        "skillnexusStudent",
        JSON.stringify({
          name,
          email,
          education,
          careerGoal,
          skills,
          student_id: data.student_id,
        })
      );

      alert("Account created successfully! 🎉");

      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Signup error:", error);

      alert(
        "Could not connect to SkillNexus backend. Please make sure the Flask server is running."
      );
    }

    setLoading(false);
  };

  return (
    <div className="app-page">
      <Navbar />

      <div className="page-container">

        <div className="page-header">
          <span className="page-badge">
            GET STARTED
          </span>

          <h1>
            Create Your SkillNexus Account
          </h1>

          <p>
            Tell us about yourself and start your personalized career journey.
          </p>
        </div>

        <div className="form-card">

          <label>Your Name</label>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Create a password (minimum 6 characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Education</label>

          <input
            type="text"
            placeholder="e.g. B.Tech Computer Science"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          />

          <label>Career Goal</label>

          <select
            value={careerGoal}
            onChange={(e) => setCareerGoal(e.target.value)}
          >
            <option value="">
              Select your target career
            </option>

            {careerOptions.map((career) => (
              <option key={career} value={career}>
                {career}
              </option>
            ))}
          </select>

          <label>Current Skills</label>

          <textarea
            placeholder="e.g. Python, Java, HTML, CSS..."
            rows="4"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          ></textarea>

          <button
            className="primary-btn form-btn"
            type="button"
            onClick={handleSignup}
            disabled={loading}
          >
            {loading
              ? "Creating Account..."
              : "Create Account →"}
          </button>

          <p className="form-footer">
            Already have an account?{" "}
            <Link to="/login">
              Login
            </Link>
          </p>

        </div>

      </div>
    </div>
  );
}
/* =====================================================
   LOGIN
===================================================== */

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:5000/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Login failed.");
        setLoading(false);
        return;
      }

      // Save logged-in student
      localStorage.setItem(
        "skillnexusStudent",
        JSON.stringify({
          name: data.student.name,
          email: data.student.email,
          education: data.student.education,
          careerGoal: data.student.career_goal,
          skills: data.student.skills,
          student_id: data.student.student_id,
        })
      );

      alert("Login successful! 🎉");

      window.location.href = "/dashboard";

    } catch (error) {
      console.error("Login error:", error);

      alert(
        "Could not connect to SkillNexus backend. Please make sure the Flask server is running."
      );
    }

    setLoading(false);
  };

  return (
    <div className="app-page">
      <Navbar />

      <div className="page-container">

        <div className="form-card login-card">

          <div className="page-header">

            <span className="page-badge">
              WELCOME BACK
            </span>

            <h1>
              Login to SkillNexus
            </h1>

            <p>
              Continue your career development journey.
            </p>

          </div>

          <label>
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="primary-btn form-btn"
            type="button"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login →"}
          </button>

          <p className="form-footer">
            Don't have an account?{" "}
            <Link to="/onboarding">
              Get Started
            </Link>
          </p>

        </div>

      </div>
    </div>
  );
}
// =========================================================
// INDUSTRY DASHBOARD
// =========================================================
function IndustryDashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const storedIndustry =
      localStorage.getItem("skillnexusIndustry");

    if (!storedIndustry) {
      setError("Please login as an industry first.");
      setLoading(false);
      return;
    }

    let industry;

    try {
      industry = JSON.parse(storedIndustry);
    } catch {
      setError("Invalid industry login data.");
      setLoading(false);
      return;
    }

    const industryId =
      industry.industry_id ||
      industry.id ||
      industry.industry?.id;

    if (!industryId) {
      setError("Industry ID not found.");
      setLoading(false);
      return;
    }

    fetch(
      `http://127.0.0.1:5000/api/industry/dashboard/${industryId}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status !== "success") {
          throw new Error(
            data.message ||
              "Unable to load industry dashboard."
          );
        }

        setDashboard(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="industry-dashboard-page">
        <div className="industry-dashboard-loading">
          Loading Industry Dashboard...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="industry-dashboard-page">
        <div className="industry-dashboard-error">
          <h2>Unable to load dashboard</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  const industry = dashboard.industry;
  const statistics = dashboard.statistics;

  return (
    <div className="industry-dashboard-page">

      {/* =========================
          DASHBOARD HEADER
          ========================= */}

      <div className="industry-dashboard-header">

        <div>
          <p className="industry-dashboard-label">
            INDUSTRY PORTAL
          </p>

          <h1>
            Welcome, {industry.company_name} 👋
          </h1>

          <p>
            Manage your company profile, opportunities and
            future talent connections through SkillNexus.
          </p>
        </div>

        <div className="industry-type-badge">
          {industry.industry_type}
        </div>

      </div>


      {/* =========================
          STATISTICS
          ========================= */}

      <div className="industry-stat-grid">

        <div className="industry-stat-card">

          <div className="industry-stat-icon">
            💼
          </div>

          <div>
            <span>Opportunities</span>
            <strong>
              {statistics.opportunities}
            </strong>
          </div>

        </div>


        <div className="industry-stat-card">

          <div className="industry-stat-icon">
            📩
          </div>

          <div>
            <span>Applications</span>
            <strong>
              {statistics.applications}
            </strong>
          </div>

        </div>


        <div className="industry-stat-card">

          <div className="industry-stat-icon">
            👥
          </div>

          <div>
            <span>Matching Candidates</span>
            <strong>
              {statistics.matching_candidates}
            </strong>
          </div>

        </div>

      </div>


      {/* =========================
          MAIN DASHBOARD GRID
          ========================= */}

      <div className="industry-dashboard-grid">


        {/* =========================
            COMPANY PROFILE
            ========================= */}

        <div className="industry-dashboard-card">

          <div className="industry-card-heading">

            <div>

              <p>
                COMPANY PROFILE
              </p>

              <h2>
                {industry.company_name}
              </h2>

            </div>

            <span className="industry-profile-symbol">
              🏢
            </span>

          </div>


          <div className="industry-profile-details">

            <div>
              <span>Email</span>

              <strong>
                {industry.email}
              </strong>
            </div>


            <div>
              <span>Industry</span>

              <strong>
                {industry.industry_type}
              </strong>
            </div>


            <div>
              <span>Location</span>

              <strong>
                {industry.location || "Not added"}
              </strong>
            </div>


            <div>
              <span>Website</span>

              <strong>
                {industry.website || "Not added"}
              </strong>
            </div>

          </div>


          {industry.about_company && (
            <div className="industry-about">

              <span>
                About Company
              </span>

              <p>
                {industry.about_company}
              </p>

            </div>
          )}

        </div>


        {/* =========================
            QUICK ACTIONS
            ========================= */}

        <div className="industry-dashboard-card">

          <div className="industry-card-heading">

            <div>

              <p>
                QUICK ACTIONS
              </p>

              <h2>
                Build your talent pipeline
              </h2>

            </div>

            <span className="industry-profile-symbol">
              ✦
            </span>

          </div>


          <div className="industry-action-list">


            {/* =========================
                POST OPPORTUNITY
                ========================= */}

            <button
              className="industry-action-btn"
              onClick={() =>
                window.location.href =
                  "/industry-post-opportunity"
              }
            >

              <span>
                ＋
              </span>

              <div>

                <strong>
                  Post Opportunity
                </strong>

                <small>
                  Share internships, jobs or projects.
                </small>

              </div>

            </button>
<button
  className="industry-action-btn"
  onClick={() =>
    window.location.href = "/industry-opportunities"
  }
>
  <span>▤</span>

  <div>
    <strong>
      View Posted Opportunities
    </strong>

    <small>
      Manage internships, jobs and projects posted by your company.
    </small>
  </div>
</button>

            {/* =========================
                EDIT PROFILE
                ========================= */}

            <button
              className="industry-action-btn"
              onClick={() =>
                alert(
                  "Profile editing module coming next."
                )
              }
            >

              <span>
                ✎
              </span>

              <div>

                <strong>
                  Edit Company Profile
                </strong>

                <small>
                  Keep your organization information updated.
                </small>

              </div>

            </button>


            {/* =========================
                FIND CANDIDATES
                ========================= */}

            <button
              className="industry-action-btn"
              onClick={() =>
                alert(
                  "Candidate matching module coming next."
                )
              }
            >

              <span>
                ⌕
              </span>

              <div>

                <strong>
                  Find Matching Candidates
                </strong>

                <small>
                  Discover students based on skills.
                </small>

              </div>

            </button>


          </div>

        </div>

      </div>


      {/* =========================
          BOTTOM BANNER
          ========================= */}

      <div className="industry-dashboard-banner">

        <div>

          <span className="industry-banner-icon">
            ✦
          </span>

          <div>

            <h3>
              Connect skills with opportunities
            </h3>

            <p>
              SkillNexus helps industries discover students
              based on skills, career interests and development.
            </p>

          </div>

        </div>

        <span className="industry-banner-tag">
          SkillNexus Industry
        </span>

      </div>

    </div>
  );
}
function IndustryPostOpportunity() {
  const [formData, setFormData] = useState({
    title: "",
    opportunity_type: "",
    required_skills: "",
    description: "",
    location: "",
    application_link: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage("");
    setError("");

    if (
      !formData.title.trim() ||
      !formData.opportunity_type.trim() ||
      !formData.required_skills.trim()
    ) {
      setError(
        "Title, opportunity type and required skills are required."
      );
      return;
    }

    const storedIndustry =
      localStorage.getItem("skillnexusIndustry");

    if (!storedIndustry) {
      setError("Please login as an industry first.");
      return;
    }

    let industry;

    try {
      industry = JSON.parse(storedIndustry);
    } catch {
      setError("Invalid industry login data.");
      return;
    }

    const industryId =
      industry.id ||
      industry.industry_id ||
      industry.industry?.id;

    if (!industryId) {
      setError("Industry ID not found.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:5000/api/industry/opportunities",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            industry_id: industryId,
            title: formData.title.trim(),
            opportunity_type:
              formData.opportunity_type.trim(),
            required_skills:
              formData.required_skills.trim(),
            description:
              formData.description.trim(),
            location:
              formData.location.trim(),
            application_link:
              formData.application_link.trim()
          })
        }
      );

      const data = await response.json();

      if (!response.ok || data.status !== "success") {
        throw new Error(
          data.message || "Unable to post opportunity."
        );
      }

      setMessage(
        "Opportunity posted successfully!"
      );

      setFormData({
        title: "",
        opportunity_type: "",
        required_skills: "",
        description: "",
        location: "",
        application_link: ""
      });

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="industry-post-page">

      <div className="industry-post-header">

        <div>
          <p className="industry-dashboard-label">
            INDUSTRY PORTAL
          </p>

          <h1>Post an Opportunity</h1>

          <p>
            Share internships, jobs, projects and other
            opportunities with students on SkillNexus.
          </p>
        </div>

        <Link
          to="/industry-dashboard"
          className="industry-back-btn"
        >
          ← Dashboard
        </Link>

      </div>

      <div className="industry-post-card">

        {error && (
          <div className="industry-form-error">
            {error}
          </div>
        )}

        {message && (
          <div className="industry-form-success">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="industry-form-group">
            <label>
              Opportunity Title *
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Frontend Developer Intern"
            />
          </div>

          <div className="industry-form-row">

            <div className="industry-form-group">
              <label>
                Opportunity Type *
              </label>

              <select
                name="opportunity_type"
                value={formData.opportunity_type}
                onChange={handleChange}
              >
                <option value="">
                  Select opportunity type
                </option>

                <option value="Internship">
                  Internship
                </option>

                <option value="Job">
                  Job
                </option>

                <option value="Project">
                  Project
                </option>

                <option value="Training">
                  Training
                </option>
              </select>
            </div>

            <div className="industry-form-group">
              <label>
                Location
              </label>

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Remote / Pune"
              />
            </div>

          </div>

          <div className="industry-form-group">

            <label>
              Required Skills *
            </label>

            <input
              type="text"
              name="required_skills"
              value={formData.required_skills}
              onChange={handleChange}
              placeholder="e.g. HTML, CSS, JavaScript, React"
            />

            <small className="industry-input-help">
              Separate multiple skills using commas.
            </small>

          </div>

          <div className="industry-form-group">

            <label>
              Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the opportunity, responsibilities and what students will learn..."
              rows="6"
            />

          </div>

          <div className="industry-form-group">

            <label>
              Application Link
            </label>

            <input
              type="url"
              name="application_link"
              value={formData.application_link}
              onChange={handleChange}
              placeholder="https://example.com/apply"
            />

          </div>

          <button
            type="submit"
            className="industry-submit-btn"
            disabled={loading}
          >
            {loading
              ? "Posting Opportunity..."
              : "Post Opportunity →"}
          </button>

        </form>

      </div>

    </div>
  );
}
function IndustryOpportunities() {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const storedIndustry = localStorage.getItem("skillnexusIndustry");

    if (!storedIndustry) {
      setError("Please login as an industry first.");
      setLoading(false);
      return;
    }

    let industry;

    try {
      industry = JSON.parse(storedIndustry);
    } catch {
      setError("Invalid industry login data.");
      setLoading(false);
      return;
    }

    const industryId =
      industry.id ||
      industry.industry_id ||
      industry.industry?.id;

    if (!industryId) {
      setError("Industry ID not found. Please login again.");
      setLoading(false);
      return;
    }

    fetch(
      `http://127.0.0.1:5000/api/industry/opportunities/${industryId}`
    )
      .then(async (response) => {
        const data = await response.json();

        if (!response.ok || data.status !== "success") {
          throw new Error(
            data.message || "Unable to load opportunities."
          );
        }

        return data;
      })
      .then((data) => {
        setOpportunities(data.opportunities || []);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const getApplicationUrl = (url) => {
    if (!url) return "";

    const trimmedUrl = url.trim();

    if (/^https?:\/\//i.test(trimmedUrl)) {
      return trimmedUrl;
    }

    return `https://${trimmedUrl}`;
  };

  return (
    <div className="industry-post-page">
      <div className="industry-post-header">
        <div>
          <p className="industry-dashboard-label">
            INDUSTRY PORTAL
          </p>

          <h1>Posted Opportunities</h1>

          <p>
            View the internships, jobs and projects posted by your company.
          </p>
        </div>

        <Link
          to="/industry-dashboard"
          className="industry-back-btn"
        >
          ← Dashboard
        </Link>
      </div>

      <div className="industry-post-card">
        {loading && (
          <p>Loading opportunities...</p>
        )}

        {error && (
          <div className="industry-form-error">
            {error}
          </div>
        )}

        {!loading && !error && opportunities.length === 0 && (
          <div>
            <h3>No opportunities posted yet</h3>

            <p>
              Post your first opportunity to connect with students.
            </p>

            <Link
              to="/industry-post-opportunity"
              className="industry-back-btn"
            >
              + Post Opportunity
            </Link>
          </div>
        )}

        {!loading && !error && opportunities.length > 0 && (
          <>
            <h2>
              Your Opportunities ({opportunities.length})
            </h2>

            <div className="industry-opportunity-list">
              {opportunities.map((opportunity) => (
                <div
                  className="industry-opportunity-card"
                  key={opportunity.id}
                >
                  <div className="industry-opportunity-heading">
                    <div>
                      <h3>{opportunity.title}</h3>
                      <p>{opportunity.company}</p>
                    </div>

                    <span className="industry-type-badge">
                      {opportunity.opportunity_type}
                    </span>
                  </div>

                  <div className="industry-opportunity-details">
                    <p>
                      <strong>Required Skills:</strong>{" "}
                      {opportunity.required_skills}
                    </p>

                    <p>
                      <strong>Location:</strong>{" "}
                      {opportunity.location || "Not specified"}
                    </p>

                    <p>
                      <strong>Description:</strong>{" "}
                      {opportunity.description || "No description provided."}
                    </p>
                  </div>

                  {opportunity.application_link && (
                    <a
                      href={getApplicationUrl(opportunity.application_link)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="industry-application-link"
                    >
                      Application Link ↗
                    </a>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
/* =====================================================
   DASHBOARD
===================================================== */

function Dashboard() {
  const savedData = localStorage.getItem("skillnexusStudent");
  const studentData = savedData ? JSON.parse(savedData) : null;

  const [readiness, setReadiness] = useState(0);
  const [skillGaps, setSkillGaps] = useState(0);
  const [learningProgress, setLearningProgress] = useState(0);
  const [opportunityCount, setOpportunityCount] = useState(0);

  const [missingSkills, setMissingSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  const studentId = studentData?.student_id;

  useEffect(() => {
    const loadDashboardData = async () => {
      if (!studentId) {
        setLoading(false);
        return;
      }

      try {
        // 1. Get skill gap data
        const skillResponse = await fetch(
          `http://127.0.0.1:5000/api/skill-gap/${studentId}`
        );

        const skillData = await skillResponse.json();

        if (skillResponse.ok) {
          setReadiness(skillData.match_percentage || 0);
          setSkillGaps(
            skillData.missing_skills?.length || 0
          );
          setMissingSkills(
            skillData.missing_skills || []
          );
        }

        // 2. Get learning progress
        const progressResponse = await fetch(
          `http://127.0.0.1:5000/api/learning-progress/${studentId}`
        );

        const progressData =
          await progressResponse.json();

        if (progressResponse.ok) {
          const completedWeeks =
            progressData.completed_weeks || [];

          const totalWeeks = 6;

          const progress =
            totalWeeks > 0
              ? Math.round(
                  (completedWeeks.length / totalWeeks) * 100
                )
              : 0;

          setLearningProgress(progress);
        }

        // 3. Get opportunities
        const opportunityResponse = await fetch(
          `http://127.0.0.1:5000/api/opportunities/${studentId}`
        );

        const opportunityData =
          await opportunityResponse.json();

        if (opportunityResponse.ok) {
          setOpportunityCount(
            opportunityData.opportunities?.length || 0
          );
        }

      } catch (error) {
        console.error(
          "Dashboard data loading error:",
          error
        );
      }

      setLoading(false);
    };

    loadDashboardData();
  }, [studentId]);

  return (
    <div className="app-page">
      <Navbar />

      <div className="page-container">

        {/* HEADER */}

        <div className="page-header">

          <span className="page-badge">
            YOUR DASHBOARD
          </span>

          <h1>
            Welcome, {studentData?.name || "Student"} 👋
          </h1>

          <p>
            Track your skills, learning progress and career
            opportunities in one place.
          </p>

        </div>


        {/* LOADING */}

        {loading ? (

          <div className="form-card">
            <h2>
              Loading your dashboard...
            </h2>

            <p style={{ marginTop: "10px" }}>
              Fetching your latest SkillNexus data.
            </p>
          </div>

        ) : !studentId ? (

          <div className="form-card">

            <h2>
              Create Your Profile
            </h2>

            <p style={{ marginTop: "10px" }}>
              Create your SkillNexus profile to see your
              personalized dashboard.
            </p>

            <Link
              to="/onboarding"
              className="primary-btn form-btn"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none"
              }}
            >
              Get Started →
            </Link>

          </div>

        ) : (

          <>

            {/* STATS */}

            <div className="feature-grid">

              {/* CAREER READINESS */}

              <div className="feature-card">

                <div className="feature-icon blue-icon">
                  🎯
                </div>

                <h3>
                  Career Readiness
                </h3>

                <h2>
                  {readiness}%
                </h2>

                <p>
                  Your current skill match for your target
                  career.
                </p>

              </div>


              {/* SKILL GAPS */}

              <div className="feature-card">

                <div className="feature-icon orange-icon">
                  ⚠️
                </div>

                <h3>
                  Skill Gaps
                </h3>

                <h2>
                  {skillGaps}
                </h2>

                <p>
                  Skills you still need to develop.
                </p>

              </div>


              {/* LEARNING */}

              <div className="feature-card">

                <div className="feature-icon purple-icon">
                  📚
                </div>

                <h3>
                  Learning Progress
                </h3>

                <h2>
                  {learningProgress}%
                </h2>

                <p>
                  Progress through your personalized roadmap.
                </p>

              </div>


              {/* OPPORTUNITIES */}

              <div className="feature-card">

                <div className="feature-icon blue-icon">
                  💼
                </div>

                <h3>
                  Opportunities
                </h3>

                <h2>
                  {opportunityCount}
                </h2>

                <p>
                  Internships and jobs available for you.
                </p>

              </div>

            </div>


            {/* CAREER SECTION */}

            <div
              className="form-card"
              style={{ marginTop: "25px" }}
            >

              <h2>
                🎯 Your Career Goal
              </h2>

              <h3
                style={{
                  marginTop: "12px",
                  color: "#4f46e5"
                }}
              >
                {studentData?.careerGoal ||
                  "Not specified"}
              </h3>

              <p style={{ marginTop: "10px" }}>
                SkillNexus is using your career goal to
                personalize your skill analysis, learning
                roadmap and opportunities.
              </p>

            </div>


            {/* SKILL GAPS */}

            <div
              className="form-card"
              style={{ marginTop: "25px" }}
            >

              <h2>
                ⚠️ Skills To Focus On
              </h2>

              {missingSkills.length > 0 ? (

                <div style={{ marginTop: "18px" }}>

                  {missingSkills.map((skill) => (

                    <div
                      key={skill}
                      style={{
                        display: "inline-block",
                        margin: "5px",
                        padding: "9px 14px",
                        borderRadius: "20px",
                        background: "#fff7ed",
                        color: "#c2410c",
                        border: "1px solid #fed7aa",
                        fontWeight: "600",
                        fontSize: "14px"
                      }}
                    >
                      {skill}
                    </div>

                  ))}

                </div>

              ) : (

                <p style={{ marginTop: "12px" }}>
                  🎉 No major skill gaps detected for your
                  current career goal.
                </p>

              )}

            </div>


            {/* QUICK ACTIONS */}

            <div className="section-heading dashboard-section">

              <span>
                QUICK ACTIONS
              </span>

              <h2>
                Continue Your Journey
              </h2>

              <p>
                Take the next step toward your career goal.
              </p>

            </div>


            <div className="feature-grid">

              <div className="feature-card">

                <div className="feature-icon blue-icon">
                  🧠
                </div>

                <h3>
                  Analyze Skills
                </h3>

                <p>
                  Re-analyze your skills and discover new
                  skill gaps.
                </p>

                <Link
                  to="/skill-gap"
                  className="primary-btn form-btn"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none"
                  }}
                >
                  Analyze Skills →
                </Link>

              </div>


              <div className="feature-card">

                <div className="feature-icon purple-icon">
                  📚
                </div>

                <h3>
                  Learning Roadmap
                </h3>

                <p>
                  Continue learning the skills required for
                  your career.
                </p>

                <Link
                  to="/learning"
                  className="primary-btn form-btn"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none"
                  }}
                >
                  Continue Learning →
                </Link>

              </div>


              <div className="feature-card">

                <div className="feature-icon blue-icon">
                  💼
                </div>

                <h3>
                  Find Opportunities
                </h3>

                <p>
                  Explore internships and jobs matched with
                  your skills.
                </p>

                <Link
                  to="/opportunities"
                  className="primary-btn form-btn"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none"
                  }}
                >
                  Explore Jobs →
                </Link>

              </div>

            </div>

          </>

        )}

      </div>
    </div>
  );
}
function SkillGap() {
  const savedData = localStorage.getItem("skillnexusStudent");

  const studentData = savedData
    ? JSON.parse(savedData)
    : null;

  const [skills, setSkills] = useState(studentData?.skills || "");
  const [targetCareer, setTargetCareer] = useState(
    studentData?.careerGoal || ""
  );

  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (skills.trim() === "" || targetCareer.trim() === "") {
      alert("Please enter your skills and target career.");
      return;
    }

    const studentId = studentData?.student_id;

    if (!studentId) {
      alert(
        "Student ID not found. Please create your profile again from Onboarding."
      );
      return;
    }

    setLoading(true);

    try {
      // Update latest skills and career goal in backend first
      const updateResponse = await fetch(
        `http://127.0.0.1:5000/api/students/${studentId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: studentData.name,
            email: studentData.email || "",
            education: studentData.education,
            career_goal: targetCareer,
            skills: skills,
          }),
        }
      );

      const updateData = await updateResponse.json();

      if (!updateResponse.ok) {
        alert(updateData.message || "Could not update student data.");
        setLoading(false);
        return;
      }

      // Get skill gap analysis from backend
      const response = await fetch(
        `http://127.0.0.1:5000/api/skill-gap/${studentId}`
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Skill analysis failed.");
        setLoading(false);
        return;
      }

      const analysisData = {
        requiredSkills: data.required_skills,
        matchedSkills: data.matched_skills,
        missingSkills: data.missing_skills,
        missingSkillsWithPriority: data.missing_skills.map((skill) => ({
          skill: skill,
          priority:
            ["html", "css", "javascript", "react", "node.js", "sql", "python"].includes(
              skill
            )
              ? "High"
              : ["git", "statistics", "machine learning", "pandas", "numpy"].includes(
                  skill
                )
              ? "Medium"
              : "Low",
        })),
        matchPercentage: data.match_percentage,
        targetCareer: data.career_goal,
      };

      localStorage.setItem(
        "skillnexusAnalysis",
        JSON.stringify(analysisData)
      );

      // Keep latest student information locally
      localStorage.setItem(
        "skillnexusStudent",
        JSON.stringify({
          ...studentData,
          skills: skills,
          careerGoal: targetCareer,
        })
      );

      setAnalysis(analysisData);
    } catch (error) {
      console.error("Skill analysis error:", error);

      alert(
        "Could not connect to SkillNexus backend. Please make sure the Flask server is running."
      );
    }

    setLoading(false);
  };

  return (
    <div className="app-page">
      <Navbar />

      <div className="page-container">

        {/* HEADER */}

        <div className="page-header">

          <span className="page-badge">
            AI SKILL ANALYSIS
          </span>

          <h1>
            Analyze Your Skills
          </h1>

          <p>
            Understand your current abilities and identify
            the skills you need for your target career.
          </p>

        </div>


        {/* INPUT SECTION */}

        <div className="form-card">

          <h2>
            Your Current Skills
          </h2>

          <p>
            Enter your skills separated by commas.
          </p>

          <textarea
            rows="5"
            placeholder="Example: Java, Python, HTML, CSS, SQL..."
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          ></textarea>


          <h2>
            Target Career
          </h2>

          <input
            type="text"
            placeholder="Example: Full Stack Developer"
            value={targetCareer}
            onChange={(e) => setTargetCareer(e.target.value)}
          />


          <button
            className="primary-btn form-btn"
            type="button"
            onClick={handleAnalyze}
            disabled={loading}
          >
            {loading
              ? "Analyzing Your Skills..."
              : "Analyze My Skills →"}
          </button>

        </div>


        {/* ANALYSIS RESULT */}

        {analysis && (
          <>

            <div className="section-heading dashboard-section">

              <span>
                SKILL GAP REPORT
              </span>

              <h2>
                Your Skill Match
              </h2>

              <p>
                Analysis for:
                <strong> {analysis.targetCareer}</strong>
              </p>

            </div>


            {/* MATCH PERCENTAGE */}

            <div className="form-card">

              <h2>
                Career Readiness
              </h2>

              <div style={{ marginTop: "20px" }}>

                <h1>
                  {analysis.matchPercentage}%
                </h1>

                <p>
                  Overall Skill Match
                </p>

              </div>

            </div>


            {/* SKILL CARDS */}

            <div className="feature-grid">

              {/* MATCHED SKILLS */}

              <div className="feature-card">

                <div className="feature-icon blue-icon">
                  ✅
                </div>

                <h3>
                  Matched Skills
                </h3>

                <h2>
                  {analysis.matchedSkills.length}
                </h2>

                <p>
                  Skills you already have.
                </p>

                {analysis.matchedSkills.length > 0 && (
                  <p style={{ marginTop: "10px" }}>
                    {analysis.matchedSkills.join(", ")}
                  </p>
                )}

              </div>


              {/* MISSING SKILLS */}

              <div className="feature-card">

                <div className="feature-icon orange-icon">
                  ⚠️
                </div>

                <h3>
                  Missing Skills
                </h3>

                <h2>
                  {analysis.missingSkills.length}
                </h2>

                <p>
                  Skills you should learn.
                </p>

              </div>


              {/* REQUIRED SKILLS */}

              <div className="feature-card">

                <div className="feature-icon purple-icon">
                  🎯
                </div>

                <h3>
                  Required Skills
                </h3>

                <h2>
                  {analysis.requiredSkills.length}
                </h2>

                <p>
                  Core skills for your target career.
                </p>

              </div>

            </div>


            {/* PRIORITY SECTION */}

            <div className="form-card skill-summary-card">

              <h2>
                Skills You Should Focus On
              </h2>

              <p>
                SkillNexus has prioritized your missing skills
                based on their importance for your career.
              </p>


              <div style={{ marginTop: "20px" }}>

                {analysis.missingSkillsWithPriority.length > 0 ? (

                  analysis.missingSkillsWithPriority.map((item) => (

                    <div
                      key={item.skill}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "12px 15px",
                        marginBottom: "10px",
                        border: "1px solid #e9eaf2",
                        borderRadius: "10px",
                        background: "#fafbff"
                      }}
                    >

                      <span>
                        {item.skill}
                      </span>

                      <strong>
                        {item.priority === "High" && "🔴 High"}
                        {item.priority === "Medium" && "🟠 Medium"}
                        {item.priority === "Low" && "🟢 Low"}
                      </strong>

                    </div>

                  ))

                ) : (

                  <p>
                    🎉 Excellent! You already have all the
                    core skills required for this career.
                  </p>

                )}

              </div>

            </div>


            {/* NEXT STEP */}

            <div className="form-card">

              <h2>
                Recommended Next Step
              </h2>

              <p>
                Based on your skill gap, SkillNexus can now
                create a personalized learning roadmap for you.
              </p>

              <button
                className="primary-btn form-btn"
                type="button"
              >
                Generate Learning Roadmap →
              </button>

            </div>

          </>
        )}

      </div>
    </div>
  );
}
/* =====================================================
   LEARNING
===================================================== */

// =====================================================
// INTELLIGENT LEARNING RECOMMENDATIONS
// =====================================================

function Learning() {
  const [recommendations, setRecommendations] = useState([]);
  const [currentSkills, setCurrentSkills] = useState([]);
  const [careerGoal, setCareerGoal] = useState("");
  const [completedSkills, setCompletedSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // =====================================================
  // LOAD LEARNING RECOMMENDATIONS + SAVED PROGRESS
  // =====================================================

  useEffect(() => {
    const savedStudent = localStorage.getItem("skillnexusStudent");

    if (!savedStudent) {
      setError(
        "Please login to view your personalized learning roadmap."
      );
      setLoading(false);
      return;
    }

    const studentData = JSON.parse(savedStudent);
    const studentId = studentData.student_id;

    if (!studentId) {
      setError("Student ID not found. Please login again.");
      setLoading(false);
      return;
    }

    const fetchLearningData = async () => {
      try {
        // -----------------------------------------------
        // Fetch intelligent learning recommendations
        // -----------------------------------------------

        const response = await fetch(
          `http://127.0.0.1:5000/api/learning-recommendations/${studentId}`
        );

        const data = await response.json();

        if (!response.ok) {
          setError(
            data.message ||
              "Failed to load learning recommendations."
          );

          setLoading(false);
          return;
        }

        setRecommendations(
          data.learning_recommendations || []
        );

        setCurrentSkills(
          data.current_skills || []
        );

        setCareerGoal(
          data.career_goal || ""
        );

        // -----------------------------------------------
        // Fetch saved learning progress
        // -----------------------------------------------

        const progressResponse = await fetch(
          `http://127.0.0.1:5000/api/learning-progress/${studentId}`
        );

        if (progressResponse.ok) {
          const progressData =
            await progressResponse.json();

          let savedProgress =
            progressData.completed_weeks || [];

          // Safety check in case backend returns JSON string
          if (typeof savedProgress === "string") {
            try {
              savedProgress =
                JSON.parse(savedProgress);
            } catch {
              savedProgress = [];
            }
          }

          setCompletedSkills(
            Array.isArray(savedProgress)
              ? savedProgress
              : []
          );
        }

      } catch (error) {
        console.error(
          "Learning recommendation error:",
          error
        );

        setError(
          "Could not connect to SkillNexus backend. Please make sure the Flask server is running."
        );
      }

      setLoading(false);
    };

    fetchLearningData();
  }, []);

  // =====================================================
  // MARK LEARNING SKILL COMPLETE / INCOMPLETE
  // =====================================================

  const handleComplete = async (skill) => {
    const savedStudent =
      localStorage.getItem("skillnexusStudent");

    if (!savedStudent) {
      alert("Please login first.");
      return;
    }

    const studentData =
      JSON.parse(savedStudent);

    const studentId =
      studentData.student_id;

    if (!studentId) {
      alert(
        "Student ID not found. Please login again."
      );
      return;
    }

    let updatedCompletedSkills;

    // -----------------------------------------------
    // Toggle completion
    // -----------------------------------------------

    if (completedSkills.includes(skill)) {

      updatedCompletedSkills =
        completedSkills.filter(
          (item) => item !== skill
        );

    } else {

      updatedCompletedSkills = [
        ...completedSkills,
        skill
      ];

    }

    // Update UI immediately
    setCompletedSkills(
      updatedCompletedSkills
    );

    // -----------------------------------------------
    // Save progress to backend / SQLite
    // -----------------------------------------------

    try {

      const response = await fetch(
        `http://127.0.0.1:5000/api/learning-progress/${studentId}`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            completed_weeks:
              updatedCompletedSkills
          })
        }
      );

      const data =
        await response.json();

      if (!response.ok) {

        console.error(
          "Failed to save learning progress:",
          data.message
        );

        alert(
          "Progress could not be saved."
        );

        return;
      }

      console.log(
        "Learning progress saved:",
        data
      );

    } catch (error) {

      console.error(
        "Learning progress error:",
        error
      );

      alert(
        "Could not connect to SkillNexus backend."
      );
    }
  };

  // =====================================================
  // PROGRESS CALCULATION
  // =====================================================

  const completedCount =
    completedSkills.length;

  const totalCount =
    recommendations.length;

  const progressPercentage =
    totalCount > 0
      ? Math.round(
          (completedCount / totalCount) * 100
        )
      : 0;

  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {

    return (
      <div className="app-page">

        <Navbar />

        <div className="page-container">

          <div className="page-header">

            <span className="page-badge">
              PERSONALIZED LEARNING
            </span>

            <h1>
              Building Your Learning Roadmap...
            </h1>

            <p>
              SkillNexus is analyzing your skill
              gaps and preparing a personalized
              roadmap.
            </p>

          </div>

        </div>

      </div>
    );
  }

  // =====================================================
  // ERROR
  // =====================================================

  if (error) {

    return (
      <div className="app-page">

        <Navbar />

        <div className="page-container">

          <div className="form-card">

            <h2>
              Learning Roadmap
            </h2>

            <p
              style={{
                color: "#dc2626",
                marginTop: "15px"
              }}
            >
              {error}
            </p>

            <Link
              to="/login"
              className="primary-btn"
              style={{
                display: "inline-block",
                marginTop: "20px",
                textDecoration: "none"
              }}
            >
              Login →
            </Link>

          </div>

        </div>

      </div>
    );
  }

  // =====================================================
  // MAIN LEARNING PAGE
  // =====================================================

  return (
    <div className="app-page">

      <Navbar />

      <div className="page-container">

        {/* =============================================
            PAGE HEADER
        ============================================= */}

        <div className="page-header">

          <span className="page-badge">
            PERSONALIZED LEARNING
          </span>

          <h1>
            Your Learning Roadmap
          </h1>

          <p>
            SkillNexus has created this roadmap
            based on your current skills and
            career goal.
          </p>

        </div>


        {/* =============================================
            CAREER GOAL
        ============================================= */}

        <div
          className="form-card"
          style={{
            marginBottom: "25px"
          }}
        >

          <h2>
            🎯 Career Goal
          </h2>

          <p
            style={{
              fontSize: "20px",
              fontWeight: "700",
              color: "#4338ca",
              marginTop: "10px"
            }}
          >
            {careerGoal}
          </p>

          <p
            style={{
              color: "#64748b",
              marginTop: "8px"
            }}
          >
            This learning path is generated
            from your identified skill gaps.
          </p>

        </div>


        {/* =============================================
            CURRENT SKILLS
        ============================================= */}

        <div
          className="form-card"
          style={{
            marginBottom: "25px"
          }}
        >

          <h2>
            ✓ Skills You Already Have
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginTop: "16px"
            }}
          >

            {currentSkills.length > 0 ? (

              currentSkills.map((skill) => (

                <span
                  key={skill}
                  style={{
                    padding: "8px 14px",
                    borderRadius: "20px",
                    background: "#dcfce7",
                    color: "#166534",
                    fontWeight: "600"
                  }}
                >
                  ✓ {skill}
                </span>

              ))

            ) : (

              <p
                style={{
                  color: "#64748b"
                }}
              >
                No current skills found.
              </p>

            )}

          </div>

        </div>


        {/* =============================================
            LEARNING PROGRESS
        ============================================= */}

        <div
          className="form-card"
          style={{
            marginBottom: "30px"
          }}
        >

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "15px",
              flexWrap: "wrap"
            }}
          >

            <div>

              <h2>
                Learning Progress
              </h2>

              <p
                style={{
                  color: "#64748b",
                  marginTop: "6px"
                }}
              >
                {completedCount} of{" "}
                {totalCount} learning goals
                completed
              </p>

            </div>

            <strong
              style={{
                fontSize: "26px",
                color: "#4338ca"
              }}
            >
              {progressPercentage}%
            </strong>

          </div>


          {/* Progress bar */}

          <div
            style={{
              width: "100%",
              height: "10px",
              background: "#e2e8f0",
              borderRadius: "10px",
              overflow: "hidden",
              marginTop: "18px"
            }}
          >

            <div
              style={{
                width: `${progressPercentage}%`,
                height: "100%",
                background: "#4f46e5",
                borderRadius: "10px",
                transition: "width 0.3s ease"
              }}
            />

          </div>

        </div>


        {/* =============================================
            RECOMMENDED LEARNING PATH
        ============================================= */}

        <div>

          <h2
            style={{
              marginBottom: "20px"
            }}
          >
            📚 Recommended Learning Path
          </h2>


          {/* No recommendations */}

          {recommendations.length === 0 ? (

            <div className="form-card">

              <h3>
                🎉 No major skill gaps found!
              </h3>

              <p
                style={{
                  color: "#64748b",
                  marginTop: "10px"
                }}
              >
                Your current skills already match
                the available career requirements.
              </p>

            </div>

          ) : (

            <div
              style={{
                display: "grid",
                gap: "18px"
              }}
            >

              {recommendations.map(
                (item, index) => {

                  const isCompleted =
                    completedSkills.includes(
                      item.skill
                    );

                  return (

                    <div
                      key={`${item.skill}-${index}`}
                      className="form-card"
                      style={{
                        margin: 0,
                        borderLeft:
                          isCompleted
                            ? "5px solid #16a34a"
                            : "5px solid #4f46e5",
                        transition:
                          "all 0.2s ease"
                      }}
                    >

                      <div
                        style={{
                          display: "flex",
                          justifyContent:
                            "space-between",
                          gap: "20px",
                          alignItems:
                            "flex-start",
                          flexWrap: "wrap"
                        }}
                      >

                        {/* LEFT CONTENT */}

                        <div
                          style={{
                            flex: 1,
                            minWidth: "250px"
                          }}
                        >

                          {/* Skill title */}

                          <div
                            style={{
                              display: "flex",
                              alignItems:
                                "center",
                              gap: "10px",
                              flexWrap: "wrap"
                            }}
                          >

                            <span
                              style={{
                                width: "32px",
                                height: "32px",
                                borderRadius: "50%",
                                background:
                                  isCompleted
                                    ? "#dcfce7"
                                    : "#eef2ff",
                                color:
                                  isCompleted
                                    ? "#166534"
                                    : "#4338ca",
                                display:
                                  "inline-flex",
                                alignItems:
                                  "center",
                                justifyContent:
                                  "center",
                                fontWeight: "700"
                              }}
                            >
                              {isCompleted
                                ? "✓"
                                : index + 1}
                            </span>

                            <h3
                              style={{
                                margin: 0
                              }}
                            >
                              {item.skill}
                            </h3>

                          </div>


                          {/* Learning topic */}

                          <p
                            style={{
                              marginTop: "12px",
                              color: "#4338ca",
                              fontWeight: "700"
                            }}
                          >
                            📖{" "}
                            {item.learning_topic}
                          </p>


                          {/* Metadata */}

                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              gap: "8px",
                              marginTop: "12px"
                            }}
                          >

                            <span
                              style={{
                                padding:
                                  "6px 10px",
                                borderRadius:
                                  "8px",
                                background:
                                  "#f1f5f9",
                                fontSize:
                                  "13px",
                                color:
                                  "#475569"
                              }}
                            >
                              {item.category}
                            </span>


                            <span
                              style={{
                                padding:
                                  "6px 10px",
                                borderRadius:
                                  "8px",
                                background:
                                  "#fef3c7",
                                fontSize:
                                  "13px",
                                color:
                                  "#92400e"
                              }}
                            >
                              {item.importance}{" "}
                              Importance
                            </span>


                            <span
                              style={{
                                padding:
                                  "6px 10px",
                                borderRadius:
                                  "8px",
                                background:
                                  "#ecfeff",
                                fontSize:
                                  "13px",
                                color:
                                  "#155e75"
                              }}
                            >
                              Level:{" "}
                              {item.skill_level}
                            </span>


                            <span
                              style={{
                                padding:
                                  "6px 10px",
                                borderRadius:
                                  "8px",
                                background:
                                  "#f3e8ff",
                                fontSize:
                                  "13px",
                                color:
                                  "#6b21a8"
                              }}
                            >
                              Priority:{" "}
                              {item.learning_priority}
                            </span>

                          </div>

                        </div>


                        {/* COMPLETE BUTTON */}

                        <button
                          type="button"
                          onClick={() =>
                            handleComplete(
                              item.skill
                            )
                          }
                          className="primary-btn"
                          style={{
                            whiteSpace:
                              "nowrap",
                            background:
                              isCompleted
                                ? "#16a34a"
                                : undefined,
                            border:
                              isCompleted
                                ? "1px solid #16a34a"
                                : undefined
                          }}
                        >
                          {isCompleted
                            ? "✓ Completed"
                            : "Mark Complete"}
                        </button>

                      </div>

                    </div>

                  );
                }
              )}

            </div>

          )}

        </div>


        {/* =============================================
            COMPLETION MESSAGE
        ============================================= */}

        {totalCount > 0 &&
          progressPercentage === 100 && (

            <div
              className="form-card"
              style={{
                marginTop: "30px",
                textAlign: "center",
                border:
                  "2px solid #16a34a"
              }}
            >

              <h2
                style={{
                  color: "#166534"
                }}
              >
                🎉 Learning Roadmap Completed!
              </h2>

              <p
                style={{
                  color: "#64748b",
                  marginTop: "10px"
                }}
              >
                You have completed all the
                recommended learning goals for
                your current career path.
              </p>

            </div>

          )}

      </div>

    </div>
  );
}
function AICareerAdvisor() {
  const [advisorData, setAdvisorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedStudent = localStorage.getItem("skillnexusStudent");

    if (!savedStudent) {
      setError("Please login to use AI Career Advisor.");
      setLoading(false);
      return;
    }

    try {
      const studentData = JSON.parse(savedStudent);
      const studentId = studentData.student_id;

      if (!studentId) {
        setError("Student ID not found. Please login again.");
        setLoading(false);
        return;
      }

      const loadAdvisor = async () => {
        try {
          const response = await fetch(
            `http://127.0.0.1:5000/api/ai-career-advisor/${studentId}`
          );

          const data = await response.json();

          if (!response.ok) {
            setError(
              data.message || "Failed to load AI Career Advisor."
            );
            setLoading(false);
            return;
          }

          setAdvisorData(data);
        } catch (err) {
          console.error("AI Career Advisor error:", err);
          setError("Could not connect to SkillNexus backend.");
        }

        setLoading(false);
      };

      loadAdvisor();
    } catch (err) {
      console.error("Student data error:", err);
      setError("Invalid login data. Please login again.");
      setLoading(false);
    }
  }, []);

  /* =========================
     LOADING
  ========================= */

  if (loading) {
    return (
      <div className="app-page">
        <Navbar />

        <div className="page-container">
          <div className="page-header">
            <span className="page-badge">
              AI CAREER ADVISOR
            </span>

            <h1>
              Analyzing Your Career Profile...
            </h1>

            <p>
              SkillNexus AI is analyzing your skills,
              career requirements and learning priorities.
            </p>
          </div>

          <div className="advisor-loading-card">
            <div className="advisor-ai-circle">
              ✦
            </div>

            <h2>
              SkillNexus AI is thinking...
            </h2>

            <p>
              Matching your profile with your target career.
            </p>
          </div>
        </div>
      </div>
    );
  }

  /* =========================
     ERROR
  ========================= */

  if (error) {
    return (
      <div className="app-page">
        <Navbar />

        <div className="page-container">
          <div className="form-card advisor-error-card">

            <div className="advisor-error-icon">
              !
            </div>

            <h2>
              AI Career Advisor
            </h2>

            <p>
              {error}
            </p>

            <Link
              to="/login"
              className="primary-btn"
            >
              Login →
            </Link>

          </div>
        </div>
      </div>
    );
  }

  if (!advisorData) {
    return null;
  }

  /* =========================
     DATA
  ========================= */

  const matchedSkills =
    advisorData.matched_skills || [];

  const missingSkills =
    advisorData.missing_skills || [];

  const priorityBreakdown =
    advisorData.priority_breakdown || {};

  const highPriority =
    priorityBreakdown.high || [];

  const mediumPriority =
    priorityBreakdown.medium || [];

  const lowPriority =
    priorityBreakdown.low || [];

  const firstAction =
    advisorData.first_action;

  const learningStrategy =
    advisorData.learning_strategy || [];

  const requiredSkills =
    advisorData.required_skills || [];

  const matchPercentage =
    advisorData.match_percentage || 0;

  /* =========================
     MAIN UI
  ========================= */

  return (
    <div className="app-page">

      <Navbar />

      <div className="page-container advisor-page">

        {/* =========================
            HEADER
        ========================= */}

        <div className="page-header advisor-header">

          <span className="page-badge">
            AI CAREER ADVISOR
          </span>

          <h1>
            Your Personalized Career Guidance
          </h1>

          <p>
            SkillNexus AI analyzes your current profile
            against real career skill requirements and
            creates a personalized growth path.
          </p>

        </div>

        {/* =========================
            CAREER HERO
        ========================= */}

        <div className="advisor-hero-card">

          <div className="advisor-hero-left">

            <div className="advisor-ai-orb">
              <span>✦</span>
            </div>

            <div>

              <span className="advisor-small-label">
                TARGET CAREER
              </span>

              <h2>
                {advisorData.career_goal}
              </h2>

              <p>
                {advisorData.profile_summary}
              </p>

            </div>

          </div>

          <div className="advisor-readiness">

            <span>
              CAREER READINESS
            </span>

            <strong>
              {matchPercentage}%
            </strong>

            <small>
              {advisorData.readiness_level}
            </small>

          </div>

        </div>

        {/* =========================
            STATS
        ========================= */}

        <div className="advisor-stats-grid">

          <div className="advisor-stat-card">

            <span className="advisor-stat-icon">
              ✓
            </span>

            <div>
              <strong>
                {matchedSkills.length}
              </strong>

              <p>
                Matched Skills
              </p>
            </div>

          </div>

          <div className="advisor-stat-card">

            <span className="advisor-stat-icon">
              !
            </span>

            <div>
              <strong>
                {missingSkills.length}
              </strong>

              <p>
                Skill Gaps
              </p>
            </div>

          </div>

          <div className="advisor-stat-card">

            <span className="advisor-stat-icon">
              ↑
            </span>

            <div>
              <strong>
                {highPriority.length}
              </strong>

              <p>
                High Priority
              </p>
            </div>

          </div>

          <div className="advisor-stat-card">

            <span className="advisor-stat-icon">
              ✦
            </span>

            <div>
              <strong>
                {requiredSkills.length}
              </strong>

              <p>
                Required Skills
              </p>
            </div>

          </div>

        </div>

        {/* =========================
            AI PROFILE INSIGHT
        ========================= */}

        <div className="advisor-section-card">

          <div className="advisor-section-title">

            <span>
              ✦
            </span>

            <div>
              <h2>
                AI Profile Insight
              </h2>

              <p>
                What SkillNexus AI sees in your profile
              </p>
            </div>

          </div>

          <div className="advisor-insight-box">

            <p>
              {advisorData.career_insight}
            </p>

          </div>

        </div>

        {/* =========================
            SKILL MATCH
        ========================= */}

        <div className="advisor-two-column">

          {/* CURRENT STRENGTHS */}

          <div className="advisor-section-card">

            <div className="advisor-section-title">

              <span>
                ✓
              </span>

              <div>

                <h2>
                  Your Current Strengths
                </h2>

                <p>
                  Skills already aligned with your career
                </p>

              </div>

            </div>

            <div className="advisor-skill-list">

              {matchedSkills.length > 0 ? (

                matchedSkills.map((skill, index) => (

                  <div
                    className="advisor-skill-item matched"
                    key={index}
                  >

                    <span>
                      ✓
                    </span>

                    <strong>
                      {skill}
                    </strong>

                  </div>

                ))

              ) : (

                <p className="advisor-empty">
                  No matched skills found yet.
                </p>

              )}

            </div>

          </div>

          {/* SKILLS TO DEVELOP */}

          <div className="advisor-section-card">

            <div className="advisor-section-title">

              <span>
                !
              </span>

              <div>

                <h2>
                  Skills To Develop
                </h2>

                <p>
                  Skills needed for your target career
                </p>

              </div>

            </div>

            <div className="advisor-skill-list">

              {missingSkills.length > 0 ? (

                missingSkills.map((skill, index) => (

                  <div
                    className="advisor-skill-item missing"
                    key={index}
                  >

                    <span>
                      +
                    </span>

                    <strong>
                      {skill}
                    </strong>

                  </div>

                ))

              ) : (

                <p className="advisor-empty">
                  Excellent! No major skill gaps found.
                </p>

              )}

            </div>

          </div>

        </div>

        {/* =========================
            BEST NEXT ACTION
        ========================= */}

        {firstAction && (

          <div className="advisor-next-action">

            <div className="next-action-icon">
              ✦
            </div>

            <div className="next-action-content">

              <span className="advisor-small-label">
                YOUR BEST NEXT ACTION
              </span>

              <h2>
                Start learning {firstAction.skill}
              </h2>

              <p>
                {firstAction.reason}
              </p>

              <div className="next-action-meta">

                <span>
                  Topic: {firstAction.learning_topic}
                </span>

                <span>
                  Level: {firstAction.skill_level}
                </span>

                <span>
                  Category: {firstAction.category}
                </span>

              </div>

              {/* DIRECT LEARNING BUTTON */}

              <Link
                to="/learning"
                className="advisor-learning-btn"
              >
                Start Learning →
              </Link>

            </div>

          </div>

        )}

        {/* =========================
            AI LEARNING ROADMAP
        ========================= */}

        <div className="advisor-section-card">

          <div className="advisor-section-title">

            <span>
              ◈
            </span>

            <div>

              <h2>
                AI Learning Roadmap
              </h2>

              <p>
                Follow these priorities to close your
                career skill gaps.
              </p>

            </div>

          </div>

          <div className="advisor-roadmap">

            {/* HIGH PRIORITY */}

            <div className="roadmap-column">

              <div className="roadmap-heading high">

                <span>
                  01
                </span>

                <div>

                  <strong>
                    High Priority
                  </strong>

                  <small>
                    Start here
                  </small>

                </div>

              </div>

              {highPriority.length > 0 ? (

                highPriority.map((item, index) => (

                  <div
                    className="roadmap-item"
                    key={index}
                  >

                    <strong>
                      {item.skill}
                    </strong>

                    <span>
                      {item.learning_topic}
                    </span>

                  </div>

                ))

              ) : (

                <div className="roadmap-empty">
                  No high-priority gaps.
                </div>

              )}

            </div>

            {/* MEDIUM PRIORITY */}

            <div className="roadmap-column">

              <div className="roadmap-heading medium">

                <span>
                  02
                </span>

                <div>

                  <strong>
                    Medium Priority
                  </strong>

                  <small>
                    Build next
                  </small>

                </div>

              </div>

              {mediumPriority.length > 0 ? (

                mediumPriority.map((item, index) => (

                  <div
                    className="roadmap-item"
                    key={index}
                  >

                    <strong>
                      {item.skill}
                    </strong>

                    <span>
                      {item.learning_topic}
                    </span>

                  </div>

                ))

              ) : (

                <div className="roadmap-empty">
                  No medium-priority gaps.
                </div>

              )}

            </div>

            {/* LOW PRIORITY */}

            <div className="roadmap-column">

              <div className="roadmap-heading low">

                <span>
                  03
                </span>

                <div>

                  <strong>
                    Low Priority
                  </strong>

                  <small>
                    Strengthen later
                  </small>

                </div>

              </div>

              {lowPriority.length > 0 ? (

                lowPriority.map((item, index) => (

                  <div
                    className="roadmap-item"
                    key={index}
                  >

                    <strong>
                      {item.skill}
                    </strong>

                    <span>
                      {item.learning_topic}
                    </span>

                  </div>

                ))

              ) : (

                <div className="roadmap-empty">
                  No low-priority gaps.
                </div>

              )}

            </div>

          </div>

        </div>

        {/* =========================
            LEARNING STRATEGY
        ========================= */}

        <div className="advisor-section-card">

          <div className="advisor-section-title">

            <span>
              →
            </span>

            <div>

              <h2>
                Recommended Learning Strategy
              </h2>

              <p>
                A practical approach based on your
                current career profile.
              </p>

            </div>

          </div>

          <div className="strategy-list">

            {learningStrategy.map((step, index) => (

              <div
                className="strategy-item"
                key={index}
              >

                <span>
                  {index + 1}
                </span>

                <p>
                  {step}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* =========================
            CAREER ENGINE
        ========================= */}

        <div className="advisor-engine-card">

          <div className="engine-orb">
            ✦
          </div>

          <div>

            <span>
              POWERED BY SKILLNEXUS CAREER ENGINE
            </span>

            <h2>
              Learn → Build → Improve → Grow
            </h2>

            <p>
              Your roadmap updates as your skills and
              career goals evolve.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}
/* =====================================================
   OPPORTUNITIES
===================================================== */

function Opportunities() {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [studentId, setStudentId] = useState(null);

  useEffect(() => {
    try {
      const savedData = localStorage.getItem("skillnexusStudent");

      if (!savedData) {
        setError("Please create your student profile first.");
        setLoading(false);
        return;
      }

      const studentData = JSON.parse(savedData);
      const id =
        studentData?.student_id ??
        studentData?.student?.id ??
        studentData?.id;

      if (!id) {
        setError("Student ID not found. Please login again.");
        setLoading(false);
        return;
      }

      setStudentId(id);

      const loadOpportunities = async () => {
        try {
          const response = await fetch(
            `http://127.0.0.1:5000/api/opportunities/${id}`
          );

          const data = await response.json();

          if (!response.ok || data.status !== "success") {
            throw new Error(
              data.message || "Unable to load opportunities."
            );
          }

          setOpportunities(data.opportunities || []);
        } catch (err) {
          console.error("Opportunity loading error:", err);
          setError(
            err.message ||
              "Could not connect to the backend. Check whether Flask is running."
          );
        } finally {
          setLoading(false);
        }
      };

      loadOpportunities();
    } catch (err) {
      console.error("Student data error:", err);
      setError("Invalid student data. Please login again.");
      setLoading(false);
    }
  }, []);

  const getApplicationUrl = (url) => {
    if (typeof url !== "string" || !url.trim()) return "";

    const value = url.trim();

    if (!/^https?:\/\//i.test(value)) {
      return `https://${value}`;
    }

    return value;
  };

  return (
    <div className="app-page">
      <Navbar />

      <div className="page-container">
        <div className="page-header">
          <span className="page-badge">CAREER OPPORTUNITIES</span>
          <h1>Opportunities For You</h1>
          <p>
            Discover internships and jobs matched with your current skills.
          </p>
        </div>

        {loading && (
          <div className="form-card">
            <h2>Finding opportunities...</h2>
            <p style={{ marginTop: "10px" }}>
              SkillNexus is analyzing your skills and finding relevant opportunities.
            </p>
          </div>
        )}

        {!loading && error && (
          <div className="form-card">
            <h2>Unable to Load Opportunities</h2>
            <p style={{ marginTop: "10px" }}>{error}</p>
          </div>
        )}

        {!loading && !error && studentId && opportunities.length === 0 && (
          <div className="form-card">
            <h2>No Opportunities Found</h2>
            <p style={{ marginTop: "10px" }}>
              There are no opportunities in the database right now.
            </p>
          </div>
        )}

        {!loading && !error && opportunities.length > 0 && (
          <>
            <div className="section-heading dashboard-section">
              <span>PERSONALIZED MATCHES</span>
              <h2>Recommended For You</h2>
              <p>
                Opportunities are ordered according to how closely your skills
                match their requirements.
              </p>
            </div>

            <div className="feature-grid">
              {opportunities.map((opportunity) => {
                const matchedSkills = Array.isArray(opportunity.matched_skills)
                  ? opportunity.matched_skills
                  : [];

                const missingSkills = Array.isArray(opportunity.missing_skills)
                  ? opportunity.missing_skills
                  : [];

                const applicationUrl = getApplicationUrl(
                  opportunity.application_link
                );

                return (
                  <div
                    className="feature-card"
                    key={opportunity.id}
                    style={{ position: "relative" }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "18px",
                        right: "18px",
                        padding: "6px 10px",
                        borderRadius: "20px",
                        background:
                          (opportunity.match_percentage || 0) >= 70
                            ? "#dcfce7"
                            : (opportunity.match_percentage || 0) >= 40
                            ? "#fef3c7"
                            : "#fee2e2",
                        color:
                          (opportunity.match_percentage || 0) >= 70
                            ? "#166534"
                            : (opportunity.match_percentage || 0) >= 40
                            ? "#92400e"
                            : "#991b1b",
                        fontSize: "12px",
                        fontWeight: "700",
                      }}
                    >
                      {opportunity.match_percentage ?? 0}% Match
                    </div>

                    <div className="feature-icon blue-icon">
                      {opportunity.opportunity_type === "Internship"
                        ? "🎓"
                        : "💼"}
                    </div>

                    <h3>{opportunity.title}</h3>
                    <h2>{opportunity.company}</h2>
                    <p>{opportunity.description}</p>

                    <div
                      style={{
                        marginTop: "15px",
                        padding: "12px",
                        borderRadius: "10px",
                        background: "#fafbff",
                        border: "1px solid #e9eaf2",
                      }}
                    >
                      <p style={{ margin: "4px 0" }}>
                        <strong>Type:</strong> {opportunity.opportunity_type}
                      </p>
                      <p style={{ margin: "4px 0" }}>
                        <strong>Location:</strong>{" "}
                        {opportunity.location || "Not specified"}
                      </p>
                    </div>

                    {matchedSkills.length > 0 && (
                      <div style={{ marginTop: "15px" }}>
                        <strong>✅ Your Matching Skills</strong>
                        <p style={{ marginTop: "6px" }}>
                          {matchedSkills.join(", ")}
                        </p>
                      </div>
                    )}

                    {missingSkills.length > 0 && (
                      <div style={{ marginTop: "12px" }}>
                        <strong>📚 Skills To Improve</strong>
                        <p style={{ marginTop: "6px" }}>
                          {missingSkills.join(", ")}
                        </p>
                      </div>
                    )}

                    {applicationUrl ? (
                      <a
                        href={applicationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="primary-btn form-btn"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          textDecoration: "none",
                          marginTop: "20px",
                        }}
                      >
                        Apply Now →
                      </a>
                    ) : (
                      <button
                        type="button"
                        className="primary-btn form-btn"
                        style={{ marginTop: "20px" }}
                        onClick={() =>
                          alert(
                            "Application link is not available. Please contact the industry."
                          )
                        }
                      >
                        Application Link Unavailable
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* =====================================================
   PROFILE
===================================================== */

function Profile() {
  const savedData = localStorage.getItem("skillnexusStudent");
  const studentData = savedData ? JSON.parse(savedData) : {};

  const [name, setName] = useState(studentData.name || "");
  const [email, setEmail] = useState(studentData.email || "");
  const [education, setEducation] = useState(studentData.education || "");
  const [careerGoal, setCareerGoal] = useState(studentData.careerGoal || "");
  const [skills, setSkills] = useState(studentData.skills || "");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (!name || !education || !careerGoal || !skills) {
      alert("Please fill all the fields.");
      return;
    }

    const studentId = studentData.student_id;

    if (!studentId) {
      alert(
        "Student ID not found. Please create your profile again from Onboarding."
      );
      return;
    }

    setLoading(true);

    const updatedStudentData = {
      name,
      email,
      education,
      careerGoal,
      skills,
    };

    try {
      const response = await fetch(
        `http://127.0.0.1:5000/api/students/${studentId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            education,
            career_goal: careerGoal,
            skills,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Failed to update profile.");
        setLoading(false);
        return;
      }

      localStorage.setItem(
        "skillnexusStudent",
        JSON.stringify({
          ...studentData,
          ...updatedStudentData,
          student_id: studentId,
        })
      );

      setMessage("Profile updated successfully! ✓");

      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      console.error("Profile update error:", error);

      alert(
        "Could not connect to SkillNexus backend. Please make sure the Flask server is running."
      );
    }

    setLoading(false);
  };

  return (
    <div className="app-page">
      <Navbar />

      <div className="page-container">
        <div className="page-header">
          <span className="page-badge">YOUR PROFILE</span>

          <h1>My Profile</h1>

          <p>
            Manage your personal information, education, career goal and skills.
          </p>
        </div>

        <div className="form-card">
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Education</label>
          <input
            type="text"
            placeholder="e.g. B.Tech Computer Science"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          />

          <label>Career Goal</label>
          <input
            type="text"
            placeholder="e.g. Full Stack Developer"
            value={careerGoal}
            onChange={(e) => setCareerGoal(e.target.value)}
          />

          <label>Current Skills</label>
          <textarea
            placeholder="e.g. Python, HTML, CSS, Java"
            rows="4"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          ></textarea>

          {message && (
            <p
              style={{
                marginTop: "18px",
                color: "#16a34a",
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              {message}
            </p>
          )}

          <button
            className="primary-btn form-btn"
            type="button"
            onClick={handleSave}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Profile ✓"}
          </button>
        </div>
      </div>
    </div>
  );
}
/* =====================================================
   FACULTY DASHBOARD
===================================================== */

function FacultyDashboard() {
  const savedFaculty = localStorage.getItem("skillnexusFaculty");
  const facultyData = savedFaculty ? JSON.parse(savedFaculty) : null;

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [monitoringSummary, setMonitoringSummary] = useState(null);
  const [summaryLoading, setSummaryLoading] = useState(true);

  // =====================================================
  // LOAD STUDENTS
  // =====================================================

  useEffect(() => {
    const loadStudents = async () => {
      if (!facultyData?.faculty_id) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `http://127.0.0.1:5000/api/faculty/${facultyData.faculty_id}/students`
        );

        const data = await response.json();

        if (response.ok) {
          setStudents(data.students || []);
        } else {
          alert(data.message || "Could not load students.");
        }
      } catch (error) {
        console.error("Faculty student loading error:", error);

        alert(
          "Could not connect to SkillNexus backend. Please make sure Flask is running."
        );
      }

      setLoading(false);
    };

    loadStudents();
  }, [facultyData?.faculty_id]);

  // =====================================================
  // LOAD FACULTY MONITORING SUMMARY
  // =====================================================

  useEffect(() => {
    const loadMonitoringSummary = async () => {
      if (!facultyData?.faculty_id) {
        setSummaryLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `http://127.0.0.1:5000/api/faculty/${facultyData.faculty_id}/monitoring-summary`
        );

        const data = await response.json();

        if (response.ok) {
          setMonitoringSummary(data);
        } else {
          console.error(
            data.message || "Could not load monitoring summary."
          );
        }
      } catch (error) {
        console.error(
          "Faculty monitoring summary error:",
          error
        );
      }

      setSummaryLoading(false);
    };

    loadMonitoringSummary();
  }, [facultyData?.faculty_id]);

  // =====================================================
  // FACULTY LOGIN REQUIRED
  // =====================================================

  if (!facultyData) {
    return (
      <div className="app-page">
        <Navbar />

        <div className="page-container">
          <div
            className="form-card"
            style={{
              textAlign: "center",
              marginTop: "40px"
            }}
          >
            <h2>Faculty Login Required</h2>

            <p style={{ marginTop: "10px" }}>
              Please login as a faculty member to access the
              faculty dashboard.
            </p>

            <Link
              to="/faculty-login"
              className="primary-btn form-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none"
              }}
            >
              Faculty Login →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // =====================================================
  // MONITORING VALUES
  // =====================================================

  const summary = monitoringSummary?.summary || {};

  const totalStudents =
    summary.total_students ?? students.length;

  const studentsWithAnalysis =
    summary.students_with_analysis ?? 0;

  const averageCareerReadiness =
    summary.average_career_readiness ?? 0;

  // =====================================================
  // PAGE
  // =====================================================

  return (
    <div className="app-page">
      <Navbar />

      <div className="page-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="page-header">
          <span className="page-badge">
            FACULTY PORTAL
          </span>

          <h1>
            Welcome, {facultyData.name} 👋
          </h1>

          <p>
            Monitor student skills, career goals and learning
            progress.
          </p>
        </div>

        {/* =================================================
            FACULTY INFORMATION
        ================================================= */}

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon blue-icon">
              👩‍🏫
            </div>

            <h3>Faculty</h3>

            <h2>
              {facultyData.name}
            </h2>

            <p>
              {facultyData.department}
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon purple-icon">
              🎓
            </div>

            <h3>Total Students</h3>

            <h2>
              {totalStudents}
            </h2>

            <p>
              Students registered on SkillNexus
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon orange-icon">
              🏫
            </div>

            <h3>Institution</h3>

            <h2
              style={{
                fontSize: "20px"
              }}
            >
              {facultyData.institution}
            </h2>

            <p>
              Academic Institution
            </p>
          </div>

        </div>

        {/* =================================================
            MONITORING SUMMARY
        ================================================= */}

        <div
          className="section-heading dashboard-section"
          style={{
            marginTop: "50px"
          }}
        >
          <span>
            FACULTY MONITORING
          </span>

          <h2>
            Student Development Overview
          </h2>

          <p>
            Monitor overall student skill readiness and
            development progress.
          </p>
        </div>

        {summaryLoading ? (

          <div className="form-card">
            <p>
              Loading monitoring summary...
            </p>
          </div>

        ) : (

          <div className="feature-grid">

            {/* STUDENTS WITH ANALYSIS */}

            <div className="feature-card">

              <div className="feature-icon blue-icon">
                📊
              </div>

              <h3>
                Students With Skill Analysis
              </h3>

              <h2>
                {studentsWithAnalysis}
              </h2>

              <p>
                Students whose career requirements
                were analyzed
              </p>

            </div>

            {/* AVERAGE CAREER READINESS */}

            <div className="feature-card">

              <div className="feature-icon purple-icon">
                🎯
              </div>

              <h3>
                Average Career Readiness
              </h3>

              <h2>
                {averageCareerReadiness}%
              </h2>

              <p>
                Average skill match across analyzed
                students
              </p>

            </div>

            {/* STUDENTS NEEDING ATTENTION */}

            <div className="feature-card">

              <div className="feature-icon orange-icon">
                ⚡
              </div>

              <h3>
                Students Needing Attention
              </h3>

              <h2>
                {Math.max(
                  totalStudents - studentsWithAnalysis,
                  0
                )}
              </h2>

              <p>
                Students requiring further skill
                analysis
              </p>

            </div>

          </div>

        )}

        {/* =================================================
            STUDENT MANAGEMENT
        ================================================= */}

        <div
          className="section-heading dashboard-section"
          style={{
            marginTop: "50px"
          }}
        >
          <span>
            STUDENT MANAGEMENT
          </span>

          <h2>
            Students
          </h2>

          <p>
            View student profiles, career goals and current
            skills.
          </p>
        </div>

        {loading ? (

          <div className="form-card">
            <p>
              Loading students...
            </p>
          </div>

        ) : students.length === 0 ? (

          <div className="form-card">

            <h2>
              No Students Found
            </h2>

            <p
              style={{
                marginTop: "10px"
              }}
            >
              Students registered on SkillNexus will appear
              here.
            </p>

          </div>

        ) : (

          <div className="feature-grid">

            {students.map((student) => (

              <div
                className="feature-card"
                key={student.student_id}
              >

                <div className="feature-icon blue-icon">
                  🎓
                </div>

                <h3>
                  {student.name}
                </h3>

                <p>
                  {student.email}
                </p>

                <div
                  style={{
                    marginTop: "15px",
                    textAlign: "left"
                  }}
                >

                  <p>
                    <strong>
                      Education:
                    </strong>{" "}
                    {student.education}
                  </p>

                  <p
                    style={{
                      marginTop: "8px"
                    }}
                  >
                    <strong>
                      Career Goal:
                    </strong>{" "}
                    {student.career_goal}
                  </p>

                  <p
                    style={{
                      marginTop: "8px"
                    }}
                  >
                    <strong>
                      Skills:
                    </strong>
                  </p>

                  <div
                    style={{
                      marginTop: "8px",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "6px"
                    }}
                  >

                    {(student.skills || "")
                      .split(",")
                      .filter(
                        (skill) =>
                          skill.trim() !== ""
                      )
                      .map((skill) => (

                        <span
                          key={skill}
                          style={{
                            padding: "5px 9px",
                            borderRadius: "8px",
                            background: "#eef2ff",
                            color: "#4338ca",
                            fontSize: "12px",
                            fontWeight: "600"
                          }}
                        >
                          {skill.trim()}
                        </span>

                      ))}

                  </div>

                  {/* VIEW DETAILS */}

                  <Link
                    to={`/faculty/student/${student.student_id}`}
                    state={{ student }}
                    className="primary-btn"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      marginTop: "20px",
                      textDecoration: "none",
                      boxSizing: "border-box"
                    }}
                  >
                    View Student Details →
                  </Link>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>
    </div>
  );
}
function FacultyStudentDetails() {
  const location = useLocation();
  const student = location.state?.student;

  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(true);

  const [learningProgress, setLearningProgress] = useState(null);
  const [learningLoading, setLearningLoading] = useState(true);

  // =====================================================
  // LOAD STUDENT SKILL ANALYSIS
  // =====================================================

  useEffect(() => {
    const loadSkillAnalysis = async () => {
      if (!student?.student_id) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `http://127.0.0.1:5000/api/skill-gap/${student.student_id}`
        );

        const data = await response.json();

        if (response.ok) {
          setAnalysis({
            ...data,

            targetCareer:
              data.targetCareer ||
              data.target_career ||
              data.career_goal ||
              student.career_goal,

            matchPercentage:
              data.matchPercentage ??
              data.match_percentage ??
              0,

            totalRequiredSkills:
              data.totalRequiredSkills ??
              data.total_required_skills ??
              0,

            totalMatchedSkills:
              data.totalMatchedSkills ??
              data.total_matched_skills ??
              0,

            totalMissingSkills:
              data.totalMissingSkills ??
              data.total_missing_skills ??
              0,

            matchedSkills:
              data.matchedSkills ||
              data.matched_skills ||
              [],

            missingSkills:
              data.missingSkills ||
              data.missing_skills ||
              [],

            highPrioritySkills:
              data.highPrioritySkills ||
              data.high_priority_skills ||
              [],

            mediumPrioritySkills:
              data.mediumPrioritySkills ||
              data.medium_priority_skills ||
              [],

            skillDetails:
              data.skillDetails ||
              data.skill_details ||
              []
          });
        } else {
          alert(data.message || "Could not load skill analysis.");
        }
      } catch (error) {
        console.error("Student skill analysis error:", error);

        alert(
          "Could not connect to SkillNexus backend. Please make sure Flask is running."
        );
      }

      setLoading(false);
    };

    loadSkillAnalysis();
  }, [student?.student_id]);

  // =====================================================
  // LOAD STUDENT LEARNING PROGRESS
  // =====================================================

  useEffect(() => {
    const loadLearningProgress = async () => {
      if (!student?.student_id) {
        setLearningLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `http://127.0.0.1:5000/api/faculty/student/${student.student_id}/learning-progress`
        );

        const data = await response.json();

        if (response.ok) {
          setLearningProgress(data);
        } else {
          console.error(
            data.message || "Could not load learning progress."
          );
        }
      } catch (error) {
        console.error("Learning progress error:", error);
      }

      setLearningLoading(false);
    };

    loadLearningProgress();
  }, [student?.student_id]);

  // =====================================================
  // STUDENT NOT FOUND
  // =====================================================

  if (!student) {
    return (
      <div className="app-page">
        <Navbar />

        <div className="page-container">
          <div
            className="form-card"
            style={{
              textAlign: "center",
              marginTop: "40px"
            }}
          >
            <h2>Student Not Found</h2>

            <p style={{ marginTop: "10px" }}>
              Please open the student details from the Faculty Dashboard.
            </p>

            <Link
              to="/faculty"
              className="primary-btn form-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none"
              }}
            >
              ← Back to Faculty Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // =====================================================
  // LEARNING PROGRESS CALCULATION
  // =====================================================

  const completedWeeks =
    learningProgress?.completed_weeks || [];

  const completedCount =
    learningProgress?.completed_count ??
    completedWeeks.length ??
    0;

  const totalWeeks = 6;

  const learningPercentage =
    Math.min(
      Math.round((completedCount / totalWeeks) * 100),
      100
    );

  // =====================================================
  // PAGE
  // =====================================================

  return (
    <div className="app-page">
      <Navbar />

      <div className="page-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="page-header">
          <span className="page-badge">
            STUDENT ANALYSIS
          </span>

          <h1>{student.name}</h1>

          <p>
            Student profile, skill analysis and learning progress.
          </p>
        </div>

        {/* =================================================
            BACK BUTTON
        ================================================= */}

        <Link
          to="/faculty"
          className="primary-btn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            textDecoration: "none",
            marginBottom: "30px"
          }}
        >
          ← Back to Students
        </Link>

        {/* =================================================
            STUDENT BASIC INFORMATION
        ================================================= */}

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon blue-icon">
              🎓
            </div>

            <h3>Student</h3>

            <h2>{student.name}</h2>

            <p>{student.email}</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon purple-icon">
              🎯
            </div>

            <h3>Career Goal</h3>

            <h2 style={{ fontSize: "20px" }}>
              {student.career_goal}
            </h2>

            <p>Target Career</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon orange-icon">
              📚
            </div>

            <h3>Education</h3>

            <h2 style={{ fontSize: "18px" }}>
              {student.education}
            </h2>

            <p>Academic Background</p>
          </div>

        </div>

        {/* =================================================
            CURRENT SKILLS
        ================================================= */}

        <div
          className="section-heading dashboard-section"
          style={{ marginTop: "50px" }}
        >
          <span>STUDENT PROFILE</span>

          <h2>Current Skills</h2>

          <p>
            Skills currently listed by the student.
          </p>
        </div>

        <div className="form-card">

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px"
            }}
          >
            {(student.skills || "")
              .split(",")
              .filter((skill) => skill.trim() !== "")
              .map((skill) => (
                <span
                  key={skill}
                  style={{
                    padding: "9px 14px",
                    borderRadius: "10px",
                    background: "#eef2ff",
                    color: "#4338ca",
                    fontSize: "14px",
                    fontWeight: "600"
                  }}
                >
                  {skill.trim()}
                </span>
              ))}
          </div>

        </div>

        {/* =================================================
            SKILL ANALYSIS
        ================================================= */}

        <div
          className="section-heading dashboard-section"
          style={{ marginTop: "50px" }}
        >
          <span>SKILLNEXUS INTELLIGENCE</span>

          <h2>Skill Analysis</h2>

          <p>
            Skill requirements compared with the student's
            current skills.
          </p>
        </div>

        {loading ? (

          <div className="form-card">
            <p>Analyzing student skills...</p>
          </div>

        ) : analysis ? (

          <>
            {/* =================================================
                CAREER READINESS
            ================================================= */}

            <div className="form-card">

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "12px"
                }}
              >

                <div>
                  <h3>Career Readiness</h3>

                  <p style={{ marginTop: "5px" }}>
                    {analysis.targetCareer}
                  </p>
                </div>

                <h2 style={{ color: "#4f46e5" }}>
                  {analysis.matchPercentage}%
                </h2>

              </div>

              <div
                style={{
                  width: "100%",
                  height: "12px",
                  background: "#e5e7eb",
                  borderRadius: "20px",
                  overflow: "hidden"
                }}
              >

                <div
                  style={{
                    width: `${analysis.matchPercentage}%`,
                    height: "100%",
                    background:
                      "linear-gradient(90deg, #6d5dfc, #4f46e5)",
                    borderRadius: "20px",
                    transition: "width 0.5s ease"
                  }}
                />

              </div>

            </div>

            {/* =================================================
                SKILL COUNTS
            ================================================= */}

            <div className="feature-grid">

              <div className="feature-card">
                <div className="feature-icon blue-icon">
                  📊
                </div>

                <h3>Required Skills</h3>

                <h2>
                  {analysis.totalRequiredSkills}
                </h2>

                <p>
                  Skills required for career
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon purple-icon">
                  ✅
                </div>

                <h3>Matched Skills</h3>

                <h2>
                  {analysis.totalMatchedSkills}
                </h2>

                <p>
                  Skills already available
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon orange-icon">
                  ⚡
                </div>

                <h3>Missing Skills</h3>

                <h2>
                  {analysis.totalMissingSkills}
                </h2>

                <p>
                  Skills to develop
                </p>
              </div>

            </div>

            {/* =================================================
                MATCHED SKILLS
            ================================================= */}

            <div
              className="form-card"
              style={{ marginTop: "30px" }}
            >

              <h2>✅ Matched Skills</h2>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginTop: "18px"
                }}
              >

                {analysis.matchedSkills.length === 0 ? (

                  <p>No matched skills found.</p>

                ) : (

                  analysis.matchedSkills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        padding: "8px 12px",
                        borderRadius: "9px",
                        background: "#dcfce7",
                        color: "#166534",
                        fontSize: "13px",
                        fontWeight: "600"
                      }}
                    >
                      {skill}
                    </span>
                  ))

                )}

              </div>

            </div>

            {/* =================================================
                MISSING SKILLS
            ================================================= */}

            <div
              className="form-card"
              style={{ marginTop: "25px" }}
            >

              <h2>❌ Missing Skills</h2>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginTop: "18px"
                }}
              >

                {analysis.missingSkills.length === 0 ? (

                  <p>No missing skills found.</p>

                ) : (

                  analysis.missingSkills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        padding: "8px 12px",
                        borderRadius: "9px",
                        background: "#fee2e2",
                        color: "#b91c1c",
                        fontSize: "13px",
                        fontWeight: "600"
                      }}
                    >
                      {skill}
                    </span>
                  ))

                )}

              </div>

            </div>

            {/* =================================================
                HIGH PRIORITY SKILLS
            ================================================= */}

            <div
              className="form-card"
              style={{ marginTop: "25px" }}
            >

              <h2>⚡ High Priority Skills</h2>

              <p style={{ marginTop: "8px" }}>
                Skills that should receive immediate attention.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginTop: "18px"
                }}
              >

                {analysis.highPrioritySkills.length === 0 ? (

                  <p>No high-priority skills found.</p>

                ) : (

                  analysis.highPrioritySkills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        padding: "8px 12px",
                        borderRadius: "9px",
                        background: "#fff7ed",
                        color: "#c2410c",
                        fontSize: "13px",
                        fontWeight: "600"
                      }}
                    >
                      {skill}
                    </span>
                  ))

                )}

              </div>

            </div>

            {/* =================================================
                MEDIUM PRIORITY SKILLS
            ================================================= */}

            <div
              className="form-card"
              style={{ marginTop: "25px" }}
            >

              <h2>📌 Medium Priority Skills</h2>

              <p style={{ marginTop: "8px" }}>
                Skills that can be developed after the high-priority
                requirements.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginTop: "18px"
                }}
              >

                {analysis.mediumPrioritySkills.length === 0 ? (

                  <p>No medium-priority skills found.</p>

                ) : (

                  analysis.mediumPrioritySkills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        padding: "8px 12px",
                        borderRadius: "9px",
                        background: "#eff6ff",
                        color: "#1d4ed8",
                        fontSize: "13px",
                        fontWeight: "600"
                      }}
                    >
                      {skill}
                    </span>
                  ))

                )}

              </div>

            </div>

          </>

        ) : (

          <div className="form-card">

            <h2>Skill Analysis Unavailable</h2>

            <p style={{ marginTop: "10px" }}>
              We could not generate the skill analysis for this
              student.
            </p>

          </div>

        )}
        {/* =====================================================
    RECOMMENDED LEARNING ROADMAP
===================================================== */}

<div
  className="section-heading dashboard-section"
  style={{ marginTop: "55px" }}
>
  <span>PERSONALIZED LEARNING</span>

  <h2>Recommended Learning Roadmap</h2>

  <p>
    Learning topics recommended based on the student's skill gaps
    and career requirements.
  </p>
</div>

<div className="feature-grid">
  {(analysis?.skillDetails || [])
    .slice()
    .sort(
      (a, b) =>
        (a.learning_priority || 99) -
        (b.learning_priority || 99)
    )
    .map((item, index) => (
      <div
        className="feature-card"
        key={`${item.skill}-${index}`}
      >
        <div
          className={
            item.importance === "High"
              ? "feature-icon orange-icon"
              : "feature-icon purple-icon"
          }
        >
          {item.importance === "High" ? "⚡" : "📚"}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px"
          }}
        >
          <h3 style={{ margin: 0 }}>
            {item.skill}
          </h3>

          <span
            style={{
              padding: "5px 9px",
              borderRadius: "8px",
              background:
                item.importance === "High"
                  ? "#fff7ed"
                  : "#eef2ff",
              color:
                item.importance === "High"
                  ? "#c2410c"
                  : "#4338ca",
              fontSize: "11px",
              fontWeight: "700"
            }}
          >
            {item.importance}
          </span>
        </div>

        <p style={{ marginTop: "12px" }}>
          <strong>Learning Topic:</strong>{" "}
          {item.learning_topic}
        </p>

        <p style={{ marginTop: "8px" }}>
          <strong>Required Level:</strong>{" "}
          {item.required_level}
        </p>

        <p style={{ marginTop: "8px" }}>
          <strong>Category:</strong>{" "}
          {item.category}
        </p>

        <p style={{ marginTop: "8px" }}>
          <strong>Priority:</strong>{" "}
          {item.learning_priority}
        </p>
      </div>
    ))}
</div>

        {/* =====================================================
            LEARNING PROGRESS
        ===================================================== */}

        <div
          className="section-heading dashboard-section"
          style={{ marginTop: "55px" }}
        >
          <span>LEARNING INTELLIGENCE</span>

          <h2>Learning Progress</h2>

          <p>
            Track the student's progress through the SkillNexus
            learning roadmap.
          </p>
        </div>

        {learningLoading ? (

          <div className="form-card">
            <p>Loading learning progress...</p>
          </div>

        ) : (

          <>

            {/* PROGRESS SUMMARY */}

            <div className="form-card">

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "12px"
                }}
              >

                <div>
                  <h3>Learning Completion</h3>

                  <p style={{ marginTop: "5px" }}>
                    {completedCount} of {totalWeeks} learning
                    weeks completed
                  </p>
                </div>

                <h2 style={{ color: "#4f46e5" }}>
                  {learningPercentage}%
                </h2>

              </div>

              {/* PROGRESS BAR */}

              <div
                style={{
                  width: "100%",
                  height: "12px",
                  background: "#e5e7eb",
                  borderRadius: "20px",
                  overflow: "hidden"
                }}
              >

                <div
                  style={{
                    width: `${learningPercentage}%`,
                    height: "100%",
                    background:
                      "linear-gradient(90deg, #6d5dfc, #4f46e5)",
                    borderRadius: "20px",
                    transition: "width 0.5s ease"
                  }}
                />

              </div>

            </div>

            {/* COMPLETED WEEKS */}

            <div
              className="form-card"
              style={{ marginTop: "25px" }}
            >

              <h2>✅ Completed Learning</h2>

              {completedWeeks.length === 0 ? (

                <p style={{ marginTop: "12px" }}>
                  The student has not completed any learning
                  weeks yet.
                </p>

              ) : (

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    marginTop: "18px"
                  }}
                >

                  {completedWeeks.map((week) => (
                    <span
                      key={week}
                      style={{
                        padding: "9px 14px",
                        borderRadius: "10px",
                        background: "#dcfce7",
                        color: "#166534",
                        fontSize: "13px",
                        fontWeight: "600"
                      }}
                    >
                      Week {week} ✓
                    </span>
                  ))}

                </div>

              )}

            </div>

            {/* REMAINING WEEKS */}

            <div
              className="form-card"
              style={{ marginTop: "25px" }}
            >

              <h2>📚 Remaining Learning</h2>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginTop: "18px"
                }}
              >

                {Array.from(
                  { length: totalWeeks },
                  (_, index) => index + 1
                )
                  .filter(
                    (week) => !completedWeeks.includes(week)
                  )
                  .map((week) => (
                    <span
                      key={week}
                      style={{
                        padding: "9px 14px",
                        borderRadius: "10px",
                        background: "#eef2ff",
                        color: "#4338ca",
                        fontSize: "13px",
                        fontWeight: "600"
                      }}
                    >
                      Week {week}
                    </span>
                  ))}

              </div>

            </div>

          </>

        )}

      </div>
    </div>
  );
}/* =====================================================
   FACULTY LOGIN
===================================================== */

function FacultyLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFacultyLogin = async () => {
    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:5000/api/faculty/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Faculty login failed.");
        setLoading(false);
        return;
      }

      localStorage.setItem(
        "skillnexusFaculty",
        JSON.stringify(data.faculty)
      );

      alert("Faculty login successful! 🎉");
      window.location.href = "/faculty";
    } catch (error) {
      console.error("Faculty login error:", error);
      alert(
        "Could not connect to SkillNexus backend. Please make sure Flask is running."
      );
    }

    setLoading(false);
  };

  return (
    <div className="app-page">
      <Navbar />
      <div className="page-container">
        <div className="form-card login-card">
          <div className="page-header">
            <span className="page-badge">FACULTY PORTAL</span>
            <h1>Faculty Login</h1>
            <p>Login to monitor students and their skill development.</p>
          </div>

          <label>Faculty Email</label>
          <input
            type="email"
            placeholder="Enter faculty email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="primary-btn form-btn"
            type="button"
            onClick={handleFacultyLogin}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Faculty Login →"}
          </button>

          <p className="form-footer">
            Don't have a faculty account? <Link to="/faculty-signup">Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

/* =====================================================
   FACULTY SIGNUP
===================================================== */

function FacultySignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [institution, setInstitution] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFacultySignup = async () => {
    if (!name || !email || !password || !department || !institution) {
      alert("Please fill all the fields.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:5000/api/faculty/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            password,
            department,
            institution
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Faculty signup failed.");
        setLoading(false);
        return;
      }

      alert("Faculty account created successfully! 🎉");
      window.location.href = "/faculty-login";
    } catch (error) {
      console.error("Faculty signup error:", error);
      alert(
        "Could not connect to SkillNexus backend. Please make sure Flask is running."
      );
    }

    setLoading(false);
  };

  return (
    <div className="app-page">
      <Navbar />
      <div className="page-container">
        <div className="form-card">
          <div className="page-header">
            <span className="page-badge">FACULTY PORTAL</span>
            <h1>Create Faculty Account</h1>
            <p>Join SkillNexus and monitor student skill development.</p>
          </div>

          <label>Faculty Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter faculty email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Department</label>
          <input
            type="text"
            placeholder="e.g. Computer Science & Engineering"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />

          <label>Institution</label>
          <input
            type="text"
            placeholder="Enter college / institution name"
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
          />

          <button
            className="primary-btn form-btn"
            type="button"
            onClick={handleFacultySignup}
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Faculty Account →"}
          </button>

          <p className="form-footer">
            Already have an account? <Link to="/faculty-login">Faculty Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

/* =====================================================
   404 PAGE
===================================================== */

function NotFound() {
  return (
    <div className="app-page">
      <Navbar />

      <div className="page-container">

        <div className="page-header">

          <span className="page-badge">
            404
          </span>

          <h1>
            Page Not Found
          </h1>

          <p>
            The page you are looking for doesn't exist.
          </p>

          <Link
            to="/"
            className="primary-btn form-btn"
          >
            ← Back to Home
          </Link>

        </div>

      </div>
    </div>
  );
}
// =====================================================
// SMART CAREER RECOMMENDATIONS
// =====================================================

function CareerRecommendations() {
  const [recommendations, setRecommendations] = useState([]);
  const [currentSkills, setCurrentSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedStudent = localStorage.getItem("skillnexusStudent");

    if (!savedStudent) {
      setError("Please create or login to your SkillNexus account first.");
      setLoading(false);
      return;
    }

    const studentData = JSON.parse(savedStudent);
    const studentId = studentData.student_id;

    if (!studentId) {
      setError("Student ID not found. Please login again.");
      setLoading(false);
      return;
    }

    const fetchRecommendations = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:5000/api/career-recommendations/${studentId}`
        );

        const data = await response.json();

        if (!response.ok) {
          setError(data.message || "Failed to load career recommendations.");
          setLoading(false);
          return;
        }

        setCurrentSkills(data.current_skills || []);
        setRecommendations(data.recommendations || []);

      } catch (error) {
        console.error("Career recommendation error:", error);

        setError(
          "Could not connect to SkillNexus backend. Please make sure the Flask server is running."
        );
      }

      setLoading(false);
    };

    fetchRecommendations();
  }, []);

  if (loading) {
    return (
      <div className="app-page">
        <Navbar />

        <div className="page-container">
          <div className="page-header">
            <span className="page-badge">
              AI CAREER INTELLIGENCE
            </span>

            <h1>
              Finding Your Career Paths...
            </h1>

            <p>
              SkillNexus is comparing your skills with available career paths.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app-page">
        <Navbar />

        <div className="page-container">
          <div className="form-card">
            <h2>Career Recommendations</h2>

            <p style={{ color: "#dc2626", marginTop: "15px" }}>
              {error}
            </p>

            <Link
              to="/login"
              className="primary-btn"
              style={{
                display: "inline-block",
                marginTop: "20px",
                textDecoration: "none"
              }}
            >
              Login →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-page">
      <Navbar />

      <div className="page-container">

        <div className="page-header">

          <span className="page-badge">
            AI CAREER INTELLIGENCE
          </span>

          <h1>
            Career Recommendations
          </h1>

          <p>
            Discover career paths that match your current skills.
          </p>

        </div>

        {/* CURRENT SKILLS */}

        <div
          className="form-card"
          style={{
            marginBottom: "30px"
          }}
        >

          <h2 style={{ marginBottom: "12px" }}>
            Your Current Skills
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px"
            }}
          >

            {currentSkills.map((skill) => (
              <span
                key={skill}
                style={{
                  padding: "8px 14px",
                  borderRadius: "20px",
                  background: "#eef2ff",
                  color: "#4338ca",
                  fontWeight: "600",
                  fontSize: "14px"
                }}
              >
                ✓ {skill}
              </span>
            ))}

          </div>

        </div>

        {/* CAREER CARDS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px"
          }}
        >

          {recommendations.map((career, index) => (

            <div
              key={career.career}
              className="form-card"
              style={{
                position: "relative",
                padding: "26px",
                margin: 0
              }}
            >

              {/* Rank */}

              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  background: "#eef2ff",
                  color: "#4338ca",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "700"
                }}
              >
                {index + 1}
              </div>

              {/* Career Name */}

              <h2
                style={{
                  marginRight: "45px",
                  marginBottom: "18px"
                }}
              >
                {career.career}
              </h2>

              {/* Match Percentage */}

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "8px"
                }}
              >

                <span
                  style={{
                    fontWeight: "600",
                    color: "#64748b"
                  }}
                >
                  Skill Match
                </span>

                <span
                  style={{
                    fontSize: "22px",
                    fontWeight: "800",
                    color:
                      career.match_percentage >= 50
                        ? "#16a34a"
                        : career.match_percentage >= 25
                        ? "#d97706"
                        : "#4f46e5"
                  }}
                >
                  {career.match_percentage}%
                </span>
                <Link
  to={`/career-details/${encodeURIComponent(career.career)}`}
  state={{ career }}
  className="primary-btn"
  style={{
    display: "block",
    width: "100%",
    marginTop: "20px",
    textAlign: "center",
    textDecoration: "none",
    boxSizing: "border-box"
  }}
>
  View Career Details →
</Link>

              </div>

              {/* Progress Bar */}

              <div
                style={{
                  width: "100%",
                  height: "9px",
                  background: "#e2e8f0",
                  borderRadius: "10px",
                  overflow: "hidden",
                  marginBottom: "20px"
                }}
              >

                <div
                  style={{
                    width: `${career.match_percentage}%`,
                    height: "100%",
                    background:
                      career.match_percentage >= 50
                        ? "#16a34a"
                        : career.match_percentage >= 25
                        ? "#f59e0b"
                        : "#4f46e5",
                    borderRadius: "10px"
                  }}
                />

              </div>

              {/* Matched */}

              <div style={{ marginBottom: "18px" }}>

                <p
                  style={{
                    fontWeight: "700",
                    marginBottom: "8px"
                  }}
                >
                  ✓ Matched Skills ({career.matched_count})
                </p>

                <p
                  style={{
                    color: "#64748b",
                    fontSize: "14px",
                    lineHeight: "1.6"
                  }}
                >
                  {career.matched_skills.length > 0
                    ? career.matched_skills.join(", ")
                    : "No matching skills yet."}
                </p>

              </div>

              {/* Missing */}

              <div>

                <p
                  style={{
                    fontWeight: "700",
                    marginBottom: "8px"
                  }}
                >
                  ⚠ Skills to Develop ({career.missing_count})
                </p>

                <p
                  style={{
                    color: "#64748b",
                    fontSize: "14px",
                    lineHeight: "1.6"
                  }}
                >
                  {career.missing_skills.slice(0, 6).join(", ")}

                  {career.missing_skills.length > 6
                    ? " ..."
                    : ""}
                </p>

              </div>

              {/* Footer */}
              {/* Footer */}

<div
  style={{
    marginTop: "22px",
    paddingTop: "16px",
    borderTop: "1px solid #e2e8f0",
    color: "#64748b",
    fontSize: "13px"
  }}
>
  {career.matched_count} of{" "}
  {career.total_required_skills} required skills matched
</div>

              <div
                style={{
                  marginTop: "22px",
                  paddingTop: "16px",
                  borderTop: "1px solid #e2e8f0",
                  color: "#64748b",
                  fontSize: "13px"
                }}
              >
                {career.matched_count} of{" "}
                {career.total_required_skills} required skills matched
              </div>

            </div>

          ))}

        </div>

      </div>
    </div>
  );
}


/* =====================================================
   APP ROUTES
===================================================== */

/* =====================================================
   APP ROUTES
===================================================== */

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/onboarding" element={<Onboarding />} />

      <Route path="/login" element={<Login />} />

      <Route path="/industry-login" element={<IndustryLogin />} />

      <Route
        path="/industry-opportunities"
        element={<IndustryOpportunities />}
      />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/skill-gap" element={<SkillGap />} />

      <Route
        path="/career-recommendations"
        element={<CareerRecommendations />}
      />

      <Route path="/learning" element={<Learning />} />

      <Route path="/opportunities" element={<Opportunities />} />

      <Route
        path="/ai-career-advisor"
        element={<AICareerAdvisor />}
      />

      <Route path="/industry-signup" element={<IndustrySignup />} />

      <Route path="/profile" element={<Profile />} />

      <Route
        path="/career-details/:careerName"
        element={<CareerDetails />}
      />

      <Route
        path="/industry-post-opportunity"
        element={<IndustryPostOpportunity />}
      />

      <Route
        path="/industry-dashboard"
        element={<IndustryDashboard />}
      />

      {/* FACULTY */}

      <Route path="/faculty-signup" element={<FacultySignup />} />

      <Route path="/faculty-login" element={<FacultyLogin />} />

      <Route path="/faculty" element={<FacultyDashboard />} />

      <Route
        path="/faculty/student/:studentId"
        element={<FacultyStudentDetails />}
      />

      {/* 404 */}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
// =====================================================
// CAREER DETAILS
// =====================================================

function CareerDetails() {
  const location = window.location;
  const careerName = decodeURIComponent(
    location.pathname.split("/career-details/")[1] || ""
  );

  const [career, setCareer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedStudent = localStorage.getItem("skillnexusStudent");

    if (!savedStudent) {
      setError("Please login to view career details.");
      setLoading(false);
      return;
    }

    const studentData = JSON.parse(savedStudent);
    const studentId = studentData.student_id;

    if (!studentId) {
      setError("Student ID not found. Please login again.");
      setLoading(false);
      return;
    }

    const fetchCareerDetails = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:5000/api/career-recommendations/${studentId}`
        );

        const data = await response.json();

        if (!response.ok) {
          setError(
            data.message || "Failed to load career details."
          );
          setLoading(false);
          return;
        }

        const selectedCareer = data.recommendations.find(
          (item) =>
            item.career.toLowerCase() ===
            careerName.toLowerCase()
        );

        if (!selectedCareer) {
          setError("Career details not found.");
          setLoading(false);
          return;
        }

        setCareer(selectedCareer);

      } catch (error) {
        console.error("Career details error:", error);

        setError(
          "Could not connect to SkillNexus backend."
        );
      }

      setLoading(false);
    };

    fetchCareerDetails();
  }, [careerName]);

  if (loading) {
    return (
      <div className="app-page">
        <Navbar />

        <div className="page-container">
          <div className="page-header">

            <span className="page-badge">
              CAREER INTELLIGENCE
            </span>

            <h1>
              Loading Career Details...
            </h1>

            <p>
              SkillNexus is preparing your personalized career analysis.
            </p>

          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app-page">
        <Navbar />

        <div className="page-container">

          <div className="form-card">

            <h2>
              Career Details
            </h2>

            <p
              style={{
                color: "#dc2626",
                marginTop: "15px"
              }}
            >
              {error}
            </p>

            <Link
              to="/career-recommendations"
              className="primary-btn"
              style={{
                display: "inline-block",
                marginTop: "20px",
                textDecoration: "none"
              }}
            >
              ← Back to Career Paths
            </Link>

          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="app-page">

      <Navbar />

      <div className="page-container">

        {/* HEADER */}

        <div className="page-header">

          <span className="page-badge">
            CAREER INTELLIGENCE
          </span>

          <h1>
            {career.career}
          </h1>

          <p>
            Personalized analysis based on your current skills.
          </p>

        </div>


        {/* MATCH SUMMARY */}

        <div
          className="form-card"
          style={{
            marginBottom: "25px"
          }}
        >

          <h2>
            Your Career Match
          </h2>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "25px",
              marginTop: "20px",
              flexWrap: "wrap"
            }}
          >

            <div
              style={{
                width: "110px",
                height: "110px",
                borderRadius: "50%",
                background: "#eef2ff",
                color: "#4338ca",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                fontWeight: "800"
              }}
            >
              {career.match_percentage}%
            </div>

            <div>

              <h3>
                Skill Match
              </h3>

              <p
                style={{
                  color: "#64748b",
                  marginTop: "8px"
                }}
              >
                {career.matched_count} of{" "}
                {career.total_required_skills} required skills
                currently matched.
              </p>

            </div>

          </div>

        </div>


        {/* MATCHED SKILLS */}

        <div
          className="form-card"
          style={{
            marginBottom: "25px"
          }}
        >

          <h2>
            ✓ Your Matched Skills
          </h2>

          <p
            style={{
              color: "#64748b",
              marginTop: "8px"
            }}
          >
            Skills you already have that are relevant to this career.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginTop: "18px"
            }}
          >

            {career.matched_skills.length > 0 ? (

              career.matched_skills.map((skill) => (

                <span
                  key={skill}
                  style={{
                    padding: "9px 15px",
                    borderRadius: "20px",
                    background: "#dcfce7",
                    color: "#166534",
                    fontWeight: "600"
                  }}
                >
                  ✓ {skill}
                </span>

              ))

            ) : (

              <p style={{ color: "#64748b" }}>
                No matching skills yet.
              </p>

            )}

          </div>

        </div>


        {/* MISSING SKILLS */}

        <div
          className="form-card"
          style={{
            marginBottom: "25px"
          }}
        >

          <h2>
            ⚠ Skills You Need to Develop
          </h2>

          <p
            style={{
              color: "#64748b",
              marginTop: "8px"
            }}
          >
            These skills can help improve your readiness for this career.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "14px",
              marginTop: "20px"
            }}
          >

            {career.missing_skills.map((skill, index) => (

              <div
                key={skill}
                style={{
                  padding: "16px",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  background: "#f8fafc"
                }}
              >

                <div
                  style={{
                    fontWeight: "700",
                    marginBottom: "6px"
                  }}
                >
                  {index + 1}. {skill}
                </div>

                <div
                  style={{
                    color: "#64748b",
                    fontSize: "13px"
                  }}
                >
                  Skill gap identified
                </div>

              </div>

            ))}

          </div>

        </div>


        {/* CAREER INSIGHT */}

        <div
          className="form-card"
          style={{
            marginBottom: "25px"
          }}
        >

          <h2>
            💡 Career Insight
          </h2>

          <p
            style={{
              color: "#64748b",
              lineHeight: "1.7",
              marginTop: "12px"
            }}
          >
            Your current skill profile has a{" "}
            <strong>
              {career.match_percentage}%
            </strong>{" "}
            match with the requirements represented in the
            SkillNexus career dataset for{" "}
            <strong>
              {career.career}
            </strong>.
            Focus on the missing skills to progressively improve
            your career readiness.
          </p>

        </div>


        {/* ACTIONS */}

        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap"
          }}
        >

          <Link
            to="/learning"
            className="primary-btn"
            style={{
              textDecoration: "none"
            }}
          >
            Start Learning →
          </Link>

          <Link
            to="/career-recommendations"
            className="primary-btn"
            style={{
              textDecoration: "none"
            }}
          >
            ← Back to Career Paths
          </Link>

        </div>

      </div>

    </div>
  );
}
// =========================================================
// INDUSTRY SIGNUP
// =========================================================

function IndustrySignup() {
  const [formData, setFormData] = useState({
    company_name: "",
    email: "",
    password: "",
    industry_type: "",
    location: "",
    about_company: "",
    website: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage("");
    setError("");

    if (
      !formData.company_name.trim() ||
      !formData.email.trim() ||
      !formData.password.trim() ||
      !formData.industry_type.trim()
    ) {
      setError(
        "Company name, email, password and industry type are required."
      );
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:5000/api/industry/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (!response.ok || data.status !== "success") {
        throw new Error(
          data.message || "Industry signup failed."
        );
      }

      setMessage(
        "Industry account created successfully. You can now login."
      );

      setFormData({
        company_name: "",
        email: "",
        password: "",
        industry_type: "",
        location: "",
        about_company: "",
        website: ""
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="industry-auth-page">

      <div className="industry-auth-card">

        <div className="industry-auth-header">
          <div className="industry-auth-logo">
            ✦
          </div>

          <p className="industry-auth-label">
            SKILLNEXUS INDUSTRY
          </p>

          <h1>Create Industry Account</h1>

          <p>
            Connect your organization with skilled students,
            internships and career opportunities.
          </p>
        </div>

        {error && (
          <div className="industry-form-error">
            {error}
          </div>
        )}

        {message && (
          <div className="industry-form-success">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="industry-form-group">
            <label>Company Name *</label>

            <input
              type="text"
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
              placeholder="Enter company name"
            />
          </div>

          <div className="industry-form-row">

            <div className="industry-form-group">
              <label>Email *</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="company@example.com"
              />
            </div>

            <div className="industry-form-group">
              <label>Password *</label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Minimum 6 characters"
              />
            </div>

          </div>

          <div className="industry-form-group">
            <label>Industry Type *</label>

            <input
              type="text"
              name="industry_type"
              value={formData.industry_type}
              onChange={handleChange}
              placeholder="e.g. IT, Healthcare, Manufacturing"
            />
          </div>

          <div className="industry-form-group">
            <label>Location</label>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Company location"
            />
          </div>

          <div className="industry-form-group">
            <label>Website</label>

            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="https://example.com"
            />
          </div>

          <div className="industry-form-group">
            <label>About Company</label>

            <textarea
              name="about_company"
              value={formData.about_company}
              onChange={handleChange}
              placeholder="Tell students about your organization..."
              rows="4"
            />
          </div>

          <button
            type="submit"
            className="industry-submit-btn"
            disabled={loading}
          >
            {loading
              ? "Creating Account..."
              : "Create Industry Account →"}
          </button>

        </form>

        <div className="industry-auth-footer">
          <span>Already have an industry account?</span>

          <Link to="/industry-login">
            Login
          </Link>
        </div>

      </div>

    </div>
  );
}
// =========================================================
// INDUSTRY LOGIN
// =========================================================

function IndustryLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");

    if (!formData.email.trim() || !formData.password.trim()) {
      setError("Email and password are required.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:5000/api/industry/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (!response.ok || data.status !== "success") {
        throw new Error(
          data.message || "Industry login failed."
        );
      }

      // Store actual database response
      localStorage.setItem(
        "skillnexusIndustry",
        JSON.stringify(data.industry)
      );

      // Redirect to Industry Dashboard
      window.location.href = "/industry-dashboard";

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="industry-auth-page">

      <div className="industry-auth-card">

        <div className="industry-auth-header">

          <div className="industry-auth-logo">
            ✦
          </div>

          <p className="industry-auth-label">
            SKILLNEXUS INDUSTRY
          </p>

          <h1>Welcome Back</h1>

          <p>
            Login to manage your organization and connect
            with skilled students.
          </p>

        </div>

        {error && (
          <div className="industry-form-error">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="industry-form-group">

            <label>Email *</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="company@example.com"
            />

          </div>

          <div className="industry-form-group">

            <label>Password *</label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />

          </div>

          <button
            type="submit"
            className="industry-submit-btn"
            disabled={loading}
          >
            {loading
              ? "Logging in..."
              : "Login to Industry Portal →"}
          </button>

        </form>

        <div className="industry-auth-footer">

          <span>Don't have an industry account?</span>

          <Link to="/industry-signup">
            Create Account
          </Link>

        </div>

      </div>

    </div>
  );
}