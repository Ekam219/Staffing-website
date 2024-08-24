import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './RecruiterDashboard.scss';
import Footer from '../../Footer/Footer';
import NavBar from '../../Navbar/NavBar';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const RecruiterDash = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [eligibility, setEligibility] = useState('');
  const [qualifications, setQualifications] = useState('');
  const [minExperience, setMinExperience] = useState('');
  const [analytics, setAnalytics] = useState([]);
  const [jobPosts, setJobPosts] = useState([]);
  const [profile, setProfile] = useState({});
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState('');
  const [chartData, setChartData] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAnalytics, setFilteredAnalytics] = useState([]);
  const [chartType, setChartType] = useState('line');
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState('');

  useEffect(() => {
    // Dummy data for analytics
    const dummyAnalytics = [
      { title: 'Software Engineer', applications: 25, views: 100, postedOn: '2024-07-01' },
      { title: 'Data Scientist', applications: 30, views: 150, postedOn: '2024-07-10' },
      { title: 'Product Manager', applications: 15, views: 80, postedOn: '2024-07-15' },
    ];
    setAnalytics(dummyAnalytics);

    // Dummy data for job posts
    const dummyJobPosts = [
      { title: 'Software Engineer', description: 'Develop software applications.', postedOn: '2024-07-01' },
      { title: 'Data Scientist', description: 'Analyze and interpret complex data.', postedOn: '2024-07-10' },
      { title: 'Product Manager', description: 'Oversee product development.', postedOn: '2024-07-15' },
    ];
    setJobPosts(dummyJobPosts);

    // Dummy data for profile
    const dummyProfile = { name: 'John Doe', email: 'john.doe@example.com' };
    setProfile(dummyProfile);
    setName(dummyProfile.name);
    setEmail(dummyProfile.email);

    // Dummy data for job templates
    const jobTemplates = [
      {
        title: 'Software Engineer',
        description: 'Develop software applications using cutting-edge technologies.',
        eligibility: 'Bachelor\'s degree in Computer Science or related field.',
        qualifications: 'Strong proficiency in JavaScript, React, Node.js.',
        minExperience: '2 years'
      },
      {
        title: 'Data Scientist',
        description: 'Analyze and interpret complex data to provide actionable insights.',
        eligibility: 'Master\'s degree in Data Science, Statistics, or related field.',
        qualifications: 'Experience with Python, R, SQL, machine learning algorithms.',
        minExperience: '3 years'
      },
      {
        title: 'Product Manager',
        description: 'Oversee product development from conception to launch.',
        eligibility: 'Bachelor\'s degree in Business or related field.',
        qualifications: 'Experience in product management, excellent communication skills.',
        minExperience: '5 years'
      }
    ];
    setTemplates(jobTemplates);

    // Process data for chart
    const data = {
      labels: dummyAnalytics.map(item => new Date(item.postedOn).toLocaleDateString()),
      datasets: [
        {
          label: 'Applications',
          data: dummyAnalytics.map(item => item.applications),
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
        },
        {
          label: 'Views',
          data: dummyAnalytics.map(item => item.views),
          borderColor: 'rgba(153, 102, 255, 1)',
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
        }
      ]
    };
    setChartData(data);
    setFilteredAnalytics(dummyAnalytics);
  }, []);

  useEffect(() => {
    const filtered = analytics.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredAnalytics(filtered);
  }, [searchTerm, analytics]);

  const handleJobPost = async (e) => {
    e.preventDefault();
    setIsPosting(true);
    setError('');

    try {
      // Simulate job posting
      toast.success('Job posted successfully!');
      setJobTitle('');
      setJobDescription('');
      setEligibility('');
      setQualifications('');
      setMinExperience('');
    } catch (err) {
      toast.error('Failed to post job');
    } finally {
      setIsPosting(false);
    }
  };

  const handleSaveProfile = () => {
    setProfile({ name, email });
    setEditMode(false);
    // In a real app, you would send the updated data to the server here
    toast.success('Profile updated successfully!');
  };

  const handleTemplateChange = (e) => {
    const template = templates.find(t => t.title === e.target.value);
    if (template) {
      setJobTitle(template.title);
      setJobDescription(template.description);
      setEligibility(template.eligibility);
      setQualifications(template.qualifications);
      setMinExperience(template.minExperience);
      setSelectedTemplate(template.title);
    }
  };

  return (
    <div>
    <NavBar/>
    <ToastContainer/>
    <div className="recruiter-dashboard">
   
      <header className="dashboard-header">
        <h1>Welcome, Recruiter!</h1>
        <p>Your personalized dashboard for managing job postings and analytics.</p>
      </header>

      <section className="job-posting">
        <h2>Post a Job</h2>
        <form onSubmit={handleJobPost}>
          <div className="form-group">
            <label htmlFor="jobTemplate">Select a Job Template</label>
            <select
              id="jobTemplate"
              value={selectedTemplate}
              onChange={handleTemplateChange}
            >
              <option value="">-- Select Template --</option>
              {templates.map((template, index) => (
                <option key={index} value={template.title}>
                  {template.title}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input
              type="text"
              id="jobTitle"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="jobDescription">Job Description</label>
            <textarea
              id="jobDescription"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="eligibility">Eligibility</label>
            <input
              type="text"
              id="eligibility"
              value={eligibility}
              onChange={(e) => setEligibility(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="qualifications">Qualifications</label>
            <input
              type="text"
              id="qualifications"
              value={qualifications}
              onChange={(e) => setQualifications(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="minExperience">Minimum Experience</label>
            <input
              type="text"
              id="minExperience"
              value={minExperience}
              onChange={(e) => setMinExperience(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={isPosting}>
            {isPosting ? 'Posting...' : 'Post Job'}
          </button>
          {error && <p className="error">{error}</p>}
        </form>
      </section>

      <section className="analytics">
        <h2>Job Analytics</h2>
        <div className="search-filter">
          <input
            type="text"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select value={chartType} onChange={(e) => setChartType(e.target.value)}>
            <option value="line">Line</option>
            <option value="bar">Bar</option>
            <option value="pie">Pie</option>
          </select>
        </div>
        {filteredAnalytics.length ? (
          <>
            <Bar data={chartData} options={{ responsive: true, type: chartType }} />
            <div className="analytics-list">
              {filteredAnalytics.map((data, index) => (
                <div key={index} className="analytics-item">
                  <h3>{data.title}</h3>
                  <p>Applications: {data.applications}</p>
                  <p>Views: {data.views}</p>
                  <p>Posted on: {new Date(data.postedOn).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>No job postings match the search criteria.</p>
        )}
      </section>

      <section className="job-post-history">
        <h2>Job Post History</h2>
        {jobPosts.length ? (
          <ul>
            {jobPosts.map((post, index) => (
              <li key={index}>
                <h3>{post.title}</h3>
                <p>Description: {post.description}</p>
                <p>Posted on: {new Date(post.postedOn).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No job posts available.</p>
        )}
      </section>

      <section className="profile-management">
        <h2>Profile</h2>
        <div className="profile-info">
          <p>Name: {editMode ? <input value={name} onChange={(e) => setName(e.target.value)} /> : profile.name}</p>
          <p>Email: {editMode ? <input value={email} onChange={(e) => setEmail(e.target.value)} /> : profile.email}</p>
          {editMode ? (
            <button onClick={handleSaveProfile}>Save</button>
          ) : (
            <button onClick={() => setEditMode(true)}>Edit Profile</button>
          )}
        </div>
      </section>

    
      
    </div>
    <Footer/>
    </div>
  );
};

export default RecruiterDash;
