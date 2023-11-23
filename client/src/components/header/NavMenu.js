import React from "react";
import { Link } from "react-router-dom";
import { NavMenuStyled } from "./Header.styled.js";

function NavMenu() {
    return (
        <NavMenuStyled>
            <Link to="/register">Registro</Link>
            <Link to="/dashboard">Dashboard</Link>
        </NavMenuStyled>
    )
}

export default NavMenu;