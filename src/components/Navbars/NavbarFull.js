import React from 'react';
import {Link} from "react-router-dom";

import Logo_Full from "../../resources/images/netflix_logo_full.png";
import userIcon  from "../../resources/images/userIcon.jpg";
import {IoIosSearch, IoIosNotifications} from "react-icons/io";

export default function NavbarFull({logoOnly}) {
    return (
        <nav className="nav-full">
            {logoOnly === "true" && (
                <div className="nav-full-container">
                    <Link to="/" className="nav-full-logo-only"><img src={Logo_Full} alt="NETFLIX" id="logo"/></Link>
                </div>
            )}
            {logoOnly === "false" && (
                <div>
                    <div className="nav-full-container">
                        <Link to="/"><img src={Logo_Full} alt="NETFLIX" className="logo"/></Link>
                        <Link to="/browse/home" className="nav-link text-sm">
                            Home
                        </Link>
                        <Link to="/browse/tv-shows" className="nav-link text-sm">
                            TV Shows
                        </Link>
                        <Link to="/browse/movies" className="nav-link text-sm">
                            Movies
                        </Link>
                        <Link to="/browse/recently-added" className="nav-link text-sm">
                            Recently Added
                        </Link>
                        <Link to="/browse/my-list" className="nav-link text-sm">
                            My List
                        </Link>
                        <IoIosSearch className="nav-icon" id="search-icon"/>
                        <IoIosNotifications className="nav-icon"/>
                        <div className="nav-user-icon"><img src={userIcon} alt="icon"/></div>
                    </div>
                </div>
            )}
        </nav>
    )
}
