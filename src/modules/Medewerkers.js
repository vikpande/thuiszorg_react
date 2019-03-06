import React, { Component } from "react";
import Grid from "../components/Grid";

class Medewerkers extends Component {

    render() {
        return (
            <Grid>
                <h1>Medewerkers</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Medewerkersnummer</th>
                            <th>Naam</th>
                            <th>E-mailadres</th>
                            <th>Telefoonnummer</th>
                            <th>Aantal dossiers</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>3967429</td>
                            <td>Anneloes de Hast</td>
                            <td>a.dehast@email.com</td>
                            <td>0638726544</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>2948730</td>
                            <td>Arend Vogel</td>
                            <td>a.vogel@email.com</td>
                            <td>0682634367</td>
                            <td>3</td>
                        </tr>
                    </tbody>
                </table>
            </Grid>
        );
    }
}

export default Medewerkers;