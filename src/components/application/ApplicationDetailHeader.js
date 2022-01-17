import { ExpandMore } from "@mui/icons-material";
import React from "react";

function ApplicationDetailHeader({name, handleClick}) {

  const handleDivClick = () => {
    if(!!handleClick)
      handleClick();
  }

  return (
    <div style={!!handleClick ? {cursor: "pointer"} : null} onClick={handleDivClick}>
      <h1>{name}</h1>
      <div className="link__expand">
        <hr />
        <ExpandMore />
      </div>
    </div>
  );
}

export default ApplicationDetailHeader;
