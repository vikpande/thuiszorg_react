import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Grid from "../components/Grid";
import HorizontalGroup from "../components/HorizontalGroup";
import Input from "../components/Input";
import Button from "../components/Button";
import Employee from "../components/Employee";

class Employees extends Component {
    constructor() {
        super();
        this.state = {
            search: ""
        }
    }

    updateSearch(event) {
        this.setState({ search: event.target.value.substr(0, 20) });
    }

    render() {
        let employeeList = this.props.employeelist
        let employeeListArray = Object.values(employeeList)
        let filteredList = employeeListArray.filter(
            (eachEmployee) => {
                return (
                    eachEmployee.employeename.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
                    eachEmployee.employeenumber.toString().indexOf(this.state.search.toLowerCase()) !== -1
                )
            }
        )

        return (
            <Grid>
                <h1>Medewerkers</h1>
                <HorizontalGroup>
                    <HorizontalGroup>
                        <Input
                            type="text"
                            placeholder="Zoek op nummer of medewerker"
                            className="search-input"
                            value={this.state.search}
                            onChange={this.updateSearch.bind(this)}
                        />
                    </HorizontalGroup>
                    <Button label="Nieuwe medewerker" />
                </HorizontalGroup>
                <table>
                    <thead>
                        <tr>
                            <th>Medewerkernr.</th>
                            <th>Medewerker &#x25BC;</th>
                            <th>E-mailadres</th>
                            <th>Telefoonnummer</th>
                            <th className="right">Aantal uren gewerkt</th>
                            <th className="right">Gekoppelde dossiers</th>
                            <th className="right">Acties</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(filteredList).map(key =>
                            <tr key={key}>
                                <td>
                                    <NavLink to={"/medewerkers/" + filteredList[key].employeenumber} className="table-link">
                                        {filteredList[key].employeenumber}
                                    </NavLink>
                                </td>
                                <td>
                                    <Employee employeeName={filteredList[key].employeename} />
                                </td>
                                <td><a href=" " className="table-link">{filteredList[key].email}</a></td>
                                <td className="table-light">{filteredList[key].phonenumber}</td>
                                <td className="table-light right">{filteredList[key].workedhours}</td>
                                <td className="right">{filteredList[key].activedossiers}</td>
                                <td className="table-light right">→</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </Grid >
        );
    }
}

export default Employees;