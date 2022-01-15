import React from "react";
import ApplicationDetailHeader from "../ApplicationDetailHeader";
import FactoryOptions from "./FactoryOptions";

function FactoryManagement({plants, setPlants}) {
  return (
    <div className="factory__management">
      <ApplicationDetailHeader name="Factory Management" />
      <FactoryOptions plants={plants} setPlants={setPlants} />
    </div>
  );
}

export default FactoryManagement;
