import ApplicationForm from "components/application/ApplicationForm";
import ApplicationHeader from "components/application/ApplicationHeader";
import FactoryManagement from "components/application/factoryManagement/FactoryManagement";
import IssueManagement from "components/application/issueManagement/IssueManagement";
import React, { useState } from "react";
import "styles/Application.css";

function CreateApplication() {
  const [plants, setPlants] = useState([]);
  const [issues, setIssues] = useState([]);

  return (
    <div>
      <ApplicationHeader />
      <ApplicationForm />
      <FactoryManagement plants={plants} setPlants={setPlants} />
      <IssueManagement plants={plants} issues={issues} setIssues={setIssues} />
    </div>
  );
}

export default CreateApplication;
