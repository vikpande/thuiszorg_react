import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const EmployeeGrid = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 8px;
    align-items: center;
`;

class Employee extends Component {
    render() {
        return (
            <NavLink to="/medewerkers/123456" className="table-link">
                <EmployeeGrid>
                    <img alt="avatar" src="../../images/user-account.svg" height="24px" />Anneloes de Hast
                </EmployeeGrid>
            </NavLink>
        );
    }
}

export default Employee;