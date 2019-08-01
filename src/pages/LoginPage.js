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
                        <p className="text-xl text-extra-heavy">Sign In</p>
                        <div className="input-field-container">
                            <label>
                                <input type="text" id="user_login_email" placeholder="Email or phone number"></input>
                                <label for="user_login_email" className="input-label">Email or phone number</label>
                            </label>
                        </div>
                        <div className="input-field-container">
                            <label>
                                <input type="password" id="user_login_password" placeholder="Password"></input>
                                <label for="user_login_password" className="input-label">Password</label>
                            </label>
                        </div>
                        <Link to="/" className="btn btn-lg">
                            Sign In</Link>
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
                            <p className="text-sm text-dark"> Login with Facebook</p>
                            </div>
                            <div className="login-form-bottom-new">
                                <p className="text-lg text-dark"> New to Netflix?</p>
                                <Link to="/sign-up" className="text-lg"> Sign up now. </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginPage;