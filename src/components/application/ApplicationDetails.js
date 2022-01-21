import { Collapse } from "@mui/material";
import React, { useState } from "react";
import ApplicationDetailHeader from "./ApplicationDetailHeader";
import ApplicationForm from "./ApplicationForm";

function ApplicationDetails({ applicationDetailsRef }) {
  const [collapseIn, setCollapseIn] = useState(true);

  const toggleCollapse = () => {
    setCollapseIn((collapseIn) => !collapseIn);
  };

  return (
    <div className="application__form">
      <ApplicationDetailHeader
        name="Details"
        handleClick={toggleCollapse}
        open={collapseIn}
      />
      <Collapse in={collapseIn}>
        <ApplicationForm ref={applicationDetailsRef} />
      </Collapse>
    </div>
  );
}

export default ApplicationDetails;
