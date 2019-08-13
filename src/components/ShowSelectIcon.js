import React, {Component} from 'react';
import tempImage from "../resources/images/temp-showcase-image.jpg";
import netflix_logo_short from "../resources/images/netflix_logo_short.png";
import {FaPlayCircle, FaCheck, FaVolumeMute, FaVolumeUp, FaRegThumbsUp, FaRegThumbsDown} from "react-icons/fa";

export default class ShowSelectIcon extends Component {
    render() {
        return (
            <div className="show-option-container">
                <img src={netflix_logo_short} alt="netflix" className="show-option-logo"/>
                <img src={tempImage} alt="temp" className="show-option-image"/>
                <div className="show-hover-container">
                    <div className="show-info-container text-bold">
                        <FaPlayCircle id="play-icon"/>
                        <p className="text-xsm"> Ralph Breaks The Internet: Wreck-it Ralph 2 </p>
                        <div className="text-xsm text-row"> 
                            <p className="text-green"> 98% match </p>
                            <p className="age-rating"> PG</p>
                            <p> 1h 52m</p>
                        </div>
                        <div className="text-xsm text-row">
                            <p>Family Animation</p>
                            <p>Family Comedy</p>
                            <p>Underdog</p>
                        </div>
                    </div>
                    <div className="show-buttons-container">
                        <FaVolumeUp className="show-select-icon"/>
                        <FaRegThumbsUp className="show-select-icon"/>
                        <FaRegThumbsDown className="show-select-icon"/>
                        <FaCheck className="show-select-icon"/>
                    </div>
                </div>
            </div>
        )
    }
}
