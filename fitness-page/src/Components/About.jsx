import React from "react";
import aboutImage from "../images/about.png"

export default function About(){
    return(
        <div id="about-image">
            <img src={aboutImage} alt="" />
            <div className="="about-text>
                <h1>Learn more about who we are</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta aliquam pariatur ut assumenda, ipsum in, alias esse amet molestiae a incidunt et dolor culpa quidem, doloremque tenetur dolorum modi. Debitis.</p>
            </div>
        </div>

    )
}