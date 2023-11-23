import styled from "styled-components";

export const DashboardStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    align-items: center;
`;

export const DashboardSectionStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FormItemStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
    background-color: #ededed;
    border-radius: 0.4rem;
    div:last-of-type {
        border-bottom: none;
        margin-bottom: 1rem;
    }
    >input {
        margin-bottom: 1rem;
    }
`;

export const DataAreaStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-height: 2rem;
    border-bottom: 1px solid #578758;
    padding: 0 1rem;
    label {
        font-weight: bold;
        font-size: 0.7rem;
    }
    p {
        font-size: 1rem;
    }
`;
