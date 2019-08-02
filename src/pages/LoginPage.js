import React, {Component} from "react";
import {Link} from "react-router-dom";

import {FaFacebookSquare} from "react-icons/fa";
import Navbar from "../components/Navbars/Navbar";

class LoginPage extends Component {
    render() {
        return (
            <div>
                <Navbar logoLink="/" pText="" btnText="" btnLink="/"/>
                <div className="login-form-container">
                    <form className="login-form">
                        <p className="text-xxl text-bold">Sign In</p>
                        <div className="input-field-container">
                            <label for="user_login_email" className="text-xsm">Email or phone number</label>
                            <input type="text" id="user_login_email"></input>
                        </div>
                        <div className="input-field-container">
                            <label for="user_login_password" className="text-xsm">Password</label>
                            <input type="password" id="user_login_password"></input>
                        </div>
                        <Link to="/" className="btn btn-lg btn-rounded signin-btn">
                            Sign In
                        </Link>
                        <div className="remember-help-container">
                            <input type="checkbox"></input>
                            <p className="text-sm text-dark text-bold">
                                Remember me</p>
                            <Link to="/" className="text-sm text-dark text-bold">
                                Need help?</Link>
                        </div>
                        <div className="login-form-bottom-container">
                            <div className="login-form-bottom-icon-container">
                                <FaFacebookSquare size={24} className="facebook-icon"/>
                                <p className="text-sm text-dark">
                                    Login with Facebook</p>
                            </div>
                            <div className="login-form-bottom-new">
                                <p className=" text-dark">
                                    New to Netflix?</p>
                                <Link to="/sign-up" className="signin-mobile">
                                    Sign up now.
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginPage;