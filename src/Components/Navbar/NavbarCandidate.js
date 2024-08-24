import React, { useState } from "react";
import "./NavbarCandidate.scss";
import logo from "./logo-fotor-bg-remover-2024062404828.png";
import { FaSearch, FaBriefcase, FaUserCircle, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { jobOpenings } from "../../DummyData.js/DummyData";
import { FaUserAlt } from "react-icons/fa";
function NavBarCandidate({setkeyword}) {
function set(event)
{
   setkeyword(event.target.value);
}
  return (
    <div className="navbar">
      <div className="left">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className="center">
        <div className="search-bar">
          <input type="search" placeholder="Search jobs, Keywords or Comapny" onChange={(event)=>{set(event)}}/>
          <button><FaSearch/></button>
        </div>
      </div>
      <div className="right">
        <a href="/jobslist">Job Search</a>
        <a href="/#employer">Employers</a>
        <a href="/candidate">Messages</a>

        <div className="icon-button">
          <FaEnvelope />
        </div>
        <div className="profile">
        <Link to="/profile"><FaUserAlt/></Link>
        </div>
      </div>
    </div>
  );
}

export default NavBarCandidate;
