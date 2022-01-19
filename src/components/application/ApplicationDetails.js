import { Collapse } from "@mui/material";
import React, { useState } from "react";
import ApplicationDetailHeader from "./ApplicationDetailHeader";
import ApplicationForm from "./ApplicationForm";

function ApplicationDetails() {
  const [collapseIn, setCollapseIn] = useState(true);

  const toggleCollapse = () => {
    setCollapseIn((collapseIn) => !collapseIn);
  };

  return (
    <div className="application__form">
      <ApplicationDetailHeader name="Details" handleClick={toggleCollapse} />
      <Collapse in={collapseIn}>
        <ApplicationForm />
      </Collapse>
    </div>
  );
}

export default ApplicationDetails;
