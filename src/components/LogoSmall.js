import React, { Component } from "react";

class LogoSmall extends Component {

    render() {
        return (
            <img alt="logo" src="../../images/babythuiszorg-logo-small.svg" height={this.props.height}></img>
        );
    }
}

export default LogoSmall;