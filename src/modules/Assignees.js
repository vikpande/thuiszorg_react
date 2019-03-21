import React, { Component } from "react";
import styled from "styled-components";

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-flow: column;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    align-items: center;
    justify-items: start;
    img:first-child {
        margin-left: 0px;
    }
    img {
        margin-left: -16px;
        border-radius: 50%;
        border: 4px solid #f2f2f2;
    }
    a {
        margin-left: 8px;
    }
`;

class Assignees extends Component {

    render() {
        return (
            <Grid>
                <img alt="avatar" src="../../images/user-account.svg" />
                <img alt="avatar" src="../../images/user-account.svg" />
                <img alt="avatar" src="../../images/user-account.svg" />
                <a>Aanpassen</a>
            </Grid>
        );
    }
}

export default Assignees;