import "./App.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const profile = JSON.parse(
    localStorage.getItem("skillnexusProfile")
  );

  if (!profile) {
    return (
      <div className="dashboard-page">
        <div className="dashboard-card">
          <h2>No profile found</h2>
          <p>Please create your SkillNexus profile first.</p>

          <button
            className="profile-btn"
            onClick={() => navigate("/onboarding")}
          >
            Create Profile →
          </button>
        </div>
      </div>
    );
  }

  const skills = profile.skills
    .split(",")
    .map((skill) => skill.trim())
    .filter((skill) => skill !== "");

  return (
    <div className="dashboard-page">

      {/* Header */}
      <header className="dashboard-header">
        <div>
          <p className="tagline">SKILLNEXUS DASHBOARD</p>

          <h1>Welcome, {profile.name} 👋</h1>

          <p>
            Let's understand your skills and build your career.
          </p>
        </div>

        <button
          className="login-btn"
          onClick={() => navigate("/")}
        >
          Home
        </button>
      </header>

      {/* Profile Overview */}
      <section className="dashboard-grid">

        <div className="dashboard-card">
          <h3>🎓 Education</h3>

          <p>{profile.college}</p>

          <strong>{profile.branch}</strong>
        </div>

        <div className="dashboard-card">
          <h3>🎯 Target Career</h3>

          <p>{profile.career}</p>
        </div>

      </section>

      {/* Skills */}
      <section className="dashboard-card skills-section">

        <div className="section-title">
          <div>
            <h2>💻 Your Skills</h2>

            <p>
              These are the skills currently added to your profile.
            </p>
          </div>
        </div>

        <div className="skill-tags">

          {skills.map((skill, index) => (
            <span className="skill-tag" key={index}>
              {skill}
            </span>
          ))}

        </div>

      </section>

      {/* Skill Gap */}
      <section className="dashboard-card analysis-card">

        <div>
          <p className="tagline">AI CAREER INTELLIGENCE</p>

          <h2>Discover Your Skill Gap</h2>

          <p>
            SkillNexus will compare your current skills with
            the skills required for your target career.
          </p>
        </div>

        <button
          className="start-btn"
          onClick={() => navigate("/skill-gap")}
        >
          Analyze My Skills →
        </button>

      </section>

      {/* Quick Actions */}
      <section className="quick-actions">

        <div
          className="action-card"
          onClick={() => navigate("/learning")}
        >
          <span>📚</span>

          <h3>Learning Path</h3>

          <p>
            Get personalized recommendations.
          </p>
        </div>

        <div
          className="action-card"
          onClick={() => navigate("/opportunities")}
        >
          <span>🚀</span>

          <h3>Opportunities</h3>

          <p>
            Find internships and jobs.
          </p>
        </div>

        <div
          className="action-card"
          onClick={() => navigate("/profile")}
        >
          <span>👤</span>

          <h3>My Profile</h3>

          <p>
            View and manage your profile.
          </p>
        </div>

      </section>

    </div>
  );
}

export default Dashboard;