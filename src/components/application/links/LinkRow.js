import { ExpandMore } from "@mui/icons-material";
import React from "react";

function LinkRow({ name, children }) {
  return (
    <div className="link__row">
      <h2>{name}</h2>
      <div className="link__expand">
        <hr />
        <ExpandMore />
      </div>
      {children}
    </div>
  );
}

export default LinkRow;
