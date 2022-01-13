import React from "react";
import FeatureBox from "./FeatureBox"
import fimage1 from "../images/1.svg"
import fimage2 from "../images/2.svg"
import fimage3 from "../images/3.svg"
import fimage4 from "../images/4.svg"

export default function Feature(){
    return(
        <div id="features">
            <h1>Features</h1>
            <div className="feature-container">
                <FeatureBox image={fimage1} title="Strength training" />
                <FeatureBox image={fimage2} title="Nutrition" />
                <FeatureBox image={fimage3} title="Wellbeing" />
                <FeatureBox image={fimage4} title="Flexibility" />

                </div>
        </div>
    )
}
