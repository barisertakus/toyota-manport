import { Collapse } from "@mui/material";
import React, { useState } from "react";

function ApplicationDropdown({ title, children }) {
  const [collapseIn, setCollapseIn] = useState(true);

  const toggleCollapse = () => {
    setCollapseIn((collapseIn) => !collapseIn);
  };

  return (
    <div className="dropdown__item">
      <div className="dropdown__header" onClick={toggleCollapse}>
        {title}
      </div>
      <Collapse in={collapseIn}>{children}</Collapse>
    </div>
  );
}

export default ApplicationDropdown;
