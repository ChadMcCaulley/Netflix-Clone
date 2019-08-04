import React from 'react';
import {Link} from "react-router-dom";
import NavbarLight from "../../components/Navbars/NavbarLight";

import {FaTabletAlt, FaTv} from "react-icons/fa";
import {IoIosPhonePortrait, IoIosLaptop} from "react-icons/io";

const SignupTourPage3 = () => {
    return (
        <div>
            <div className="white-background"></div>
            <div className="signup-tour-container pad-top">
                <NavbarLight logoLink="/" btnText="Sign In" btnLink="/signin-existing"/>
                <form className="signup-tour-inner">
                    <div className="signup-tour-inner-top">
                        <div className="icons-container">
                            <IoIosLaptop size={100} className="icon"/> 
                            <FaTv size={100} className="icon"/>
                            <div className="tab-phone-icons-container">
                                <FaTabletAlt size={60} className="icon"/>
                                <IoIosPhonePortrait size={40} className="icon"/>
                            </div>
                        </div>
                        <p className="step-number">
                            Step <strong>
                                2
                            </strong> of <strong>
                                3
                            </strong>
                        </p>
                        <p className="text-xl text-bold">
                            Create your account.</p>
                        <p className="text-black">
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
