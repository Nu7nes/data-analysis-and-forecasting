import styled from "styled-components";

export const UpdateModalStyled = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    width: 90vw;
    padding: 0.5rem;
    background-color: #578758;
    color: #fff;
    border-radius: 0.4rem;
    > form {
        display: flex;
        flex-direction: column;
    }
`;
