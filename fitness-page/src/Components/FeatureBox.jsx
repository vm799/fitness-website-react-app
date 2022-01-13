import React from "react";

export default function FeatureBox(props){
    return(
        <div className="feature__box">
            <div className="feature__box-img">
                <img src={props.image} alt=""/>
            </div>
            <div className="feature__text"><h2>{props.title}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, neque! Eius, ullam voluptas.  Sit.</p></div>
        </div>
    )
}