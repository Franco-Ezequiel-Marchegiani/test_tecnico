import React from "react";
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Header(){
    return(
        <header>
            <h1>mater</h1>
            <p>
            <FontAwesomeIcon icon="fa-solid fa-bars-sort" />
            </p>
        </header>
    )
}

export default Header;