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

// Here we need to get a employee number and look if this exist in our database. 
// If not show a empty employee (placeholder employee), 
// if it does exist show avatar image with the full employee name.

class Employee extends Component {
    render() {
        return (
            <NavLink to="/medewerkers/123456" className="table-link">
                <EmployeeGrid>
                    <img alt="avatar" src="../../images/user-account.svg" height="24px" />{this.props.employeeName}
                </EmployeeGrid>
            </NavLink>
        );
    }
}

export default Employee;