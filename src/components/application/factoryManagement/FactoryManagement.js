import { Collapse } from "@mui/material";
import React, { useState } from "react";
import ApplicationDetailHeader from "../ApplicationDetailHeader";
import FactoryOptions from "./FactoryOptions";

function FactoryManagement({
  plants,
  setPlants,
  getIssuesInCountry,
  deleteIssues,
}) {
  const [collapseIn, setCollapseIn] = useState(true);

  const toggleCollapse = () => {
    setCollapseIn((collapseIn) => !collapseIn);
  };

  return (
    <div className="factory__management">
      <ApplicationDetailHeader
        name="Factory Management"
        handleClick={toggleCollapse}
        open={collapseIn}
      />
      <Collapse in={collapseIn}>
        <FactoryOptions
          plants={plants}
          setPlants={setPlants}
          getIssuesInCountry={getIssuesInCountry}
          deleteIssues={deleteIssues}
        />
      </Collapse>
    </div>
  );
}

export default FactoryManagement;
