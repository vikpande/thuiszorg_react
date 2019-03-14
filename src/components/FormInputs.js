import styled from "styled-components";

export default styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(min-content, max-content);
    grid-row-gap: 16px;
    align-items: start;
    background-color: #ffffff;
    padding: 32px;
`;
