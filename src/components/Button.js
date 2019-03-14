import React, { Component } from "react";
import styled, { css } from "styled-components";

const Secondary = `
background-color: #e9e9e9;
border-color: #e9e9e9;
color: #000000;
font-weight: 400;
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

    ${props => props.secondary ? css`${Secondary}` : ''}
`;

class Button extends Component {
    render() {
        return (
            <StyledButton {...this.props}>{this.props.label}</StyledButton>
        );
    }
}

export default Button;