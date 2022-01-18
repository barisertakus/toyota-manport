import { ExpandMore } from "@mui/icons-material";
import React from "react";

function LinkRow({name}) {
  return (
    <>
      <h2>{name}</h2>
      <div className="link__expand">
        <hr />
        <ExpandMore />
      </div>
    </>
  );
}

export default LinkRow;
