import React, { useState } from "react";
import { HeaderStyled } from "./header.styled";
import { TogglerButton } from "../buttons/buttons";
import NavMenu from "./NavMenu";

function Header() {
  const [nav, setNav] = useState(false);

  return (
    <HeaderStyled>
      <p>PubaAPP</p>
      <TogglerButton
        icon="M"
        onChangeMenu={() => {
          setNav(!nav);
        }}
      />
      {nav ? <NavMenu /> : ''}
    </HeaderStyled>
  );
}

export default Header;
