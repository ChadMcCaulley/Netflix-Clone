import React from 'react';
import {Link} from "react-router-dom";
import NavbarLight from "../components/Navbars/NavbarLight";

import {FaCheckCircle, FaCheck} from "react-icons/fa";

const SignupForm = () => {
    return (
        <div>
            <div className="white-background"></div>
            <div className="signup-tour-container">
                <NavbarLight logoLink="/" btnText="Sign In" btnLink="/signin-existing"/>
                <form className="signup-tour-inner">
                    <div className="signup-tour-inner-top">
                        <FaCheckCircle id="check-icon-circle" size={42}/>
                        <p className="step-number">
                            Step <strong>
                                2
                            </strong> of <strong>
                                3
                            </strong>
                        </p>
                        <p className="text-xl text-bold">Sign up to start your free month</p>
                        <p className="text-black text-md text-no-margin"> Just two more steps and your done! <br/> We hate paperwork, too.</p>
                        <p className="text-black text-md text-bold"> Create your account.</p>
                    </div>
                    <Link to="/signup-tour/plans" className="btn btn-lg">see the plans</Link>
                </form>
            </div>
        </div>
    )
}
export default SignupForm;
