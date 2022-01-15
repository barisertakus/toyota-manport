import React from "react";
import ApplicationDetailHeader from "../ApplicationDetailHeader";
import FactoryOptions from "./FactoryOptions";

function FactoryManagement({selectedPlants, setSelectedPlants}) {
  return (
    <div className="factory__management">
      <ApplicationDetailHeader name="Factory Management" />
      <FactoryOptions selectedPlants={selectedPlants} setSelectedPlants={setSelectedPlants} />
    </div>
  );
}

export default FactoryManagement;
