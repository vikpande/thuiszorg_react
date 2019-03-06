import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogoLarge from "../components/LogoLarge";
import Block from "../components/Block";
import ForgotPasswordForm from "../components/ForgotPasswordForm";
import Input from "../components/Input";
import HorizontalGroup from "../components/HorizontalGroup";
import Button from "../components/Button";

class ForgotPassword extends Component {

    render() {
        return (
            <React.Fragment>
                <LogoLarge />
                <Block>
                    <h1>Wachtwoord herstellen</h1>
                    <p>Verstuur een code naar je email adres om je wachtwoord te kunnen herstellen.</p>
                    <ForgotPasswordForm>
                        <Input
                            type="email"
                            required
                            placeholder="E-mailadres"
                        />
                        <HorizontalGroup>
                            <Link to="/login">Inloggen</Link>
                            <Button label="Verstuur code" type="submit" />
                        </HorizontalGroup>
                    </ForgotPasswordForm>
                </Block>
            </React.Fragment>
        );
    }
}

export default ForgotPassword;