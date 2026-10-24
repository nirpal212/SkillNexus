import "./App.css";
import { useNavigate } from "react-router-dom";

function SkillGap() {
  const navigate = useNavigate();

  const profile = JSON.parse(
    localStorage.getItem("skillnexusProfile")
  );

  if (!profile) {
    return (
      <div className="dashboard-page">
        <div className="dashboard-card">
          <h2>Profile not found</h2>
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

  const currentSkills = profile.skills
    .split(",")
    .map((skill) => skill.trim().toLowerCase())
    .filter((skill) => skill !== "");

  // Basic skill requirements for different careers
  const careerSkills = {
    "full stack developer": [
      "html",
      "css",
      "javascript",
      "react",
      "node.js",
      "sql",
      "git"
    ],

    "frontend developer": [
      "html",
      "css",
      "javascript",
      "react",
      "git"
    ],

    "backend developer": [
      "python",
      "node.js",
      "sql",
      "api",
      "git"
    ],

    "data scientist": [
      "python",
      "sql",
      "statistics",
      "machine learning",
      "pandas",
      "numpy"
    ],

    "software engineer": [
      "programming",
      "data structures",
      "algorithms",
      "git",
      "sql"
    ]
  };

  const career = profile.career.toLowerCase();

  const requiredSkills =
    careerSkills[career] || [
      "programming",
      "sql",
      "git",
      "communication"
    ];

  const matchedSkills = requiredSkills.filter((skill) =>
    currentSkills.some(
      (currentSkill) =>
        currentSkill.includes(skill) ||
        skill.includes(currentSkill)
    )
  );

  const missingSkills = requiredSkills.filter(
    (skill) => !matchedSkills.includes(skill)
  );

  const matchPercentage = Math.round(
    (matchedSkills.length / requiredSkills.length) * 100
  );

  return (
    <div className="dashboard-page">

      {/* Header */}
      <div className="dashboard-header">

        <div>
          <p className="tagline">
            SKILLNEXUS ANALYSIS
          </p>

          <h1>
            Your Skill Gap Analysis
          </h1>

          <p>
            Target Career: {profile.career}
          </p>
        </div>

        <button
          className="login-btn"
          onClick={() => navigate("/dashboard")}
        >
          ← Dashboard
        </button>

      </div>


      {/* Match Score */}
      <div className="analysis-score-card">

        <div className="score-circle">
          <strong>{matchPercentage}%</strong>
          <span>Match</span>
        </div>

        <div>
          <h2>
            Career Readiness
          </h2>

          <p>
            Your current skills match {matchPercentage}% of
            the skills required for a {profile.career}.
          </p>
        </div>

      </div>


      {/* Matched and Missing Skills */}
      <div className="dashboard-grid">

        <div className="dashboard-card">

          <h3>
            ✅ Skills You Have
          </h3>

          <div className="skill-tags">

            {matchedSkills.length > 0 ? (
              matchedSkills.map((skill) => (
                <span
                  className="skill-tag"
                  key={skill}
                >
                  {skill}
                </span>
              ))
            ) : (
              <p>
                No matching skills found yet.
              </p>
            )}

          </div>

        </div>


        <div className="dashboard-card">

          <h3>
            ⚠️ Skills To Learn
          </h3>

          <div className="skill-tags">

            {missingSkills.length > 0 ? (
              missingSkills.map((skill) => (
                <span
                  className="missing-skill-tag"
                  key={skill}
                >
                  {skill}
                </span>
              ))
            ) : (
              <p>
                Excellent! No major skill gaps found.
              </p>
            )}

          </div>

        </div>

      </div>


      {/* Recommendation */}
      <div className="dashboard-card recommendation-card">

        <p className="tagline">
          RECOMMENDED NEXT STEP
        </p>

        <h2>
          Build the missing skills
        </h2>

        <p>
          Based on your target career, these skills should be
          your next learning priorities.
        </p>

        <button
          className="start-btn"
          onClick={() => navigate("/learning")}
        >
          View Learning Path →
        </button>

      </div>

    </div>
  );
}

export default SkillGap;