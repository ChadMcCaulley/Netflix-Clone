import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Logo_Full from "../resources/images/netflix_logo_full.png";

export default class NavbarSimple extends Component {
    render() {
        return (
            <div className="navbar-top-simple">
                <Link to="/"><img src={Logo_Full} alt="NETFLIX" id="logo"/></Link>
            </div>
        )
    }
}
