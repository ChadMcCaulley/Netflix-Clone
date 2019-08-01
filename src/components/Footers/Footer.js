import React from 'react';
import {Link} from "react-router-dom";

import {FaGlobe} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <p>Questions? Call 1-555-555-5555</p>
            <div className="footer-cols">
                <ul>
                    <li>
                        <Link to="/">FAQ</Link>
                    </li>
                    <li>
                        <Link to="/">Investor Relations</Link>
                    </li>
                    <li>
                        <Link to="/">Ways to Watch</Link>
                    </li>
                    <li>
                        <Link to="/">Corporate Information</Link>
                    </li>
                    <li>
                        <Link to="/">Netflix Originals</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/">Help Center</Link>
                    </li>
                    <li>
                        <Link to="/">Jobs</Link>
                    </li>
                    <li>
                        <Link to="/">Terms of Use</Link>
                    </li>
                    <li>
                        <Link to="/">Contact Us</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/">Account</Link>
                    </li>
                    <li>
                        <Link to="/">Redeem Gift Cards</Link>
                    </li>
                    <li>
                        <Link to="/">Privacy</Link>
                    </li>
                    <li>
                        <Link to="/">Speed Test</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/">Media Center</Link>
                    </li>
                    <li>
                        <Link to="/">Buy Gift Cards</Link>
                    </li>
                    <li>
                        <Link to="/">Cookie Preferences</Link>
                    </li>
                    <li>
                        <Link to="/">Legal Notices</Link>
                    </li>
                </ul>
            </div>
            <div className="footer-language-select">
                <button className=".btn-dark .btn-options">
                    <FaGlobe size={20}/>
                    English</button>
            </div>
        </footer>
    )
}

export default Footer;
