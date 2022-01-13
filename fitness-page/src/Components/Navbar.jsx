import React, {useState} from "react";
import logo from "../images/logo.png"
import {Link} from 'react-scroll'

export default function Navbar(){

//     const [nav, setNav] = useState(false)
//    function changeBackground(){
//        if(window.scrollY >= 50){
//            setNav(true);
//        } else {
//            setNav(false)
//        }
//    }

//    window.addEventListener("scroll", changeBackground)

    return (
        <nav className= "nav">
<a href="#" >
    <img classname ="logo" src={logo}  alt="gym logo" />
</a>

<ul className="menu">
<li>
    <Link to="main" smooth={true}
duration={1000}>Header</Link></li>
<li>
    <Link to="Features"smooth={true}
duration={1000}>Features</Link></li>
<li>
    <Link to="Offer" smooth={true}
duration={1000}>Offer</Link></li>
<li>
    <Link to="About" smooth={true}
duration={1000}  >About</Link></li>
<li>
    <Link to="Contact" smooth={true}
duration={1000}>Contact</Link></li>
</ul>
        </nav>
    )
}