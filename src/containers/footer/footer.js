import React from "react";
import './footer.css'
function Footer(){
    return(
        <footer className="footerContainerAll">
            <div className="boxFooterContainer">
                <hr className="active"/>
                <p>01</p>
                <p className="textFooter textFooterActive">Shell Dining Chair</p>
            </div>
            <div className="boxFooterContainer">
                <hr className="active"/>
                <p>02</p>
                <p className="textFooter">Dunes Anthrazite Black</p>
            </div>
        </footer>
    )
}

export default Footer;