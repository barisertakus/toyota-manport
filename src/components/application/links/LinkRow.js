import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse } from "@mui/material";
import React, { useState } from "react";

function LinkRow({ name, children, open }) {
  const [collapseIn, setCollapseIn] = useState(open || false);

  const toggleCollapse = () => {
    setCollapseIn((collapseIn) => !collapseIn);
  };

  console.log(name, "calisti");

  return (
    <div className="link__row">
      <h2 className="link__header" onClick={toggleCollapse}>{name}</h2>
      <div className="link__expand">
        <hr />
        {collapseIn ? <ExpandMore /> : <ExpandLess />}
      </div>
      <Collapse in={collapseIn}>{children}</Collapse>
    </div>
  );
}

export default LinkRow;
