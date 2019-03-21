import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Grid from "../components/Grid";
import GridDetail from "../components/GridDetail";
import HorizontalGroup from "../components/HorizontalGroup";
import VerticalGroup from "../components/VerticalGroup";
import Select from "../components/Select";
import Button from "../components/Button";
import Block from "../components/Block";
import Assignees from "../modules/Assignees";

class DossierDetail extends Component {
    render() {
        return (
            <Grid>
                <div>
                    <p>Klantnaam / Dossiernummer</p>
                    <h1>Dossiernaam</h1>
                </div>
                <HorizontalGroup>
                    <HorizontalGroup gap="32px">
                        <VerticalGroup>
                            <label>Status</label>
                            <Select>
                                <option value="open" defaultValue>Open</option>
                                <option value="closed">Gesloten</option>
                            </Select>
                        </VerticalGroup>
                        <VerticalGroup>
                            <label>Toegewezen aan</label>
                            <Assignees />
                        </VerticalGroup>
                    </HorizontalGroup>
                    <NavLink to="#">
                        <Button label="Activiteit toevoegen" />
                    </NavLink>
                </HorizontalGroup>
                <GridDetail>
                    <VerticalGroup gap="24px">
                        <Block>
                            <HorizontalGroup>
                                <h3>Dossierinformatie</h3>
                                <a>Aanpassen</a>
                            </HorizontalGroup>
                            <hr />
                            <HorizontalGroup>
                                <label>Aangemaakt op</label>
                                <p>03-02-2019</p>
                            </HorizontalGroup>
                            <HorizontalGroup>
                                <label>Status</label>
                                <Select>
                                    <option value="open" defaultValue>Open</option>
                                    <option value="closed">Gesloten</option>
                                </Select>
                            </HorizontalGroup>
                        </Block>
                        <Block>
                            <HorizontalGroup>
                                <h3>Klantinformatie</h3>
                            </HorizontalGroup>
                            <hr />
                            <HorizontalGroup>
                                <label>Klant</label>
                                <p>Max hoevelaar</p>
                            </HorizontalGroup>
                        </Block>
                    </VerticalGroup>
                    <Block>
                        <h3>Activiteiten</h3>
                        <hr />
                        <p>Activiteiten logboek</p>
                    </Block>
                </GridDetail>
            </Grid>
        );
    }
}

export default DossierDetail;