import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Employee from "../components/Employee";
import Assignees from "../modules/Assignees";

function timeDifference(current, previous) {

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
        return Math.round(elapsed / 1000) + ' seconden geleden';
    }

    else if (elapsed < msPerHour) {
        return Math.round(elapsed / msPerMinute) + ' minuten geleden';
    }

    else if (elapsed < msPerDay) {
        return Math.round(elapsed / msPerHour) + ' uur geleden';
    }

    else if (elapsed < msPerMonth) {
        return Math.round(elapsed / msPerDay) + ' dagen geleden';
    }

    else if (elapsed < msPerYear) {
        return Math.round(elapsed / msPerMonth) + ' maanden geleden';
    }

    else {
        return Math.round(elapsed / msPerYear) + ' jaar geleden';
    }
}

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
                <td>
                    <div className="assignees-table">
                        <Assignees size="32px" small />
                    </div>
                    {/* <Employee employeeName={this.props.data.medewerker} /> */}
                </td>
                <td>{this.props.data.hoursleft}<span className="table-light"> / {this.props.data.hourstotal}</span></td>
                <td className="table-light">{
                    timeDifference(Date.now(), this.props.data.lastupdate)
                }</td>
                <td className="right"><NavLink to={this.props.data.downloadlink} className="download-link"> ↘︎</NavLink></td>
            </tr>
        );
    }
}

export default SingleDossierRow;
