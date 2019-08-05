import React, {Component} from 'react';
import {Link} from "react-router-dom";
import NavbarLight from "../../components/Navbars/NavbarLight";
import {FaTimes, FaCheck} from "react-icons/fa";

export default class SignupTourPage2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentBtn: "btn-3"
        }
    }
    endOfFree() {
        let today = new Date();
        today.setDate(today.getDate() + 29);
        const day = String(today.getUTCDate()).padStart(2, "0");
        const month = String(today.getUTCMonth() + 1);
        const year = String(today.getUTCFullYear());
        let endOfFree = `${month}/${day}/${year}`;
        return `Monthly price after free month ends on ${endOfFree}`;
    }
    selectColumn = (e) => {
        e.preventDefault();
        const btn = e.currentTarget.dataset.id;
        this.setState({currentBtn: btn});
    }
    render() {
        const endOfFree = this.endOfFree();
        const {currentBtn} = this.state;
        console.log(currentBtn);
        const btnSelectionActive = "btn-selection btn-active";
        const btnSelectionInactive = "btn-selection";
        const activeColumn = {color: "#E50914"}
        return (
            <div>
                <div className="white-background"></div>
                <div className="center-content-container">
                    <NavbarLight logoLink="/" btnText="Sign In" btnLink="/signin-existing"/>
                    <form className="signup-page-2-inner">
                        <div className="signup-page-2-top">
                            <p className="step-number">
                                Step <strong>1</strong> of <strong>3</strong>
                            </p>
                            <p className="text-xl text-bold">
                                Choose the plan that's right for you</p>
                            <p>Downgrade or upgrade at any time</p>
                        </div>
                        <table className="signup-table">
                            <thead>
                                <tr className="plan-selection-buttons">
                                    <th></th>
                                    <th
                                        onClick={this.selectColumn}
                                        data-id="btn-1"
                                        className={currentBtn === "btn-1"
                                        ? btnSelectionActive
                                        : btnSelectionInactive}>Basic</th>
                                    <th
                                        onClick={this.selectColumn}
                                        data-id="btn-2"
                                        className={currentBtn === "btn-2"
                                        ? btnSelectionActive
                                        : btnSelectionInactive}>Standard</th>
                                    <th
                                        onClick={this.selectColumn}
                                        data-id="btn-3"
                                        className={currentBtn === "btn-3"
                                        ? btnSelectionActive
                                        : btnSelectionInactive}>Premium</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{endOfFree}</td>
                                    <td style={currentBtn === "btn-1" ? activeColumn : {}}>$8.99</td>
                                    <td style={currentBtn === "btn-2" ? activeColumn : {}}>$12.99</td>
                                    <td style={currentBtn === "btn-3" ? activeColumn : {}}>$15.99</td>
                                </tr>
                                <tr>
                                    <td>HD available</td>
                                    <td style={currentBtn === "btn-1" ? activeColumn : {}}><FaTimes/></td>
                                    <td style={currentBtn === "btn-2" ? activeColumn : {}}><FaCheck/></td>
                                    <td style={currentBtn === "btn-3" ? activeColumn : {}}><FaCheck/></td>
                                </tr>
                                <tr>
                                    <td>Ultra HD available</td>
                                    <td style={currentBtn === "btn-1" ? activeColumn : {}}><FaTimes/></td>
                                    <td style={currentBtn === "btn-2" ? activeColumn : {}}><FaTimes/></td>
                                    <td style={currentBtn === "btn-3" ? activeColumn : {}}><FaCheck/></td>
                                </tr>
                                <tr>
                                    <td>Screens you can watch on at the same time</td>
                                    <td style={currentBtn === "btn-1" ? activeColumn : {}}>1</td>
                                    <td style={currentBtn === "btn-2" ? activeColumn : {}}>2</td>
                                    <td style={currentBtn === "btn-3" ? activeColumn : {}}>4</td>
                                </tr>
                                <tr>
                                    <td>Watch on your laptop, TV, phone and tablet</td>
                                    <td style={currentBtn === "btn-1" ? activeColumn : {}}><FaCheck/></td>
                                    <td style={currentBtn === "btn-2" ? activeColumn : {}}><FaCheck/></td>
                                    <td style={currentBtn === "btn-3" ? activeColumn : {}}><FaCheck/></td>
                                </tr>
                                <tr>
                                    <td>Cancel anytime</td>
                                    <td style={currentBtn === "btn-1" ? activeColumn : {}}><FaCheck/></td>
                                    <td style={currentBtn === "btn-2" ? activeColumn : {}}><FaCheck/></td>
                                    <td style={currentBtn === "btn-3" ? activeColumn : {}}><FaCheck/></td>
                                </tr>
                                <tr>
                                    <td>First month free</td>
                                    <td style={currentBtn === "btn-1" ? activeColumn : {}}><FaCheck/></td>
                                    <td style={currentBtn === "btn-2" ? activeColumn : {}}><FaCheck/></td>
                                    <td style={currentBtn === "btn-3" ? activeColumn : {}}><FaCheck/></td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="text-dark text-sm" style={{textAlign: "center"}}>
                            HD and Ultra HD availability subject to your Internet service and device capabilities. Not all content available in HD or Ultra HD. 
                            <br/> See Terms of Use for more details.
                        </p>
                        <Link to="/signup-tour/account-creation" className="btn btn-lg">Continue</Link>
                    </form>   
                </div>
            </div>
        )
    }
}
