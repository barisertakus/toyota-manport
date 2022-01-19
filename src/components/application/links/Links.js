import { Collapse } from "@mui/material";
import React, { useState } from "react";
import "styles/Links.css";
import ApplicationDetailHeader from "../ApplicationDetailHeader";
import LinkDetails from "./LinkDetails";

function Links({ plants }) {
  const [collapseIn, setCollapseIn] = useState(false);

  const toggleCollapse = () => {
    setCollapseIn((collapseIn) => !collapseIn);
  };

  return (
    <div className="links">
      <ApplicationDetailHeader name="Links" handleClick={toggleCollapse} />
      <Collapse in={collapseIn}>
        <LinkDetails plants={plants} />
      </Collapse>
    </div>
  );
}

export default Links;
