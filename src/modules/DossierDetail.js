import React, { Component } from "react";

class DossierDetail extends Component {

    render() {
        return (
            <div>
                <h1>DossierDetail</h1>
                <p>{this.props.match.params.dossierId}</p>
            </div>
        );
    }
}

export default DossierDetail;