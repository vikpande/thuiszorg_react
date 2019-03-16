import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Grid from "../components/Grid";
import HorizontalGroup from "../components/HorizontalGroup";
import HorizontalFormGroup from "../components/HorizontalFormGroup";
import Button from "../components/Button";
import Input from "../components/Input";
import FormGroup from "../components/FormGroup";
import FormDescription from "../components/FormDescription";
import FormInputs from "../components/FormInputs";

class NewDossier extends Component {

    render() {
        return (
            <Grid>
                <form action="" className="create-form">
                    <HorizontalGroup className="progress-bar">
                        <h3>Nieuw dossier aanmaken</h3>
                        <HorizontalGroup>
                            <p className="light">Nog niet opgeslagen ↻</p>
                        </HorizontalGroup>
                        <HorizontalGroup>
                            <NavLink to="/dossiers/">
                                <Button secondary label="Annuleren" />
                            </NavLink>
                            <Button label="Verder" />
                        </HorizontalGroup>
                    </HorizontalGroup>

                    <FormGroup>
                        <FormDescription>
                            <h2>Persoonlijke gegevens</h2>
                            <p className="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a href=" ">Hoe check ik burgerservicenummer (BSN)?</a>
                        </FormDescription>
                        <FormInputs>
                            <HorizontalFormGroup>
                                <p>Klantnummer</p>
                                <Input
                                    type="number"
                                    required
                                    placeholder="Klantnummer (ISK)"
                                />
                            </HorizontalFormGroup>
                            <HorizontalFormGroup>
                                <p>Burgerservicenummer (BSN)</p>
                                <Input
                                    type="number"
                                    required
                                    placeholder="Burgerservicenummer (BSN)"
                                />
                            </HorizontalFormGroup>
                            <HorizontalFormGroup>
                                <p>Voorletters</p>
                                <Input
                                    type="text"
                                    required
                                    placeholder="Voorletters"
                                />
                            </HorizontalFormGroup>
                            <HorizontalFormGroup>
                                <p>Voornaam</p>
                                <Input
                                    type="text"
                                    required
                                    placeholder="Voornaam"
                                />
                            </HorizontalFormGroup>
                            <HorizontalFormGroup>
                                <p>Tussenvoegsel(s)</p>
                                <Input
                                    type="text"
                                    required
                                    placeholder="Tussenvoegsel(s)"
                                />
                            </HorizontalFormGroup>
                            <HorizontalFormGroup>
                                <p>Achternaam</p>
                                <Input
                                    type="text"
                                    required
                                    placeholder="Achternaam"
                                />
                            </HorizontalFormGroup>
                            <HorizontalFormGroup>
                                <p>Partner voornaam</p>
                                <Input
                                    type="text"
                                    required
                                    placeholder="Partner voornaam"
                                />
                            </HorizontalFormGroup>
                        </FormInputs>
                    </FormGroup>

                    <FormGroup>
                        <FormDescription>
                            <h2>Persoonlijke gegevens</h2>
                            <p className="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a href=" ">Hoe check ik burgerservicenummer (BSN)?</a>
                        </FormDescription>
                        <FormInputs>
                            <HorizontalFormGroup>
                                <p>Klantnummer</p>
                                <Input
                                    type="number"
                                    required
                                    placeholder="Klantnummer (ISK)"
                                />
                            </HorizontalFormGroup>
                            <HorizontalFormGroup>
                                <p>Burgerservicenummer (BSN)</p>
                                <Input
                                    type="number"
                                    required
                                    placeholder="Burgerservicenummer (BSN)"
                                />
                            </HorizontalFormGroup>
                            <HorizontalFormGroup>
                                <p>Voorletters</p>
                                <Input
                                    type="text"
                                    required
                                    placeholder="Voorletters"
                                />
                            </HorizontalFormGroup>
                            <HorizontalFormGroup>
                                <p>Voornaam</p>
                                <Input
                                    type="text"
                                    required
                                    placeholder="Voornaam"
                                />
                            </HorizontalFormGroup>
                            <HorizontalFormGroup>
                                <p>Tussenvoegsel(s)</p>
                                <Input
                                    type="text"
                                    required
                                    placeholder="Tussenvoegsel(s)"
                                />
                            </HorizontalFormGroup>
                            <HorizontalFormGroup>
                                <p>Achternaam</p>
                                <Input
                                    type="text"
                                    required
                                    placeholder="Achternaam"
                                />
                            </HorizontalFormGroup>
                            <HorizontalFormGroup>
                                <p>Partner voornaam</p>
                                <Input
                                    type="text"
                                    required
                                    placeholder="Partner voornaam"
                                />
                            </HorizontalFormGroup>
                        </FormInputs>
                    </FormGroup>
                </form>
            </Grid>
        );
    }
}

export default NewDossier;