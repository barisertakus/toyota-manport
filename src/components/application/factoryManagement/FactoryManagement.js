import React from "react";
import ApplicationDetailHeader from "../ApplicationDetailHeader";
import FactoryOptions from "./FactoryOptions";

function FactoryManagement({plants, setPlants, getIssuesInCountry, deleteIssues}) {
  return (
    <div className="factory__management">
      <ApplicationDetailHeader name="Factory Management" />
      <FactoryOptions plants={plants} setPlants={setPlants} getIssuesInCountry={getIssuesInCountry} deleteIssues={deleteIssues} />
    </div>
  );
}

export default FactoryManagement;
