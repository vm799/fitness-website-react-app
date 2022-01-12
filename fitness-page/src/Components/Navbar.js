import React from "react";
import logo from "../images/logo.png"
import {link} from 'react-scroll'

export default function Navbar(){

    const [nav, setNav] = useState(false)
   function changeBackground(){
       if(window.scrollY >= 50){
           setNav(true);
       } else {
           setNav(false)
       }
   }

   window.addEventListener("scroll", changeBackground)

    return (
        <nav className= {nav ? "nav active" : "nav"}>
<a href="#" classname ="logo">
    <img src={logo} alt="gym logo" />
</a>
<input clasname="menu-btn" type="checkbox" id="menu-btn"/>
<label className="menu-icon" for="menu-btn">
<span className="nav-icon"></span>
</label>
<ul className="menu">
<li><Link to="#">Header</Link></li>
<li><Link to="#">Header</Link></li>
<li><Link to="#">Header</Link></li>
<li><Link to="#">Header</Link></li>
<li><Link to="#">Header</Link></li>
</ul>
        </nav>
    )
}