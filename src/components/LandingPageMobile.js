import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Footer from "./Footer";

import Logo_Full from "../resources/images/netflix_logo_full.png";
import Mobile_Landing_Devices from "../resources/images/mobile-landing-devices.png";
import Mobile_Landing_Download from "../resources/images/mobile-landing-downloads.png";
import Mobile_Landing_Cancel from "../resources/images/mobile-landing-cancel.png";

export default class LandingPageMobile extends Component {
    render() {
        return (
            <div>
                <header className="landing-page-mobile">
                    <div className="landing-page-mobile-top">
                        <span>
                            <Link to="/"><img src={Logo_Full} alt="NETFLIX" id="logo"/></Link>
                        </span>
                        <p>
                            Have an account?
                        </p>
                        <Link to="/" className="signin-mobile">
                            Sign In
                        </Link>
                    </div>
                    <div className="navbar-bottom">
                        <Link to="/" className="btn btn-lg btn-bottom">
                            Try 30 Days Free
                        </Link>
                    </div>
                    <div className="mobile-card-container">
                        <div className="mobile-selling-points-card">
                            <h3 className="text-xxl">
                                Watch on any device
                            </h3>
                            <p className="text-md">
                                Stream on your phone, tablet, laptop, and TV without paying more.
                            </p>
                            <img src={Mobile_Landing_Devices} alt="devices"/>
                        </div>
                    </div>
                    <div className="mobile-card-container">
                        <div className="mobile-selling-points-card">
                            <h3 className="text-xxl">
                                Download and go</h3>
                            <p className="text-md">
                                Save your data, watch offline on a plane, train, or submarine...</p>
                            <img src={Mobile_Landing_Download} alt="devices"/>
                        </div>
                    </div>
                    <div className="mobile-card-container">
                        <div className="mobile-selling-points-card">
                            <h3 className="text-xxl">No pesky contracts</h3>
                            <p className="text-md">
                                Join today, cancel anytime.</p>
                            <img src={Mobile_Landing_Cancel} alt="devices"/>
                        </div>
                    </div>
                    <div className="background-image-container">
                        <h3 className="text-xxl">Unlimited entertainment, one low price</h3>
                        <p className="text-md">
                            Stream and download as much as you want, no extra fees.</p>
                    </div>
                </header>
                <Footer/>
            </div>
        )
    }
}
