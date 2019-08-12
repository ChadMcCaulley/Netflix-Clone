import React, { Component } from 'react';
import userIcon from "../resources/images/userIcon.jpg";
import netflix_logo_short from "../resources/images/netflix_logo_short.png";

export default class ShowSelectIcon extends Component {
    render() {
        return (
            <div className="show-option-container">
                <img src={netflix_logo_short} alt="netflix" className="show-option-logo"/>
                <img src={userIcon} alt="temp" className="show-option-image"/>
            </div>
        )
    }
}
