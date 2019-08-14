import React, {Component} from 'react';
import tempImage from "../resources/images/temp-showcase-image.jpg";
import netflix_logo_short from "../resources/images/netflix_logo_short.png";
import {
    FaPlay,
    FaCheck,
    FaTimes,
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
            dislike: false,
            hasRated: false,
            addedToWatchlist: false
        }
        this.likeDislike = this
            .likeDislike
            .bind(this);
        this.addToWatchlist = this.addToWatchlist.bind(this);
    }
    addToWatchlist(){
        this.setState({addedToWatchlist: !this.state.addedToWatchlist});
    }
    likeDislike(e) {
        e.preventDefault();
        const input = e.target.id;
        const currentVal = this.state[input];
        if(currentVal === false)
            this.setState({[input]: true, hasRated: true});
        else 
            this.setState({[input]: false, hasRated: false});
    }
    showLikeDislike() {
        const {like, dislike, hasRated} = this.state;
        if(hasRated && like) 
            return (<div className="rating-icon-container" id="like" onClick={this.likeDislike}>
                <FaThumbsUp className="show-select-icon ignore-click"/>
            </div>);
        else if(hasRated && dislike){
            return (<div className="rating-icon-container" id="dislike" onClick={this.likeDislike}>
                <FaThumbsDown className="show-select-icon ignore-click"/>
            </div>);
        } else {
            return (<><div className="rating-icon-container" id="like" onClick={this.likeDislike}>
                <FaRegThumbsUp className="show-select-icon ignore-click"/>
            </div>
            <div className="rating-icon-container" id="dislike" onClick={this.likeDislike}>
                <FaRegThumbsDown className="show-select-icon ignore-click"/>
            </div></>);
        }
    }
    render() {
        const {volumeMute, like, dislike, hasRated, addedToWatchlist} = this.state;
        const displayLikeDislike = this.showLikeDislike();
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
                        {displayLikeDislike}
                        <div className="rating-icon-container" onClick={this.addToWatchlist}>
                            {addedToWatchlist ? <FaTimes className="show-select-icon"/> : <FaCheck className="show-select-icon"/>}
                        </div>
                    </div>
                    <IoIosArrowDown id="drop-arrow"/>
                </div>
            </div>
        )
    }
}
