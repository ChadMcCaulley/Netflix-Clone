import React from 'react';
import {Link} from "react-router-dom";
import NavbarLight from "../../components/Navbars/NavbarLight";

import {FaTabletAlt, FaTv} from "react-icons/fa";
import {IoIosPhonePortrait, IoIosLaptop} from "react-icons/io";

const SignupTourPage3 = () => {
    return (
        <div>
            <div className="white-background"></div>
            <div className="center-content-container pad-top">
                <NavbarLight logoLink="/" btnText="Sign In" btnLink="/signin-existing"/>
                <form className="signup-tour-inner">
                    <div className="signup-tour-inner-top">
                        <div className="icons-container">
                            <IoIosLaptop className="icon"/> 
                            <FaTv className="icon"/>
                            <div className="tab-phone-icons-container">
                                <FaTabletAlt className="icon icon-md" aria-hidden="true"/>
                                <IoIosPhonePortrait className="icon icon-sm phone-icon" aria-hidden="true"/>
                            </div>
                        </div>
                        <p className="text-md text-black">
                            Step <strong>
                                2
                            </strong> of <strong>
                                3
                            </strong>
                        </p>
                        <p className="text-xl text-bold">
                            Create your account.</p>
                        <p className="text-md text-black">
                            Netflix is personalized for you. Use your 
                            <br/>email and create a password to watch 
                            <br/>Netflix on any device at any time.
                        </p>
                    </div>
                    <Link to="/signup-tour/signup-form" className="btn btn-lg">Continue</Link>
                </form>
            </div>
        </div>
    )
}
export default SignupTourPage3;
