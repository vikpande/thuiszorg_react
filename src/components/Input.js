import styled from "styled-components";

export default styled.input`
    padding: 7px 12px;
    background-color: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    font-size: 14px;
    line-height: 20px;
    height: auto;
    box-sizing: border-box;
    outline: none;
    ::placeholder {
        color: rgba(0, 0, 0, 0.2)
    }
    :hover {
        border-color: rgba(0, 0, 0, 0.3);
        ::placeholder {
            color: rgba(0, 0, 0, 0.4);
        }
    }
    :focus {
        border: 1px solid #007aff;
        box-shadow: 0px 0px 0px 1px #007aff;
        color: #000;
    }
`;
