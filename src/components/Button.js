import React, { Component } from "react";
import styled, { css } from "styled-components";

const KindHollow = `
background-color: transparent !important;
border-color: #007aff;
color: #007aff;
`;

const KindBare = `
background-color: transparent !important;
border-color: transparent !important;
color: #007aff;
`;

const StyledButton = styled.button`
    display: inline-block;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
    font-weight: 600;
    padding: 6px 16px;
    background-color: #007aff;
    border: 2px solid #007aff;
    border-radius: 4px;
    width: fit-content;
    :hover {
        cursor: pointer;
    }
    :focus {
        outline: 0;
    }

    ${props => props.kind === "hollow" ? css`${KindHollow}` : ''}
    ${props => props.kind === "bare" ? css`${KindBare}` : ''}
`;

class Button extends Component {
    render() {
        return (
            <StyledButton type={this.props.type} kind={this.props.kind}>{this.props.label}</StyledButton>
        );
    }
}

export default Button;