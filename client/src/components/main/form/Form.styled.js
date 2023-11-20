import styled from 'styled-components';

export const FormStyled = styled.form`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto;
    align-items: center;
    justify-items: center;
    gap: 1rem;
    /* flex-wrap: wrap; */
    justify-content: space-between;
    margin: 1rem;
    width: 80%;
`;

export const FormSectionStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    /* max-width: 400px; */
`;