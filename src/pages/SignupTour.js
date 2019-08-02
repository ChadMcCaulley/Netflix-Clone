import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Navbar from "../components/Navbars/Navbar";

import {FaCheckCircle, FaCheck} from "react-icons/fa";

export default class SignupTour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 1,
            currentStep: 1
        }
    }
    changeTab = (e) => {
        e.preventDefault();
        this.setState({currentTab: this.state.currentTab+1});
    }
    render() {
        const totalTabs = 3;
        const {currentTab, currentStep} = this.state;
        return (
            <div className="signup-tour-container">
                <Navbar logoLink="/" btnText="Sign In" btnLink="/signin-existing"/> {currentTab === 1 && (
                    <form className="signup-tour-inner">
                        <div className="signup-tour-inner-top">
                            <FaCheckCircle id="check-icon-circle" size={42}/>
                            <p className="step-number">
                                Step
                                <strong> {currentStep} </strong>
                                of
                                <strong> {totalTabs} </strong>
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
                        <Link to="/" className="btn btn-lg" onClick={this.changeTab}>see the plans</Link>
                    </form>
                )}

            </div>
        )
    }
}
