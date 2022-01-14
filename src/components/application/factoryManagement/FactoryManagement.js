import React from "react";
import ApplicationDetailHeader from "../ApplicationDetailHeader";
import FactoryOptions from "./FactoryOptions";

function FactoryManagement() {
  return (
    <div className="factory__management">
      <ApplicationDetailHeader name="Factory Management" />
      <FactoryOptions />
    </div>
  );
}

export default FactoryManagement;
