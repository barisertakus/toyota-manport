import ApplicationForm from "components/application/ApplicationForm";
import ApplicationHeader from "components/application/ApplicationHeader";
import FactoryManagement from "components/application/factoryManagement/FactoryManagement";
import IssueManagement from "components/application/issueManagement/IssueManagement";
import MiddlewareManagement from "components/application/middlewareManagement/MiddlewareManagement";
import React, { useState } from "react";
import "styles/Application.css";

function Application() {
  const [plants, setPlants] = useState([]);
  const [issues, setIssues] = useState([]);
  const [infrastructures, setInfrastructures] = useState([]);

  const getIssuesInCountry = (country) => {
    const contains = issues.filter((issue) => issue.country === country);
    return contains;
  };

  const deleteIssues = (issueList) => {
    setIssues(
      issues.filter(
        // if issue is in the removeList, delete it
        (issue) => !issueList.some((remove) => remove.id === issue.id)
      )
    );
  };

  return (
    <div>
      <ApplicationHeader />
      <ApplicationForm />
      <FactoryManagement
        plants={plants}
        setPlants={setPlants}
        getIssuesInCountry={getIssuesInCountry}
        deleteIssues={deleteIssues}
      />
      <IssueManagement issues={issues} setIssues={setIssues} plants={plants} />
      <MiddlewareManagement
        infrastractures={infrastructures}
        setInfrastructures={setInfrastructures}
      />
    </div>
  );
}

export default Application;
