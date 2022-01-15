import ApplicationHeader from "components/application/ApplicationHeader";
import ApplicationForm from "components/application/ApplicationForm";
import "styles/Application.css";
import React, { useState } from "react";
import FactoryManagement from "components/application/factoryManagement/FactoryManagement";
import IssueManagement from "components/application/issueManagement/IssueManagement";

function CreateApplication() {
  const [selectedPlants, setSelectedPlants] = useState([]);
  const [issues, setIssues] = useState([]);

  return (
    <div>
      <ApplicationHeader />
      <ApplicationForm />
      <FactoryManagement selectedPlants={selectedPlants} setSelectedPlants={setSelectedPlants} />
      <IssueManagement issues={issues} setIssues={setIssues} />
    </div>
  );
}

export default CreateApplication;
