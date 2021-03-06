import React from 'react';
import {Link} from "react-router-dom";
import NavbarLight from "../components/Navbars/NavbarLight";


const SignupForm = () => {
    const account = {_id: 123}; // Temporary. Will be replaced when backend is connected
    const accountCreationUrl = `/${account._id}/user-page`;
    return (
        <div>
            <div className="white-background"></div>
            <div className="center-content-container">
                <NavbarLight logoLink="/" btnText="Sign In" btnLink="/signin-existing"/>
                <form className="signup-page-2-inner">
                    <div className="signup-page-2-top">
                        <p className="btn-blue btn-lg text-">Enjoy your first month. <strong>It's free</strong></p>
                        <p className="text-md text-black">
                            Step <strong>
                                2
                            </strong> of <strong>
                                3
                            </strong>
                        </p>
                        <p className="text-xl text-black text-bold">Sign up to start your free month</p>
                        <p className="text-black text-no-margin text-md"> Just two more steps and your done! <br/> We hate paperwork, too.</p>
                        <p className="text-black text-lg text-bold"> Create your account.</p>
                    </div>
                    <div className="input-field-container">
                            <label htmlFor="user_login_email" className="text-xsm">Email</label>
                            <input type="text" id="user_login_email"></input>
                        </div>
                        <div className="input-field-container">
                            <label htmlFor="user_login_password" className="text-xsm">Password</label>
                            <input type="password" id="user_login_password"></input>
                        </div>
                    <Link to={accountCreationUrl} className="btn btn-lg" style={{width: "100%"}}>continue</Link>
                </form>
            </div>
        </div>
    )
}
export default SignupForm;
