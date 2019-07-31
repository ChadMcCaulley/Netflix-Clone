import React from 'react';
import {Link} from "react-router-dom";
import NavbarSimple from "../components/NavbarSimple";

const ErrorPage = () => {
    return (
        <div>
            <NavbarSimple/>
            <Link to="/" className="text-xxl"> Go Back to Netflix </Link>
        </div>
    )
}

export default ErrorPage
