import React, {Component} from 'react';
import tempImage from "../resources/images/temp-showcase-image.jpg";
import netflix_logo_short from "../resources/images/netflix_logo_short.png";
import {
    FaPlay,
    FaCheck,
    FaVolumeMute,
    FaVolumeUp,
    FaRegThumbsUp,
    FaRegThumbsDown,
    FaThumbsUp,
    FaThumbsDown
} from "react-icons/fa";
import {IoIosArrowDown} from "react-icons/io";

export default class ShowSelectIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            volumeMute: false,
            like: false,
            dislike: false
        }
        this.likeDislike = this
            .likeDislike
            .bind(this);
    }
    likeDislike(e) {
        e.preventDefault();
        const input = e.target.id;
        input === "like" ? this.setState({like: true, dislike: false}) : this.setState({like: false,dislike: true}); 
        console.log(this.state);
    }
    render() {
        const {volumeMute, like, dislike} = this.state;
        return (
            <div className="show-option-container">
                <img src={netflix_logo_short} alt="netflix" className="show-option-logo"/>
                <img src={tempImage} alt="temp" className="show-option-image"/>
                <div className="show-hover-container">
                    <div className="show-info-container text-bold text-video-content">
                        <div id="play-icon-container"><FaPlay id="play-icon"/></div>
                        <p id="show-icon-title">
                            Ralph Breaks The Internet: Wreck-it Ralph 2
                        </p>
                        <div className="rating-length">
                            <p className="text-green">
                                98% match
                            </p>
                            <p id="rating-tag">
                                PG
                            </p>
                            <p>
                                1h 52m
                            </p>
                        </div>
                        <div className="text-row">
                            <p>Family Animation</p>
                            <p>Family Comedy</p>
                            <p>Underdog</p>
                        </div>
                        <IoIosArrowDown id="drop-arrow"/>
                    </div>
                    <div className="show-buttons-container">
                        <div
                            className="rating-icon-container"
                            onClick={() => this.setState({
                            volumeMute: !this.state.volumeMute
                        })}>
                            {volumeMute
                                ? <FaVolumeMute className="show-select-icon"/>
                                : <FaVolumeUp className="show-select-icon"/>}
                        </div>
                        <div className="rating-icon-container" id="like" onClick={this.likeDislike}>
                            {like ? <FaThumbsUp className="show-select-icon ignore-click"/> : <FaRegThumbsUp className="show-select-icon ignore-click"/>}
                        </div>
                        <div className="rating-icon-container" id="dislike" onClick={this.likeDislike}>
                            {dislike ? <FaThumbsDown className="show-select-icon ignore-click"/> : <FaRegThumbsDown className="show-select-icon ignore-click"/>}
                        </div>
                        <div className="rating-icon-container"><FaCheck className="show-select-icon"/></div>
                    </div>
                </div>
            </div>
        )
    }
}
