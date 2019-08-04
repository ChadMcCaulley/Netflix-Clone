import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class CreateAccount extends Component {
    render() {
        const account = {_id: 123};
        const user = {_id: 234};
        const userNetflixPage = `/${account._id}/${user._id}/netflix-home`;
        return (
            <div>
                <Link to={userNetflixPage} className="btn btn-xl"> Go to Netflix Page</Link>
            </div>
        )
    }
}
