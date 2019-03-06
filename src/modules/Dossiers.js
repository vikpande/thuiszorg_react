import React, { Component } from "react";
import Grid from "../components/Grid";
import HorizontalGroup from "../components/HorizontalGroup";
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";

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
                            <th>Status</th>
                            <th>Babynaam</th>
                            <th>Medewerker</th>
                            <th>Aantal uren beschikbaar</th>
                            <th>Laatst geupdate</th>
                            <th>Download PDF</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>637564</td>
                            <td>Open</td>
                            <td>John Doe</td>
                            <td>Anneloes de Hast</td>
                            <td>10 / 28</td>
                            <td>10 min geleden</td>
                            <td><a href="#">Download ↘︎</a></td>
                        </tr>
                        <tr>
                            <td>836465</td>
                            <td>Gesloten</td>
                            <td>Wes Kino</td>
                            <td>Arend Vogel</td>
                            <td>22 / 22</td>
                            <td>2 uur geleden</td>
                            <td><a href="#">Download ↘︎</a></td>
                        </tr>
                        <tr>
                            <td>587365</td>
                            <td>Open</td>
                            <td>Hans Puik</td>
                            <td>Ilse Kort</td>
                            <td>6 / 20</td>
                            <td>gisteren 11:45</td>
                            <td><a href="#">Download ↘︎</a></td>
                        </tr>
                    </tbody>
                </table>
            </Grid>
        );
    }
}

export default Dossiers;