import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import dossierSamples from "../dossier-samples";
import Navbar from "./Navbar";
import Container from "../components/Container";
import Dashboard from "./Dashboard";
import Dossiers from "./Dossiers";
import DossierDetail from "./DossierDetail";
import Medewerkers from "./Medewerkers";
import MedewerkerDetail from "./MedewerkerDetail";
import Activiteiten from "./Activiteiten";

class App extends Component {

    constructor() {
        super();
        this.state = {
            dossiers: {}
        }
    }

    componentDidMount() {
        this.setState({ dossiers: dossierSamples });
    }

    render() {
        return (
            <Container>
                <BrowserRouter>
                    <React.Fragment>
                        <Navbar />
                        <Switch>
                            <Route exact path="/dashboard" component={Dashboard} />
                            <Route exact path="/dossiers" render={() => <Dossiers dossierlist={this.state} />} />
                            <Route exact path="/dossiers/:dossierId" render={() => <DossierDetail dossierlist={this.state.dossiers} />} />
                            <Route exact path="/medewerkers" component={Medewerkers} />
                            <Route exact path="/medewerkers/:medewerkerId" component={MedewerkerDetail} />
                            <Route exact path="/activiteiten" component={Activiteiten} />
                        </Switch>
                    </React.Fragment>
                </BrowserRouter>
            </Container>
        );
    }
}

export default App;