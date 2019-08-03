import React from 'react';
import {Link} from "react-router-dom";
import Navbar from "../components/Navbars/Navbar";

const ErrorPage = () => {
    return (
        <div className="error-page">
            <Navbar logoLink="/" pText="" btnText="" btnLink="/"/>
            <div className="error-message-container">
                <p className="text-xl text-heavy">Netflix Site Error - Page Not Found</p>
                <p>
                    We were unable to find that page.
                </p>
                <p>Please go to the Netflix home page by clicking the button below.
                </p>
                <Link to="/" className="btn btn-dark">
                    Netflix Home
                </Link>
            </div>
        </div>
    )
}

export default ErrorPage
