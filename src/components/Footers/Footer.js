import React from 'react';
import {Link} from "react-router-dom";

import {FaGlobe} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <p className="text-md">Questions? Call 1-555-555-5555</p>
            <div className="footer-cols">
                <ul>
                    <li>
                        <Link to="/">
                            <p className="text-md text-dark">
                                FAQ</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <p className="text-md text-dark">Investor Relations</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <p className="text-md text-dark">Ways to Watch</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <p className="text-md text-dark">Corporate Information</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <p className="text-md text-dark">Netflix Originals</p>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/">
                            <p className="text-md text-dark">Help Center</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <p className="text-md text-dark">Jobs</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <p className="text-md text-dark">Terms of Use</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <p className="text-md text-dark">Contact Us</p>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/">
                            <p className="text-md text-dark">Account</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <p className="text-md text-dark">Redeem Gift Cards</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <p className="text-md text-dark">Privacy</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <p className="text-md text-dark">Speed Test</p>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/">
                            <p className="text-md text-dark">Media Center</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <p className="text-md text-dark">Buy Gift Cards</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <p className="text-md text-dark">Cookie Preferences</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <p className="text-md text-dark">Legal Notices</p>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="footer-language-select">
                <button className="btn-lg btn-dark btn-options"><FaGlobe className="icon"/> English</button>
            </div>
        </footer>
    )
}

export default Footer;
