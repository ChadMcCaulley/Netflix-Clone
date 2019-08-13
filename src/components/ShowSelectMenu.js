import React, { Component } from 'react';
import ShowSelectIcon from "./ShowSelectIcon";

export default class ShowSelectMenu extends Component {
    render() {
        return (
            <div className="show-carousel-container-outer">
                <p id="carousel-title" className="text-lg"> My List</p>
                <div className="show-carousel-container-inner">
                    <ShowSelectIcon/>
                    <ShowSelectIcon/>
                    <ShowSelectIcon/>
                    <ShowSelectIcon/>
                    <ShowSelectIcon/>
                    <ShowSelectIcon/>
                </div>
            </div>
        )
    }
}
