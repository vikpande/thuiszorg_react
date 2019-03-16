import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import dossierSamples from "../dossier-samples";
import employeeSamples from "../employee-samples";
import Navbar from "./Navbar";
import Container from "../components/Container";
import Dashboard from "./Dashboard";
import Klanten from "./Klanten";
import Dossiers from "./Dossiers";
import DossierDetail from "./DossierDetail";
import NewDossier from "./NewDossier";
import Medewerkers from "./Medewerkers";
import MedewerkerDetail from "./MedewerkerDetail";
import Activiteiten from "./Activiteiten";

class App extends Component {

    constructor() {
        super();
        this.state = {
            dossiers: {},
            employees: {}
        }
    }

    componentDidMount() {
        this.setState({ dossiers: dossierSamples });
        this.setState({ employees: employeeSamples });
    }

    render() {
        return (
            <Container>
                <BrowserRouter>
                    <React.Fragment>
                        <Navbar />
                        <Switch>
                            <Route path="/dashboard" component={Dashboard} />
                            <Route path="/klanten" component={Klanten} />
                            <Route path="/dossiers/new" component={NewDossier} />
                            <Route path="/dossiers/:dossierId" component={DossierDetail} />
                            <Route path="/dossiers" render={() => <Dossiers dossierlist={this.state.dossiers} />} />
                            <Route exact path="/medewerkers" render={() => <Medewerkers employeelist={this.state.employees} />} />
                            <Route exact path="/medewerkers/:medewerkerId" component={MedewerkerDetail} />
                            <Route path="/activiteiten" component={Activiteiten} />
                        </Switch>
                    </React.Fragment>
                </BrowserRouter>
            </Container>
        );
    }
}

export default App;