import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import NavBarCandidate from "../Navbar/NavbarCandidate";
import "./Profile.scss";
import Select from "react-select";
import Footer from "../Footer/Footer";

const skillOptions = [
  { value: "C++", label: "C++" },
  { value: "JavaScript", label: "JavaScript" },
  { value: "HTML", label: "HTML" },
  { value: "MongoDB", label: "MongoDB" },
  { value: "Node.js", label: "Node.js" },
  { value: "C", label: "C" },
  { value: "React", label: "React" },
  { value: "Docker", label: "Docker" },
  { value: "CSS", label: "CSS" },
];

function ProfilePage() {
  const [userInfo, setUserInfo] = useState({
    name: "Ekam",
    email: "Ekamjotjaggi2511@gmail.com",
    bio: "Intern at vizlogic Digital Solutions.",
    avatarUrl: "https://example.com/avatar.jpg",
    lookingFor: "In my next job, I am seeking a dynamic environment that fosters growth, creativity, and collaboration...",
    desiredSalary: "Flexible",
    desiredRole: "Software Engineer",
    experience: [
      { id: 1, role: "Software Engineering Intern", company: "Telus International", startDate: "2023-01-01", endDate: "2024-01-01" }
    ],
    education: [
      { id: 1, institution: "National Institute of Technology Jalandhar", degree: "BE Eng", year: 2026 }
    ],
    projects: [
      { id: 1, title: "Project A", description: "Description of Project A", link: "http://example.com/project-a" }
    ],
    certifications: [
      { id: 1, title: "Certification A", issuedBy: "Certifying Authority", date: "2024-01-01" }
    ],
    skills: [],
    resume: null,
    keySkills: [],  // Added keySkills field
  });

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const fetchAppliedJobs = async () => {
    try {
      const exampleAppliedJobs = [
        { id: 1, title: "Software Engineer", company: "Tech Co.", date: "2024-06-30", status: "Pending" },
        { id: 2, title: "Web Developer", company: "Web Solutions", date: "2024-06-28", status: "Accepted" },
        { id: 3, title: "Data Analyst", company: "Data Insights Inc.", date: "2024-06-25", status: "Rejected" },
      ];
      setAppliedJobs(exampleAppliedJobs);
    } catch (error) {
      console.error("Error fetching applied jobs:", error);
    }
  };

  useEffect(() => {
    fetchAppliedJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSkillsChange = (selectedOptions) => {
    setUserInfo({ ...userInfo, skills: selectedOptions });
  };

  const handleResumeChange = (event) => {
    const file = event.target.files[0];
    setUserInfo({ ...userInfo, resume: file });
  };

  const handleExperienceChange = (id, field, value) => {
    const updatedExperience = userInfo.experience.map((exp) =>
      exp.id === id ? { ...exp, [field]: value } : exp
    );
    setUserInfo({ ...userInfo, experience: updatedExperience });
  };

  const handleAddExperience = () => {
    const newExperience = {
      id: Date.now(),
      role: "",
      company: "",
      startDate: "",
      endDate: "",
    };
    setUserInfo({ ...userInfo, experience: [...userInfo.experience, newExperience] });
  };

  const handleRemoveExperience = (id) => {
    const updatedExperience = userInfo.experience.filter((exp) => exp.id !== id);
    setUserInfo({ ...userInfo, experience: updatedExperience });
  };

  const handleEducationChange = (id, field, value) => {
    const updatedEducation = userInfo.education.map((edu) =>
      edu.id === id ? { ...edu, [field]: value } : edu
    );
    setUserInfo({ ...userInfo, education: updatedEducation });
  };

  const handleAddEducation = () => {
    const newEducation = {
      id: Date.now(),
      institution: "",
      degree: "",
      year: new Date().getFullYear(),
    };
    setUserInfo({ ...userInfo, education: [...userInfo.education, newEducation] });
  };

  const handleRemoveEducation = (id) => {
    const updatedEducation = userInfo.education.filter((edu) => edu.id !== id);
    setUserInfo({ ...userInfo, education: updatedEducation });
  };

  const handleProjectChange = (id, field, value) => {
    const updatedProjects = userInfo.projects.map((proj) =>
      proj.id === id ? { ...proj, [field]: value } : proj
    );
    setUserInfo({ ...userInfo, projects: updatedProjects });
  };

  const handleAddProject = () => {
    const newProject = {
      id: Date.now(),
      title: "",
      description: "",
      link: "",
    };
    setUserInfo({ ...userInfo, projects: [...userInfo.projects, newProject] });
  };

  const handleRemoveProject = (id) => {
    const updatedProjects = userInfo.projects.filter((proj) => proj.id !== id);
    setUserInfo({ ...userInfo, projects: updatedProjects });
  };

  const handleCertificationChange = (id, field, value) => {
    const updatedCertifications = userInfo.certifications.map((cert) =>
      cert.id === id ? { ...cert, [field]: value } : cert
    );
    setUserInfo({ ...userInfo, certifications: updatedCertifications });
  };

  const handleAddCertification = () => {
    const newCertification = {
      id: Date.now(),
      title: "",
      issuedBy: "",
      date: "",
    };
    setUserInfo({ ...userInfo, certifications: [...userInfo.certifications, newCertification] });
  };

  const handleRemoveCertification = (id) => {
    const updatedCertifications = userInfo.certifications.filter((cert) => cert.id !== id);
    setUserInfo({ ...userInfo, certifications: updatedCertifications });
  };

  const handleKeySkillsChange = (selectedOptions) => {
    setUserInfo({ ...userInfo, keySkills: selectedOptions });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Example: Update user info via API call
      // const response = await axios.put("http://api.example.com/user/profile", userInfo);
      console.log("User info updated successfully!");
    } catch (error) {
      console.error("Error updating user info:", error);
    }
  };

  const openModal = (content) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const renderModalContent = () => {
    switch (modalContent) {
      case "experience":
        return (
          <div className="experience-section">
            <h2>Experience</h2>
            {userInfo.experience.map((exp) => (
              <div key={exp.id} className="experience-entry">
                <label>
                  Role:
                  <input
                    type="text"
                    value={exp.role}
                    onChange={(e) => handleExperienceChange(exp.id, 'role', e.target.value)}
                    required
                  />
                </label>
                <label>
                  Company:
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) => handleExperienceChange(exp.id, 'company', e.target.value)}
                    required
                  />
                </label>
                <label>
                  Start Date:
                  <input
                    type="date"
                    value={exp.startDate}
                    onChange={(e) => handleExperienceChange(exp.id, 'startDate', e.target.value)}
                    required
                  />
                </label>
                <label>
                  End Date:
                  <input
                    type="date"
                    value={exp.endDate}
                    onChange={(e) => handleExperienceChange(exp.id, 'endDate', e.target.value)}
                  />
                </label>
                <button type="button" onClick={() => handleRemoveExperience(exp.id)}>Remove</button>
              </div>
            ))}
            <button type="button" onClick={handleAddExperience}>Add Experience</button>
          </div>
        );
      case "education":
        return (
          <div className="education-section">
            <h2>Education</h2>
            {userInfo.education.map((edu) => (
              <div key={edu.id} className="education-entry">
                <label>
                  Institution:
                  <input
                    type="text"
                    value={edu.institution}
                    onChange={(e) => handleEducationChange(edu.id, 'institution', e.target.value)}
                    required
                  />
                </label>
                <label>
                  Degree:
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) => handleEducationChange(edu.id, 'degree', e.target.value)}
                    required
                  />
                </label>
                <label>
                  Year:
                  <input
                    type="number"
                    value={edu.year}
                    onChange={(e) => handleEducationChange(edu.id, 'year', e.target.value)}
                    required
                  />
                </label>
                <button type="button" onClick={() => handleRemoveEducation(edu.id)}>Remove</button>
              </div>
            ))}
            <button type="button" onClick={handleAddEducation}>Add Education</button>
          </div>
        );
      case "projects":
        return (
          <div className="projects-section">
            <h2>Projects</h2>
            {userInfo.projects.map((proj) => (
              <div key={proj.id} className="project-entry">
                <label>
                  Title:
                  <input
                    type="text"
                    value={proj.title}
                    onChange={(e) => handleProjectChange(proj.id, 'title', e.target.value)}
                    required
                  />
                </label>
                <label>
                  Description:
                  <textarea
                    value={proj.description}
                    onChange={(e) => handleProjectChange(proj.id, 'description', e.target.value)}
                    required
                  />
                </label>
                <label>
                  Link:
                  <input
                    type="url"
                    value={proj.link}
                    onChange={(e) => handleProjectChange(proj.id, 'link', e.target.value)}
                  />
                </label>
                <button type="button" onClick={() => handleRemoveProject(proj.id)}>Remove</button>
              </div>
            ))}
            <button type="button" onClick={handleAddProject}>Add Project</button>
          </div>
        );
      case "certifications":
        return (
          <div className="certifications-section">
            <h2>Certifications</h2>
            {userInfo.certifications.map((cert) => (
              <div key={cert.id} className="certification-entry">
                <label>
                  Title:
                  <input
                    type="text"
                    value={cert.title}
                    onChange={(e) => handleCertificationChange(cert.id, 'title', e.target.value)}
                    required
                  />
                </label>
                <label>
                  Issued By:
                  <input
                    type="text"
                    value={cert.issuedBy}
                    onChange={(e) => handleCertificationChange(cert.id, 'issuedBy', e.target.value)}
                    required
                  />
                </label>
                <label>
                  Date:
                  <input
                    type="date"
                    value={cert.date}
                    onChange={(e) => handleCertificationChange(cert.id, 'date', e.target.value)}
                    required
                  />
                </label>
                <button type="button" onClick={() => handleRemoveCertification(cert.id)}>Remove</button>
              </div>
            ))}
            <button type="button" onClick={handleAddCertification}>Add Certification</button>
          </div>
        );
      case "keySkills":
        return (
          <div className="key-skills-section">
            <h2>Key Skills</h2>
            <Select
              isMulti
              options={skillOptions}
              value={userInfo.keySkills}
              onChange={handleKeySkillsChange}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div> <NavBarCandidate />
    <div className="profile-page">
     
      <div className="profile-sidebar">
        <ul>
          <li onClick={() => openModal("experience")}>Experience</li>
          <li onClick={() => openModal("education")}>Education</li>
          <li onClick={() => openModal("projects")}>Projects</li>
          <li onClick={() => openModal("certifications")}>Certifications</li>
          <li onClick={() => openModal("keySkills")}>Key Skills</li>
        </ul>
      </div>
      <div className="profile-content">
        <h1>Profile Page</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={userInfo.name} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={userInfo.email} onChange={handleChange} />
          </label>
          <label>
            Bio:
            <textarea name="bio" value={userInfo.bio} onChange={handleChange} />
          </label>
          <label>
            Looking For:
            <textarea name="lookingFor" value={userInfo.lookingFor} onChange={handleChange} />
          </label>
          <label>
            Desired Salary:
            <input type="text" name="desiredSalary" value={userInfo.desiredSalary} onChange={handleChange} />
          </label>
          <label>
            Desired Role:
            <input type="text" name="desiredRole" value={userInfo.desiredRole} onChange={handleChange} />
          </label>
          <label>
            Resume:
            <input type="file" name="resume" onChange={handleResumeChange} />
          </label>
          <button type="submit">Save</button>
        </form>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <button onClick={closeModal}>Close</button>
        {renderModalContent()}
      </Modal>
    </div>
    <Footer/>
       </div>
  );
}

export default ProfilePage;
