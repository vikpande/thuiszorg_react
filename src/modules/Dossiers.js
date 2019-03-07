import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Grid from "../components/Grid";
import HorizontalGroup from "../components/HorizontalGroup";
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";
import Employee from "../components/Employee";

class Dossiers extends Component {

    render() {
        return (
            <Grid>
                <h1>Dossiers</h1>
                <HorizontalGroup>
                    <HorizontalGroup>
                        <Input
                            type="text"
                            placeholder="Zoek een dossier"
                            className="search-input"
                        />
                        <Select>
                            <option value="all">Alle dossiers</option>
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
                        <tr>
                            <td><NavLink to="/dossiers/637564" className="table-link">637564</NavLink></td>
                            <td><NavLink to="/dossiers/637564" className="table-link">John Doe</NavLink></td>
                            <td>Open</td>
                            <td><Employee /></td>
                            <td>10<span className="table-light"> / 28</span></td>
                            <td className="table-light">10 min geleden</td>
                            <td><a href>Download ↘︎</a></td>
                        </tr>
                        <tr>
                            <td><NavLink to="/dossiers/836465" className="table-link">836465</NavLink></td>
                            <td><NavLink to="/dossiers/836465" className="table-link">Wes Kino</NavLink></td>
                            <td>Gesloten</td>
                            <td><Employee /></td>
                            <td>22<span className="table-light"> / 22</span></td>
                            <td className="table-light">2 uur geleden</td>
                            <td><a href>Download ↘︎</a></td>
                        </tr>
                        <tr>
                            <td><NavLink to="/dossiers/587365" className="table-link">587365</NavLink></td>
                            <td><NavLink to="/dossiers/587365" className="table-link">Hans Puik</NavLink></td>
                            <td>Open</td>
                            <td><Employee /></td>
                            <td>6<span className="table-light"> / 20</span></td>
                            <td className="table-light">gisteren 11:45</td>
                            <td><a href>Download ↘︎</a></td>
                        </tr>
                    </tbody>
                </table>
            </Grid>
        );
    }
}

export default Dossiers;