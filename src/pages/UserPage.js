import React, {Component} from 'react';
import {Link} from "react-router-dom";

import userIcon from "../resources/images/userIcon.jpg";
import userIcon2 from "../resources/images/userIcon2.png";
import userIcon3 from "../resources/images/userIcon3.png";
import userIcon4 from "../resources/images/userIcon4.png";
import NavbarFull from "../components/Navbars/NavbarFull";

export default class UserPage extends Component {
    render() {
        return (
            <div>
                <NavbarFull logoOnly="true"/>
                <div className="center-content-container">
                    <div className="user-page-container">
                        <div className="user-icons-container">
                            <Link to="/browse" className="user-icons">
                                <img src={userIcon} alt="user-icon"/>
                                <p className="text-lg">
                                    User 1
                                </p>
                            </Link>
                            <Link to="/browse" className="user-icons">
                                <img src={userIcon2} alt="user-icon"/>
                                <p className="text-lg">
                                    User 2
                                </p>
                            </Link>
                            <Link to="/browse" className="user-icons">
                                <img src={userIcon3} alt="user-icon"/>
                                <p className="text-lg">
                                    User 3
                                </p>
                            </Link>
                            <Link to="/browse" className="user-icons">
                                <img src={userIcon4} alt="user-icon"/>
                                <p className="text-lg">
                                    User 4
                                </p>
                            </Link>
                        </div>
                        <Link to="/manage-account" className="btn btn-xl">
                            Manage Accounts
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
