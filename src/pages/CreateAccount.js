import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class CreateAccount extends Component {
    render() {
        return (
            <div>
                <Link to="/browse" className="btn btn-xl"> Go to Netflix Page</Link>
            </div>
        )
    }
}
