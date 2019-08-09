import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Footer from "./Footers/Footer";
import Navbar from "./Navbars/Navbar"

// Images
import Tab_1_Image from "../resources/images/tab-1-cancel-anytime.png";
import Tab_2_TV from "../resources/images/tab-2-watch-tv.png";
import Tab_2_Mobile from "../resources/images/tab-2-watch-mobile.png";
import Tab_2_Computer from "../resources/images/tab-2-watch-computer.png";

// Icons
import {IoIosArrowForward} from "react-icons/io";
import {FaDoorOpen, FaTabletAlt, FaTags, FaTimes, FaCheck} from "react-icons/fa";

const inactiveTab = "tab";
const activeTab = "tab tab-border";
const urls = {
    newUser: "/signup-tour/benefits",
    existingUser: "signin-existing"
};

class LandingPageStandard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: "tab-1"
        }
    }
    handleTabClick = e => {
        e.preventDefault();
        let tab = e.currentTarget.dataset.id;
        this.setState({currentTab: tab});
    }
    endOfFree = () => {
        let today = new Date();
        today.setDate(today.getDate()+29);
        const day = String(today.getUTCDate()).padStart(2, "0");
        const month = String(today.getUTCMonth()+1);
        const year = String(today.getUTCFullYear());
        let endOfFree = `${month}/${day}/${year}`;
        return `Monthly price after free month ends on ${endOfFree}`;
    }
    render() {
        const currentTab = this.state.currentTab;
        const endOfFree = this.endOfFree();
        const existingUser = urls.existingUser;
        const newUser = urls.newUser;
        return (
            <div>
                <header className="landing-page-showcase">
                    <Navbar logoLink="/" pText="Have an account?" btnText="Sign In" btnLink={existingUser}/>
                    <div className="landing-page-showcase-content">
                        <h1>
                            See what's next</h1>
                        <p>
                            Watch anywhere. Cancel anytime</p>
                        <Link to={newUser} className="btn btn-xl">
                            Try 30 Days Free
                            <IoIosArrowForward id="signup-link-icon"/></Link>
                    </div>
                </header>
                <section className="landing-page-tabs">
                    <div className="container">
                        <div
                            data-id="tab-1"
                            className={currentTab === "tab-1"
                            ? activeTab
                            : inactiveTab}
                            onClick={this.handleTabClick}>
                            <FaDoorOpen className="tab-icon"/>
                            <p className="hide-sm">
                                Cancel anytime
                            </p>
                        </div>
                        <div
                            data-id="tab-2"
                            className={currentTab === "tab-2"
                            ? activeTab
                            : inactiveTab}
                            onClick={this.handleTabClick}>
                            <FaTabletAlt className="tab-icon"/>
                            <p className="hide-sm">
                                Watch anywhere
                            </p>
                        </div>
                        <div
                            data-id="tab-3"
                            className={currentTab === "tab-3"
                            ? activeTab
                            : inactiveTab}
                            onClick={this.handleTabClick}>
                            <FaTags className="tab-icon"/>
                            <p className="hide-sm">
                                Pick your price
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="tab-content"> 
                    <div className="container">
                        {currentTab === "tab-1" && (
                            <div id="tab-1-content" className="tab">
                                <div className="tab-1-content-inner">
                                    <div>
                                        <p className="text-lg">
                                            If you decide Netflix isn't for you - no problem. No commitment.
                                            Cancel online anytime.
                                        </p>
                                        <Link to={newUser} className="btn btn-lg"> Try 30 Days Free</Link>
                                    </div>
                                    <img src={Tab_1_Image} alt="cancel anytime"/>
                                </div>
                            </div>
                        )}
                        {currentTab === "tab-2" && (
                            <div id="tab-2-content" className="tab">
                                <div className="tab-2-content-top">
                                    <p className="text-lg">
                                       Watch TV shows and movies anytime, anywhere - personalized for you 
                                    </p>
                                    <Link to={newUser} className="btn btn-lg"> Try 30 Days Free</Link>
                                </div>
                                <div className="tab-2-content-bottom">
                                    <div>
                                        <img src={Tab_2_TV} alt="tv"/>
                                        <p className="text-md"> Watch on your TV </p>
                                        <p className="text-md text-dark"> Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                                    </div>
                                    <div>
                                        <img src={Tab_2_Mobile} alt="tv"/>
                                        <p className="text-md"> Watch instantly or download for later </p>
                                        <p className="text-md text-dark"> Available on phone and tablet, wherever you go.</p>
                                    </div>
                                    <div>
                                        <img src={Tab_2_Computer} alt="tv"/>
                                        <p className="text-md"> Use any computer </p>
                                        <p className="text-md text-dark"> Watch right on Netflix.com.</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {currentTab === "tab-3" && (
                            <div id="tab-3-content" className="tab">
                                <div className="text-center">
                                    <p className="text-lg">
                                       Choose one plan and watch everything on Netflix.
                                    </p>
                                    <Link to={newUser} className="btn btn-lg"> Try 30 Days Free</Link>
                                </div>
                                <table className="tab-3-table">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th className="text-md text-white">Basic</th>
                                            <th className="text-md text-white">Standard</th>
                                            <th className="text-md text-white">Premium</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="text-table">
                                            <td> {endOfFree}</td>
                                            <td>$8.99</td>
                                            <td>$12.99</td>
                                            <td>$15.99</td>
                                        </tr>
                                        <tr className="text-table">
                                            <td>HD available</td>
                                            <td><FaTimes/></td>
                                            <td><FaCheck/></td>
                                            <td><FaCheck/></td>
                                        </tr>
                                        <tr className="text-table">
                                            <td>Ultra HD available</td>
                                            <td><FaTimes/></td>
                                            <td><FaTimes/></td>
                                            <td><FaCheck/></td>
                                        </tr>
                                        <tr className="text-table">
                                            <td>Screens you can watch on at the same time</td>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>4</td>
                                        </tr>
                                        <tr className="text-table">
                                            <td>Watch on your laptop, TV, phone and tablet</td>
                                            <td><FaCheck/></td>
                                            <td><FaCheck/></td>
                                            <td><FaCheck/></td>
                                        </tr>
                                        <tr className="text-table">
                                            <td>Cancel anytime</td>
                                            <td><FaCheck/></td>
                                            <td><FaCheck/></td>
                                            <td><FaCheck/></td>
                                        </tr>
                                        <tr className="text-table">
                                            <td>First month free</td>
                                            <td><FaCheck/></td>
                                            <td><FaCheck/></td>
                                            <td><FaCheck/></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        )
    }
}

export default LandingPageStandard;