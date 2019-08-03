import React from 'react';
import {Link} from "react-router-dom";

import Logo_Full from "../../resources/images/netflix_logo_full.png";

export default function NavbarLight({logoLink, btnText, btnLink}) {
    let btnClass = "signin-light";
    return (
        <nav className="nav-simple nav-light">
            <Link to={logoLink} className="logo-alone"><img src={Logo_Full} alt="NETFLIX" id="logo"/></Link>
            {btnText !== "" && btnText !== undefined && (
               <Link to={btnLink} className={btnClass}>{btnText}</Link> 
            )}
            <hr className="home-row-navbar"/>
        </nav>
    )
}