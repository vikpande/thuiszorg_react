import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import Grid from "../components/Grid";
import HorizontalGroup from "../components/HorizontalGroup";
import Input from "../components/Input";
// import activities from "../modules/activity_samples";

class Activiteiten extends Component {
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
        

        return (
            <Grid>
            <h1>Activiteiten</h1>
            <HorizontalGroup>
                <HorizontalGroup>
                    <Input
                        type="text"
                        placeholder="Zoeken"
                        className="search-input"
                        value={this.state.search}
                        onChange={this.updateSearch.bind(this)}
                    />
                </HorizontalGroup>
            </HorizontalGroup>
            <table>
                <thead>
                    <tr>
                        <th>Activiteitennr.</th>
                        <th>Medewerker &#x25BC;</th>
                        <th>Babynaam &#x25BC;</th>
                        <th>Category </th>
                        <th className="right">Tijd &#x25BC;</th>
                        <th className="right">Comments</th>
                    </tr>
                </thead>
                {/* <tbody>
                    
                </tbody> */}
            </table>
        </Grid >
        );
    }
}

export default Activiteiten;