import React, { Component } from "react";
import styled, { css } from "styled-components";

const Grid = styled.div`
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    img:first-child {
        margin-left: 0px;
    }
    img {
        box-sizing: border-box;
        margin-left: ${props => props.small ? css`${"-32px"}` : '-12px'};
        border-radius: 50%;
        border: 4px solid #f2f2f2;
        height: ${props => props.size || "40px"};
    }
    p {
        margin-left: 8px;
    }
`;

class Assignees extends Component {
    render() {
        return (
            <Grid size={this.props.size}>
                <img alt="avatar" src="../../images/user-account.svg" />
                <img alt="avatar" src="../../images/user-account.svg" />
                <img alt="avatar" src="../../images/user-account.svg" />
            </Grid>
        );
    }
}

export default Assignees;