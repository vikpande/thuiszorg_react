import styled from "styled-components";

export default styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: min-content;
    grid-column-gap: 80px;

    max-width: 1200px;
    margin: 0 auto;

    padding-bottom: 40px;

    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    :last-child {
        border-bottom: 0px;
    }
`;
