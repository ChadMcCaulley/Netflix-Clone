import React, {Component} from 'react';
import NavbarFull from "../components/Navbars/NavbarFull";
import ShowSelectMenu from "../components/ShowSelectMenu";

export default class NetflixMainPage extends Component {
    render() {
        return (
            <div>
                <NavbarFull logoOnly="false"/>
                <div>
                    <ShowSelectMenu/>
                    <ShowSelectMenu/>
                    <ShowSelectMenu/>
                </div>

            </div>
        )
    }
}
