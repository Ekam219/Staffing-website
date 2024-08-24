import React, { useState } from 'react';
import "./solution.scss"
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';
const SolutionComponent = () => {
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [company, setCompany] = useState('');
  const [consultant, setConsultant] = useState('');
  const [companyConsultancyName, setCompanyConsultancyName] = useState('');
  const [noOfEmployees, setNoOfEmployees] = useState('');
  const [designationName, setDesignationName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., send data to a server
    console.log('Form submitted with data:', {
      name,
      contactNumber,
      company,
      consultant,
      companyConsultancyName,
      noOfEmployees,
      designationName,
      emailId,
      city,
    });
  };

  return (
    <div><NavBar/>
    <form  className="solution"onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="contactNumber">Contact Number:</label>
        <input
          type="tel"
          id="contactNumber"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="company">Company:</label>
        <input
          type="radio"
          id="company"
          name="type"
          value="company"
          checked={company}
          onChange={() => setCompany(true)}
        />
        <label htmlFor="consultant">Consultant:</label>
        <input
          type="radio"
          id="consultant"
          name="type"
          value="consultant"
          checked={consultant}
          onChange={() => setConsultant(true)}
        />
      </div>
      <div>
        <label htmlFor="companyConsultancyName">
          Company/Consultancy Name:
        </label>
        <input
          type="text"
          id="companyConsultancyName"
          value={companyConsultancyName}
          onChange={(e) => setCompanyConsultancyName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="noOfEmployees">No. of Employees:</label>
        <input
          type="number"
          id="noOfEmployees"
          value={noOfEmployees}
          onChange={(e) => setNoOfEmployees(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="designationName">Designation Name:</label>
        <input
          type="text"
          id="designationName"
          value={designationName}
          onChange={(e) => setDesignationName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="emailId">Email ID:</label>
        <input
          type="email"
          id="emailId"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <button type="submit">Get a callback</button>
    </form>
    <Footer/>
    </div>
  );
};

export default SolutionComponent;