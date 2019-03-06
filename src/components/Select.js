import styled from "styled-components";

export default styled.select`
    appearance: none;
    -webkit-appearance: none;
    padding: 0 40px 0 16px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    font-size: 14px;
    line-height: 20px;
    height: 36px;
    width: auto;
    box-shadow: none;
    background-image: none;
    box-sizing: border-box;
    outline: none;
    background-image: url("../../images/arrow-down.svg");
    background-repeat: no-repeat;
    background-size: 16px 16px;
    background-position: right 16px center;
    :focus {
        outline: none;
        color: #000;
    }
    :hover {
        border-color: rgba(0, 0, 0, 0.3);
        cursor: pointer;
    }
`;
