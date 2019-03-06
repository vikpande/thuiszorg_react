import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Container from "../components/Container";
import Dashboard from "./Dashboard";
import Dossiers from "./Dossiers";
import Medewerkers from "./Medewerkers";
import Activiteiten from "./Activiteiten";

class App extends Component {
    render() {
        return (
            <Container>
                <BrowserRouter>
                    <React.Fragment>
                        <Navbar />
                        <Switch>
                            <Route exact path="/dashboard" component={Dashboard} />
                            <Route exact path="/dossiers" component={Dossiers} />
                            <Route exact path="/medewerkers" component={Medewerkers} />
                            <Route exact path="/activiteiten" component={Activiteiten} />
                        </Switch>
                    </React.Fragment>
                </BrowserRouter>
            </Container>
        );
    }
}

export default App;