import { ExpandMore } from "@mui/icons-material";
import React from "react";

function ApplicationDetailHeader({name}) {
  return (
    <div>
      <h1>{name}</h1>
      <div className="link__expand">
        <hr />
        <ExpandMore />
      </div>
    </div>
  );
}

export default ApplicationDetailHeader;
