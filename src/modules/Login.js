import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogoLarge from "../components/LogoLarge";
import Block from "../components/Block";
import LoginForm from "../components/LoginForm";
import Input from "../components/Input";
import HorizontalGroup from "../components/HorizontalGroup";
import Button from "../components/Button";

class Login extends Component {

  render() {
    return (
      <React.Fragment>
        <LogoLarge />
        <Block>
          <h1>Inloggen</h1>
          <LoginForm action="/dashboard">
            <Input
              type="email"
              required
              placeholder="E-mailadres"
            /><Input
              type="password"
              required
              placeholder="Wachtwoord"
            />
            <HorizontalGroup>
              <Link to="/forgot-password">Wachtwoord vergeten?</Link>
              <Button label="Inloggen" type="submit" />
            </HorizontalGroup>
          </LoginForm>
          <p>Als je nog geen Babythuiszorg account hebt kan je informatie aanvragen bij je manager.</p>
        </Block>
      </React.Fragment>
    );
  }
}

export default Login;