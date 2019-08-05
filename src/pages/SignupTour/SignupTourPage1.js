import React from 'react';
import {Link} from "react-router-dom";
import NavbarLight from "../../components/Navbars/NavbarLight";

import {FaCheckCircle, FaCheck} from "react-icons/fa";

const SignupTourPage1 = () => {
    return (
        <div>
            <div className="white-background"></div>
            <div className="center-content-container">
                <NavbarLight logoLink="/" btnText="Sign In" btnLink="/signin-existing"/>
                <form className="signup-tour-inner">
                    <div className="signup-tour-inner-top">
                        <FaCheckCircle id="check-icon-circle" size={42}/>
                        <p className="step-number">
                            Step <strong>
                                1
                            </strong> of <strong>
                                3
                            </strong>
                        </p>
                        <p className="text-xl text-bold">
                            Choose your plan</p>
                    </div>
                    <ul className="tour-list">
                        <li>
                            <FaCheck id="check-icon"/>You won't be charged until after your free month.</li>
                        <li>
                            <FaCheck id="check-icon"/>We'll remind you three days before your trial ends.</li>
                        <li>
                            <FaCheck id="check-icon"/>No commitments, cancel anytime.</li>
                    </ul>
                    <Link to="/signup-tour/plans" className="btn btn-lg">see the plans</Link>
                </form>
            </div>
        </div>
    )
}
export default SignupTourPage1;
