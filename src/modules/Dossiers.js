import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Grid from "../components/Grid";
import HorizontalGroup from "../components/HorizontalGroup";
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";
import SingleDossierRow from "../modules/SingleDossierRow";

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
        let dossierList = this.props.dossierlist
        let dossierListArray = Object.values(dossierList)
        let filteredList = dossierListArray.filter(
            (eachDossier) => {
                if (this.state.status.toLowerCase() === "open") {
                    return (
                        eachDossier.dossierstatus.toLowerCase() === "open" && (
                            eachDossier.babyname.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
                            eachDossier.medewerker.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
                            eachDossier.dossiernumber.toString().indexOf(this.state.search) !== -1
                        )
                    )
                }
                else if (this.state.status.toLowerCase() === "closed") {
                    return (
                        eachDossier.dossierstatus.toLowerCase() === "gesloten" && (
                            eachDossier.babyname.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
                            eachDossier.medewerker.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
                            eachDossier.dossiernumber.toString().indexOf(this.state.search) !== -1
                        )
                    )
                }
                return (
                    eachDossier.dossierstatus && (
                        eachDossier.babyname.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
                        eachDossier.medewerker.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
                        eachDossier.dossiernumber.toString().indexOf(this.state.search) !== -1
                    )
                )
            }
        )
        return (
            <Grid>
                <h1>Dossiers</h1>
                <HorizontalGroup>
                    <HorizontalGroup>
                        <Input
                            type="text"
                            placeholder="Zoek op nummer, naam of medewerker"
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
                    <NavLink to="/create-dossier">
                        <Button label="Nieuw dossier" />
                    </NavLink>
                </HorizontalGroup>
                <table>
                    <thead>
                        <tr>
                            <th>Dossiernr.</th>
                            <th>Babynaam</th>
                            <th>Status</th>
                            <th>Medewerker</th>
                            <th>Aantal uren</th>
                            <th className="table-head-active">Laatst geupdate</th>
                            <th className="right">Download PDF</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(filteredList.sort(function (obj1, obj2) {
                            return (obj1.lastupdate > obj2.lastupdate) ? -1 : (obj1.lastupdate < obj2.lastupdate) ? 1 : 0;
                            // To sort by a string:
                            // return (obj1.babyname < obj2.babyname) ? -1 : (obj1.babyname > obj2.babyname) ? 1 : 0;
                        })).map(key => <SingleDossierRow key={key} data={filteredList[key]} />)}
                    </tbody>
                </table>
            </Grid >
        );
    }
}

export default Dossiers;