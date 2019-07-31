import React, {Component} from 'react';
import LandingPageStandard from "../components/LandingPageStandard";
import LandingPageMobile from "../components/LandingPageMobile";

const breakPoints = {
    tablet: 840,
    mobile: {
        width: 540,
        height: 900
    }
}
export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }
    render() {
        const {width, height} = this.state;
        return (
            <div>
                {(width <= breakPoints.mobile.width) ? <LandingPageMobile/> : <LandingPageStandard/>}
            </div>
        )
    }
}
