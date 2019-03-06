import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import LogoSmall from "../components/LogoSmall";

const NavigationBar = styled.nav`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    width: 100%;
    height: 60px;
    background-color: #003876;
    z-index: 999;

    padding: 0 24px;

    display: grid;
    grid-template-columns: auto auto 1fr auto;
    grid-template-rows: 1fr;
    grid-column-gap: 32px;
    align-items: center;

    .logoLink {
        height: 32px;
    }
`;

const NavLinks = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: 1fr;
    grid-column-gap: 24px;
    align-items: center;
    a {
        line-height: 20px;
        color: rgba(255, 255, 255, 0.5);
        font-weight: 500;
        :hover {
            color: rgba(255, 255, 255, 1);
        }
    }
    a.active {
        color: rgba(255, 255, 255, 1);
    }
`;

const LoggedInAs = styled.div`
    grid-column-end: -1;
    a {
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: 1fr;
        grid-column-gap: 16px;
        align-items: center;
        color: rgba(255, 255, 255, 0.5);
        height: max-content;
    }
    :hover a span {
        display: none;
    }
    :hover :before {
        content: 'Uitloggen';
        color: rgba(255, 255, 255, 1);
    }
`;

class Navbar extends Component {

    render() {
        return (
            <NavigationBar>
                <NavLink to="/dashboard" className="logoLink"><LogoSmall height="32" /></NavLink>
                <NavLinks>
                    <NavLink to="/dossiers" activeClassName="active">Dossiers</NavLink>
                    <NavLink to="/medewerkers" activeClassName="active">Medewerkers</NavLink>
                    <NavLink to="/activiteiten" activeClassName="active">Activiteiten</NavLink>
                </NavLinks>
                <LoggedInAs>
                    <a href="/">
                        <span>John Doe</span>
                        <img alt="avatar" src="../../images/user-account.svg" />
                    </a>
                </LoggedInAs>
            </NavigationBar>
        );
    }
}

export default Navbar;