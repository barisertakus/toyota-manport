import React from "react";
import { Link } from "react-router-dom";

function HeaderRow({ url, header, pathname }) {
  return (
    <Link to={url}>
      <div className={`${pathname === url ? "header__option active" : 'header__option'}`}>
        <h3>{header}</h3>
      </div>
    </Link>
  );
}

export default HeaderRow;
