import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Employee from "../components/Employee";

class SingleDossierRow extends Component {

    render() {
        return (
            <tr>
                <td>
                    <NavLink to={"/dossiers/" + this.props.data.dossiernumber} className="table-link">
                        {this.props.data.dossiernumber}
                    </NavLink>
                </td>
                <td>
                    <NavLink to={"/dossiers/" + this.props.data.dossiernumber} className="table-link">
                        {this.props.data.babyname}
                    </NavLink>
                </td>
                <td>{this.props.data.dossierstatus}</td>
                <td><Employee employeeName={this.props.data.medewerker} /></td>
                <td>{this.props.data.hoursleft}<span className="table-light"> / {this.props.data.hourstotal}</span></td>
                <td className="table-light">{this.props.data.lastupdate}</td>
                <td className="right"><NavLink to={this.props.data.downloadlink} className="download-link"> ↘︎</NavLink></td>
            </tr>
        );
    }
}

export default SingleDossierRow;
