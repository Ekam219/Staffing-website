import React, { useState } from "react";
import NavBar from "../Navbar/NavBar";
import "./Login.scss";
import axios from "axios";
import { Navigate, useNavigate } from "react-router";
import image from "../Register/20547283_6310507.jpg";
import { Link } from "react-router-dom";
function Login() {
    const navigate= useNavigate();
const [logindata,setFormData]=useState(
    {
        email:"",
        password:""
    }
)
const setHandler=(event)=>{
   setFormData({
    ...logindata,
    [event.target.name]:event.target.value
   })
   console.log(logindata);
}
const submitHandler=async(event)=>{
 event.preventDefault();
 try{
  //const post = await axios.post("url",formdata);
  navigate("/candidate")
}
 catch(error){
    console.log(error);

 }
}
  return (
    <div>
      <NavBar />
      <div className="page">
        <div><h2>Welcome Back! LogIn</h2></div>
        <div className="content-wrapper">
          <div className="RegisterSeeker">
            <form onSubmit={submitHandler}>
              <Link to="/registerseeker" ><p className="login">New User?Register</p></Link>
              <input type="email" onChange={setHandler} name="email" placeholder="Email" required />
              <input type="password" onChange={setHandler} name="password" placeholder="Password" required />
              <button type="submit">Submit</button>
            </form>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Login;
