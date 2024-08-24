import "./NavBar.scss";
import logo from"./logo-fotor-bg-remover-2024062404828.png";
function NavBar()
{
    return(
<div className="navbar">
<div className="left">
<a href="/"><img src= {logo}></img></a> 

</div>
<div className="right">
<a href="/">Home</a>
<a href="/#about">About Us</a>
<a href="/registerseeker">Job Search</a>
<a href="/#employer">Employers</a>
<a href="/#contact">Contact Us</a>
</div>
</div>
    )
}
export default NavBar;