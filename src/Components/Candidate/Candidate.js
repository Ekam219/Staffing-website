import Footer from "../Footer/Footer";
import JobListing from "../Jobs/JobListing";
import NavBarCandidate from "../Navbar/NavbarCandidate";
import "./Candidate.scss";
import { jobOpenings } from "../../DummyData.js/DummyData";
import { useState } from "react";
import image from "./49342674_9214769.jpg";
import Candidate_message from "../Candidate_message/Candidate_message";
import { RiMessage3Fill } from "react-icons/ri";
import ProfilePage from "../Profile/Profile";
function Candidate() {
  const [keyword, setkeyword] = useState("");

  const ekam = jobOpenings.filter((item) =>
    item.title.toLowerCase().includes(keyword.trim().toLowerCase())
  );

  return (
    <div>
      <NavBarCandidate  setkeyword={setkeyword} />
      <div className="contents">
        <div className="candidate-container">
          <h2 className="head">
            {ekam.length > 0 ? 
              "Available Jobs"
             : 
             <div>
             <img src={image} alt="No Results Found" classname="nojob"/>
             <h4>No results found</h4>
             <p>Modify search criteria or create an alert to get relevant jobs as soon as they're posted</p>
           </div>
       
            }
          </h2>
          <div className="candidate">
            {ekam.map((job) => (
              <JobListing job={job} key={job.id} />
            ))}
          </div>
        </div>
        <div className="message_container">
        <h2>Messages</h2>
        
        <Candidate_message/>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Candidate;
