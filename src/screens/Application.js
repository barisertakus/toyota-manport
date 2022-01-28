import { Button } from "@mui/material";
import ApplicationDetails from "components/application/ApplicationDetails";
import ApplicationHeader from "components/application/ApplicationHeader";
import FactoryManagement from "components/application/factoryManagement/FactoryManagement";
import IssueManagement from "components/application/issueManagement/IssueManagement";
import Links from "components/application/links/Links";
import MiddlewareManagement from "components/application/middlewareManagement/MiddlewareManagement";
import React, { createRef, useState } from "react";
import "styles/Application.css";
import api from "helpers/api";
import applicationService from "service/applicationService";

function Application() {
  const [plants, setPlants] = useState([]);
  const [issues, setIssues] = useState([]);
  const [infrastructures, setInfrastructures] = useState([]);

  const applicationDetailsRef = createRef();
  const linksRef = createRef();

  const getIssuesInCountry = (country) => {
    const contains = issues.filter((issue) => issue.country === country);
    return contains;
  };

  const deleteIssues = (issueList) => {
    setIssues(
      issues
        .filter(
          // if issue is in the removeList, delete it
          (issue) =>
            !issueList.some((remove) => remove.orderNo === issue.orderNo)
        )
        .map((issue, i) => ({ ...issue, orderNo: i + 1 }))
    );
  };

  const handleSave = () => {
    const plantsSave = plants.filter((plant) => plant.alive);

    console.log({
      ...applicationDetailsRef.current.application,
      plants: plantsSave,
      issues: issues,
      links: linksRef.current.links,
    });

    applicationService
      .addApplication("api/application/save", {
        ...applicationDetailsRef.current.application,
        plants: plantsSave,
        issues: issues,
        links: linksRef.current.links,
        infrastructures: infrastructures,
      })
      .then((response) => console.log(response));
  };

  return (
    <div>
      <ApplicationHeader handleSave={handleSave} />
      <ApplicationDetails applicationDetailsRef={applicationDetailsRef} />
      <Links plants={plants} linksRef={linksRef} />
      <FactoryManagement
        plants={plants}
        setPlants={setPlants}
        getIssuesInCountry={getIssuesInCountry}
        deleteIssues={deleteIssues}
      />
      <IssueManagement issues={issues} setIssues={setIssues} plants={plants} />
      <MiddlewareManagement
        infrastructures={infrastructures}
        setInfrastructures={setInfrastructures}
        plants={plants}
      />
    </div>
  );
}

export default Application;
