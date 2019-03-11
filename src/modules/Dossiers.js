import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Grid from "../components/Grid";
import HorizontalGroup from "../components/HorizontalGroup";
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";
import Employee from "../components/Employee";

class Dossiers extends Component {
    constructor() {
        super();
        this.state = {
            search: "",
            status: "all"
        }
    }

    updateSearch(event) {
        this.setState({ search: event.target.value.substr(0, 20) });
    }

    updateStatus(event) {
        this.setState({ status: event.target.value });
    }

    render() {
        let dossierList = this.props.dossierlist.dossiers

        // Place the filter/search logic. State is already updating on change input or dropdown.

        return (
            <Grid>
                <h1>Dossiers</h1>
                <HorizontalGroup>
                    <HorizontalGroup>
                        <Input
                            type="text"
                            placeholder="Zoek een dossier"
                            className="search-input"
                            value={this.state.search}
                            onChange={this.updateSearch.bind(this)}
                        />
                        <Select onChange={this.updateStatus.bind(this)}>
                            <option value="all" defaultValue> Alle dossiers</option>
                            <option value="open">Open dossiers</option>
                            <option value="closed">Gesloten dossiers</option>
                        </Select>
                    </HorizontalGroup>
                    <Button label="Nieuw dossier" />
                </HorizontalGroup>
                <table>
                    <thead>
                        <tr>
                            <th>Dossiernummer</th>
                            <th>Babynaam</th>
                            <th>Status</th>
                            <th>Medewerker</th>
                            <th>Aantal uren beschikbaar</th>
                            <th>Laatst geupdate &#x25BC;</th>
                            <th>Download PDF</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(dossierList).map(key =>
                            <tr key={key}>
                                <td>
                                    <NavLink to={"/dossiers/" + dossierList[key].dossiernumber} className="table-link">
                                        {dossierList[key].dossiernumber}
                                    </NavLink>
                                </td>
                                <td>
                                    <NavLink to={"/dossiers/" + dossierList[key].dossiernumber} className="table-link">
                                        {dossierList[key].babyname}
                                    </NavLink>
                                </td>
                                <td>{dossierList[key].dossierstatus}</td>
                                <td><Employee employeeId={dossierList[key].medewerker} /></td>
                                <td>{dossierList[key].hoursleft}<span className="table-light"> / {dossierList[key].hourstotal}</span></td>
                                <td className="table-light">{dossierList[key].lastupdate}</td>
                                <td><NavLink to={dossierList[key].downloadlink}>Download ↘︎</NavLink></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </Grid >
        );
    }
}

export default Dossiers;