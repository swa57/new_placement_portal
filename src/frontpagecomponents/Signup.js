import React, { useState } from "react";
import "../frontpagecomponents/Signup.css";
import placement_portal_1 from "../assets/placement_portal_1.png";
import ErrorMessage from "../frontpagecomponents/ErrorMessage";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    skillMatrix: "",
    skillList: [],
    resume: null,
    isRegistered: false,
    showError: false,
    showPassword: false,
    showConfirmPassword: false,
    showFullFileName: false,
  });

  const removeSkill = (index) => {
    const updatedSkills = [...formData.skillList];
    updatedSkills.splice(index, 1);
    setFormData({ ...formData, skillList: updatedSkills });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      resume: event.target.files[0],
    });
  };

  const handlePasswordToggle = () => {
    setFormData((prevState) => ({
      ...formData,
      showPassword: !prevState.showPassword,
    }));
  };

  const handleConfirmPasswordToggle = () => {
    setFormData((prevState) => ({
      ...formData,
      showConfirmPassword: !prevState.showConfirmPassword,
    }));
  };

  const handleToggleFileName = () => {
    setFormData((prevState) => ({
      ...formData,
      showFullFileName: !prevState.showFullFileName,
    }));
  };

  const handleSkillKeyPress = (event) => {
    if (event.key === "Enter" && formData.skillMatrix.trim() !== "") {
      setFormData((prevState) => ({
        ...formData,
        skillList: [...prevState.skillList, prevState.skillMatrix.trim()],
        skillMatrix: "",
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { email, username, password, confirmPassword, skillMatrix, resume } = formData;

    if (!email || !username || !password || !confirmPassword || !skillMatrix || !resume) {
      setFormData({ ...formData, showError: true });
      return;
    }

    setFormData({
      ...formData,
      isRegistered: true,
    });
  };

  const handleCloseError = () => {
    setFormData({ ...formData, showError: false });
  };

  return (
    <div className="page-container">
      <div className="signup-container">
        <h1 className="portal-text">Placement Portal</h1>
        <div className="signup-image-container">
          <img src={placement_portal_1} alt="Placement Portal" className="signup-image" />
        </div>
        <div className="form-container">
          <div className="welcome-container">
            <p className="welcome-text">Create an Account</p>
          </div>
          <div className="signup-content">
            <div className="input-container">
              <label>Username:</label>
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                className="signup-input"
              />
            </div>
            <div className="input-container">
              <label>Email ID:</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="signup-input"
              />
            </div>
            <div className="input-container">
              <label>Create Password:</label>
              <div className={"password-input"}>
                <input
                  type={formData.showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create your password"
                  value={formData.password}
                  onChange={handleChange}
                  style={{ width: "100%" }}
                  className="signup-input"
                />
                <i
                  className={`fas ${formData.showPassword ? "fa-eye-slash" : "fa-eye"} password-icon`}
                  onClick={handlePasswordToggle}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="input-container">
              <label>Confirm Password:</label>
              <div className={"password-input"}>
                <input
                  type={formData.showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  style={{ width: "100%" }}
                  className="signup-input"
                />
                <i
                  className={`fas ${formData.showConfirmPassword ? "fa-eye-slash" : "fa-eye"} password-icon`}
                  onClick={handleConfirmPasswordToggle}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="input-container password-style">
              <label>Skill Matrix:</label>
              <div className="skill-matrix-container">
                <input
                  type="text"
                  name="skillMatrix"
                  placeholder="Add skills (e.g., HTML, CSS)"
                  onChange={handleChange}
                  onKeyPress={handleSkillKeyPress}
                  autoComplete="off"
                  className="signup-input"
                />
                <div className="skill-list">
                  {formData.skillList.map((skill, index) => (
                    <div key={index} className="skill">
                      {skill}
                      <span className="remove-skill" onClick={() => removeSkill(index)}>
                        &#x2715;
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={`input-container password-style`}>
              <label>Upload Resume:</label>
              <div className="file-input-container">
                <input
                  type="file"
                  accept=".pdf, .doc, .docx"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                  id="file-input"
                />
                <div className={`file-input ${formData.resume ? "file-selected" : ""}`}>
                  {!formData.resume && <span className="placeholder-text">Choose File</span>}
                  {formData.resume && (
                    <span className={`file-name ${formData.showFullFileName ? "full-file-name" : ""}`}>
                      {formData.resume.name}
                    </span>
                  )}
                  <img
                    src={require("../assets/file_upload.png")}
                    alt="Upload File"
                    className="file-upload-icon"
                    onClick={() => document.querySelector("#file-input").click()}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="create-account-container">
            <p className="create-account-text">
              Already have an account? <a href="/">Login</a>
            </p>
          </div>
          <button onClick={handleSubmit} className="signup-button">
            Register
          </button>
        </div>
        {formData.showError && (
          <ErrorMessage
            message="Please fill in all the fields."
            onClose={handleCloseError}
          />
        )}
      </div>
    </div>
  );
};

export default Signup;
