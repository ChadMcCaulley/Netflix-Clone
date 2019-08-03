import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Navbar from "../components/Navbars/Navbar";
import {FaTimes, FaCheck} from "react-icons/fa";

export default class SignupTourPage2 extends Component {
    endOfFree() {
        let today = new Date();
        today.setDate(today.getDate() + 29);
        const day = String(today.getUTCDate()).padStart(2, "0");
        const month = String(today.getUTCMonth() + 1);
        const year = String(today.getUTCFullYear());
        let endOfFree = `${month}/${day}/${year}`;
        return `Monthly price after free month ends on ${endOfFree}`;
    }
    render() {
        const endOfFree = this.endOfFree();
        return (
            <div className="signup-tour-container">
                <Navbar logoLink="/" btnText="Sign In" btnLink="/signin-existing"/>
                <form className="signup-tour-inner">
                    <div className="signup-tour-inner-top">
                        <p className="step-number">
                            Step<strong> 1 </strong>of<strong> 3 </strong>
                        </p>
                        <p className="text-xl text-bold">
                            Choose the plan that's right for you</p>
                        <p>Downgrade or upgrade at any time</p>
                    </div>
                    <table className="tab-3-table">
                        <thead>
                            <tr className="plan-selection-buttons">
                                <th></th>
                                <th>Basic</th>
                                <th>Standard</th>
                                <th>Premium</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{endOfFree}</td>
                                <td>$8.99</td>
                                <td>$12.99</td>
                                <td>$15.99</td>
                            </tr>
                            <tr>
                                <td>HD available</td>
                                <td><FaTimes/></td>
                                <td><FaCheck/></td>
                                <td><FaCheck/></td>
                            </tr>
                            <tr>
                                <td>Ultra HD available</td>
                                <td><FaTimes/></td>
                                <td><FaTimes/></td>
                                <td><FaCheck/></td>
                            </tr>
                            <tr>
                                <td>Screens you can watch on at the same time</td>
                                <td>1</td>
                                <td>2</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Watch on your laptop, TV, phone and tablet</td>
                                <td><FaCheck/></td>
                                <td><FaCheck/></td>
                                <td><FaCheck/></td>
                            </tr>
                            <tr>
                                <td>Cancel anytime</td>
                                <td><FaCheck/></td>
                                <td><FaCheck/></td>
                                <td><FaCheck/></td>
                            </tr>
                            <tr>
                                <td>First month free</td>
                                <td><FaCheck/></td>
                                <td><FaCheck/></td>
                                <td><FaCheck/></td>
                            </tr>
                        </tbody>
                    </table>
                    <Link to="/signup-tour/account-creation" className="btn btn-lg">see the plans</Link>
                </form>
            </div>
        )
    }
}
