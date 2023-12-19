import styled from "styled-components";

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    background-color: #578758;
    color: #fff;
    font-weight: 500;
    position: sticky;
    top: 0;
    z-index: 10;
`



export const NavMenuStyled = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
    padding: 1rem;
    box-sizing: border-box;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100vw;
    background-color: #578758;
`