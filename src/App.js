import logo from './logo.svg';
import './App.css';
import Candidate from './Components/Candidate/Candidate';
import RegisterSeeker from './Components/Register/RegisterSeeker';
import HomePage from './Components/HomePage.js/HomePage.jsx';
import ProfilePage from './Components/Profile/Profile';
import Login from './Components/loginPage/Login';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import RecruiterDash from "./Components/recruiter/jobposting/RecruiterDashboard"
import AdminDashboard from './Components/Jobs/AdminDashboard/AdminDashboard';
import SolutionComponent from './Components/solution/solution';
function App() {
  return (
    
  
  <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/registerseeker" element={<RegisterSeeker/>}/>
    <Route path="/candidate" element={<Candidate/>}/>
     <Route path ="/profile" element={<ProfilePage/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path ="/:id" element={<ProfilePage/>}/>
     <Route path ="/Admin" element={<AdminDashboard/>}/>
     <Route path ="/solution" element={<SolutionComponent/>}/>
    
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
