import React, { useEffect } from 'react';
import "./JobsListing.scss";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBuilding, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function JobListing(props) {
  const [viewjob, setviewjob] = useState(false);

  useEffect(() => {}, [viewjob]);

  const setToggle = () => {
    setviewjob((value) => !value);
  };
 const setappliedjobs=()=>{
  alert("applied succesfully");
 }
  return (
    <div className="job-listing">
      <h2 className="job-title">{props.job.title}</h2>
      <p className="job-company">
        <FontAwesomeIcon icon={faBuilding} /> {props.job.company}
      </p>
      <p className="job-location">
        <FontAwesomeIcon icon={faMapMarkerAlt} /> {props.job.location}
      </p>
      <div className="job-skills">
        <h3><FontAwesomeIcon icon={faClipboardList} /> Skills</h3>
        <ul>
          {props.job.requirements.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        {viewjob && (
          <div className="job-details">
            <div className="job-requirements">
              <h3>Education</h3>
              <p>{props.job.requirements.education}</p>
              <h3>Experience</h3>
              <p>{props.job.requirements.experience}</p>
            </div>
            <div className="job-responsibilities">
              <h3>Responsibilities</h3>
              <ul>
                {props.job.requirements.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
            <div className="job-salary">
              <h3>Salary</h3>
              <p>{props.job.requirements.salary}</p>
            </div>
          </div>
        )}
      </div>
      
        <button className='apply-button' onClick={setappliedjobs} >APPLY</button>
  
      <button onClick={setToggle} className='apply-button'>
        {viewjob ? (
          <>View Less <FaAngleUp /></>
        ) : (
          <>View More <FaAngleDown /></>
        )}
      </button>
    </div>
  );
}

export default JobListing;
