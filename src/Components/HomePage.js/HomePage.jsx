import { ReactTyped as Typed } from 'react-typed';
import { Link } from 'react-router-dom';
import NavBar from '../Navbar/NavBar';
import AdminDashboard from '../Jobs/AdminDashboard/AdminDashboard';
import RecruiterDash from '../recruiter/jobposting/RecruiterDashboard';
import "./HomePage.scss";

function HomePage() {
  return (
    <div>
      <NavBar />
      <div className='HomePage'>
        <div className='main'>
          <div className='content'>
            <h2 className='typed'>
              <Typed
                strings={['Welcome to WorkWeb Recruiting and Staffing. ', 'A complete recruitment management software.']}
                typeSpeed={40}
                backSpeed={16}
                loop
              />
            </h2>
            <p className='n'>
              We specialize in linking skilled professionals with fulfilling career prospects and aiding employers in securing top-tier talent. Our mission is to streamline the recruitment process, ensuring seamless connections that benefit both job seekers and companies alike. Whether you're seeking your next career move or searching for exceptional talent, WorkWeb is committed to facilitating success and fostering growth in every placement.
            </p>
          </div>
          <div className='buttons'>
            <div>
              <Link to="/solution">
                <button>I'm Looking For Solutions</button>
              </Link>
              <p>Join our network to discover a multitude of opportunities and help candidates find their ideal roles.</p>
            </div>
            <div>
              <Link to="/admin">
                <button>I'm a Staffing Company</button>
              </Link>
              <p>Partner with us to access a diverse pool of qualified candidates, tailored to meet your clients' staffing needs.</p>
            </div>
            <div>
              <Link to="/registerseeker">
                <button>I'm a Job Seeker</button>
              </Link>
              <p>Start your job search with us. Browse through our extensive listings to find the perfect match for your skills and career goals.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className='service'>Our Services</h1>
        <div className='services'>
          <div>
            <h3>Integrated Recruiting and Staffing Platform</h3>
            <p>Welcome to WorkWeb Recruiting and Staffing, your comprehensive solution for streamlined recruitment management integrated with an HRMS platform. With WorkWeb, manage your entire recruitment lifecycle seamlessly, from candidate sourcing to hiring, all within one integrated system.</p>
          </div>
          <div>
            <h3>Recruitment Management Integrated with HRMS</h3>
            <p>Efficiently manage your recruitment processes with WorkWeb's integrated software. Enjoy the convenience of a unified platform where you can handle everything from candidate evaluations to salary breakdowns and interview process approvals, directly linked with your HRMS.</p>
          </div>
          <div>
            <h3>Hiring Pipelines</h3>
            <p>Tailor your hiring workflows for each job posting with flexibility and ease. WorkWeb understands that every role is unique, so customize your hiring processes to suit specific job requirements. Stay on track and ensure efficient candidate evaluation without unnecessary delays or miscommunications.</p>
          </div>
          <div>
            <h3>Requisitions</h3>
            <p>Simplify your hiring planning with streamlined requisition workflows. WorkWeb enables you to fast-track approval processes by involving relevant stakeholders across different departments. Cut through bureaucratic delays and get requisitions approved swiftly.</p>
          </div>
        </div>
      </div>
      <div className='company-info'>
        <h2 id="about">About WorkWeb</h2>
        <p>
          WorkWeb is dedicated to revolutionizing the recruitment and staffing industry by providing innovative solutions that connect talented professionals with rewarding career opportunities. Our mission is to streamline the recruitment process and foster growth through seamless connections between job seekers and employers.
        </p>

        <h2 id="contact">Contact Us</h2>
        <p>
          Sales: +91 123-456-7890<br />
          Email: info@workweb.com<br />
          Address: Sector 19, Gurugram, Haryana, India<br />
        </p>

        <h2>Connect With Us</h2>
        <div className='social-links'>
          <a href='https://facebook.com'>Facebook</a>
          <a href='https://twitter.com'>Twitter</a>
          <a href='https://linkedin.com'>LinkedIn</a>
          <a href='https://instagram.com'>Instagram</a>
        </div>
      </div>

      <div className='footer'>
        <p>2024 Vizlogic Digital Platforms. All rights reserved.</p>
        <div className='legal-links'>
          <a href='#terms-of-service'>Terms of Service</a>
          <a href='#privacy-policy'>Privacy Policy</a>
          <a href='#security-policy'>Security Policy</a>
          <a href='#gdpr-compliance'>GDPR Compliance</a>
        </div>
      </div>
     
    </div>
  );
}

export default HomePage;
