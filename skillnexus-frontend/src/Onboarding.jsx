import "./App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Onboarding() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    college: "",
    branch: "",
    skills: "",
    career: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "skillnexusProfile",
      JSON.stringify(formData)
    );

    navigate("/dashboard");
  };

  return (
    <div className="onboarding-page">

      <div className="onboarding-card">

        <h1>Build Your Skill Profile</h1>

        <p className="onboarding-subtitle">
          Tell us about yourself so SkillNexus can understand your
          skills and career goals.
        </p>
<form onSubmit={handleSubmit}>

  <label>Your Name</label>
  <input
    type="text"
    name="name"
    placeholder="Enter your name"
    value={formData.name}
    onChange={handleChange}
    required
  />

  <label>College Name</label>
  <input
    type="text"
    name="college"
    placeholder="Enter your college"
    value={formData.college}
    onChange={handleChange}
    required
  />

  <label>Degree / Branch</label>
  <input
    type="text"
    name="branch"
    placeholder="e.g. Computer Science Engineering"
    value={formData.branch}
    onChange={handleChange}
    required
  />

  <label>Your Skills</label>
  <input
    type="text"
    name="skills"
    placeholder="e.g. Python, Java, SQL, React"
    value={formData.skills}
    onChange={handleChange}
    required
  />

  <label>Target Career</label>
  <input
    type="text"
    name="career"
    placeholder="e.g. Full Stack Developer"
    value={formData.career}
    onChange={handleChange}
    required
  />

  <button type="submit" className="profile-btn">
    Create My Profile →
  </button>

</form>

      </div>

    </div>
  );
}

export default Onboarding;