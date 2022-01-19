import { ExpandLess, ExpandMore } from "@mui/icons-material";
import React from "react";

function ApplicationDetailHeader({name, handleClick, open}) {

  const handleDivClick = () => {
    if(!!handleClick)
      handleClick();
  }

  return (
    <div style={!!handleClick ? {cursor: "pointer"} : null} onClick={handleDivClick}>
      <h1>{name}</h1>
      <div className="link__expand">
        <hr />
        {open ? <ExpandMore /> : <ExpandLess />}
      </div>
    </div>
  );
}

export default ApplicationDetailHeader;
