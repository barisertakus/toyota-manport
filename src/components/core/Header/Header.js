import React from "react";
import { useLocation } from "react-router-dom";
import "styles/Header.css";
import HeaderRow from "./HeaderRow";
function Header(props) {
  const { pathname } = useLocation();
  return (
    <div className="header">
      <div className="header__options">
        <HeaderRow url="/" header="Home" pathname={pathname} />
        <HeaderRow url="/dashboard" header="Dashboard" pathname={pathname} />
        <HeaderRow url="/management" header="Management" pathname={pathname} />
        <HeaderRow url="/issues" header="Issues" pathname={pathname} />
        <HeaderRow url="/links" header="Links" pathname={pathname} />
      </div>
      <div>{props.children}</div>
    </div>
  );
}

export default Header;
