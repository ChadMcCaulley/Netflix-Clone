import React from 'react';
import {Link} from "react-router-dom";

import Logo_Full from "../resources/images/netflix_logo_full.png";
import {FaChevronRight} from "react-icons/fa";


export default function Home() {
    return (
        <>
            <header className="landing-page-showcase">
                <div className="landing-page-showcase-top">
                    <img src={Logo_Full} alt="NETFLIX"/>
                    <p className="btn-helper-text"> Have an account?</p>
                    <Link to="/" className="btn btn-rounded">Sign In</Link>
                </div>
                <div className="landing-page-showcase-content">
                    <h1> See what's next</h1>
                    <p> Watch anywhere. Cancel anytime</p>
                    <Link to="/" className="btn btn-xl"> Try 30 Days Free <FaChevronRight/></Link>
                </div>
            </header>
        </>
    )
}
