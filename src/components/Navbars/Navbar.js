import React from 'react';
import {Link} from "react-router-dom";

import Logo_Full from "../../resources/images/netflix_logo_full.png";

export default function Navbar({logoLink, pText, btnText, btnLink}) {
    let btnClass = "", logoClass = "";
    if(btnText !== undefined && btnText !== "") btnClass = "btn btn-rounded";
    if((pText === "" || pText === undefined) && (btnText === "" || btnText === undefined)){
        logoClass = "logo-alone";
    }
    return (
        <nav className="nav-simple">
            <Link to={logoLink} className={logoClass}><img src={Logo_Full} alt="NETFLIX" id="logo"/></Link>
            {pText !== "" && pText !== undefined && (
                <p>{pText}</p>
            )}
            {btnText !== "" && btnText !== undefined && (
               <Link to={btnLink} className={btnClass}>{btnText}</Link> 
            )}
        </nav>
    )
}