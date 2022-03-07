import React from "react";
import './informationText.css'
function InformationText(){
    return(
        <div className="mainContentContainer">
            <span className="spanText">Jeaper K.Thomas</span>
            <h1 className="mainTitle">Dunes Anthrazite Black </h1>
            <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ea numquam sapiente rerum rerum rerum deleniti dolorum? </p>
            <button className="btn-detail">Product Details</button>
            {/* 
            <span className="spanText">Michael W.Dreeben</span>
            <h1 className="mainTitle">Shell Dining Chair </h1>
            <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ea numquam sapiente rerum rerum rerum deleniti dolorum?</p>
            <button className="btn-detail">Product Details</button>
             */}
        </div>
    )
}

export default InformationText;