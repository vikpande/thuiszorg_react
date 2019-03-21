import styled from "styled-components";

export default styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-auto-flow: row;
    grid-row-gap: ${props => props.gap || "8px"};
    align-items: center;
    justify-items: stretch;
`;