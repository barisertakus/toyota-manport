import { Collapse } from "@mui/material";
import React, { useState } from "react";
import "styles/Links.css";
import ApplicationDetailHeader from "components/application/ApplicationDetailHeader";
import LinkDetails from "./LinkDetails";

function ApplicationLinks({ plants, linksRef }) {
  const [collapseIn, setCollapseIn] = useState(false);

  const toggleCollapse = () => {
    setCollapseIn((collapseIn) => !collapseIn);
  };

  return (
    <div className="links">
      <ApplicationDetailHeader name="Links" handleClick={toggleCollapse} open={collapseIn} />
      <Collapse in={collapseIn}>
        <LinkDetails plants={plants} ref={linksRef} />
      </Collapse>
    </div>
  );
}

export default ApplicationLinks;
