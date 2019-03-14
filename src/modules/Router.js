import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../modules/Login";
import ForgotPassword from "../modules/ForgotPassword";
import App from "./App";
import NotFound from "../modules/NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/dashboard" component={App} />
      <Route path="/klanten" component={App} />
      <Route path="/dossiers" component={App} />
      <Route path="/dossiers/:dossierId" component={App} />
      <Route path="/create-dossier" component={App} />
      <Route path="/medewerkers" component={App} />
      <Route path="/medewerkers/:medewerkerId" component={App} />
      <Route path="/activiteiten" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
