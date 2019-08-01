import React from 'react';
import {Link} from "react-router-dom";

import Logo_Full from "../../resources/images/netflix_logo_full.png";

export default function Navbar({logoLink, pText, btnText, btnLink}) {
    let btnClass = ""
    if(btnText !== undefined && btnText !== "") btnClass = "btn btn-rounded";
    return (
        <nav className="nav-simple">
            <Link to={logoLink}><img src={Logo_Full} alt="NETFLIX" id="logo"/></Link>
            <p>{pText}</p>
            <Link to={btnLink} className={btnClass}>{btnText}</Link>
        </nav>
    )
}