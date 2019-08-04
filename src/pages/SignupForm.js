import React from 'react';
import {Link} from "react-router-dom";
import NavbarLight from "../components/Navbars/NavbarLight";


const SignupForm = () => {
    return (
        <div>
            <div className="white-background"></div>
            <div className="signup-tour-container">
                <NavbarLight logoLink="/" btnText="Sign In" btnLink="/signin-existing"/>
                <form className="signup-page-2-inner">
                    <div className="signup-page-2-top">
                        <p className="btn-blue">Enjoy your first month. <strong>It's free</strong></p>
                        <p className="step-number">
                            Step <strong>
                                2
                            </strong> of <strong>
                                3
                            </strong>
                        </p>
                        <p className="text-xl text-bold">Sign up to start your free month</p>
                        <p className="text-black text-no-margin"> Just two more steps and your done! <br/> We hate paperwork, too.</p>
                        <p className="text-black text-md text-bold"> Create your account.</p>
                    </div>
                    <div className="input-field-container">
                            <label for="user_login_email" className="text-xsm">Email or phone number</label>
                            <input type="text" id="user_login_email"></input>
                        </div>
                        <div className="input-field-container">
                            <label for="user_login_password" className="text-xsm">Password</label>
                            <input type="password" id="user_login_password"></input>
                        </div>
                    <Link to="/signup-tour/plans" className="btn btn-lg" style={{width: "100%"}}>continue</Link>
                </form>
            </div>
        </div>
    )
}
export default SignupForm;
