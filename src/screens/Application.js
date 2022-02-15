import ApplicationDetails from "components/application/ApplicationDetails";
import ApplicationHeader from "components/application/ApplicationHeader";
import FactoryManagement from "components/application/factoryManagement/FactoryManagement";
import IssueManagement from "components/application/issueManagement/IssueManagement";
import ApplicationLinks from "components/links/ApplicationLinks";
import MiddlewareManagement from "components/application/middlewareManagement/MiddlewareManagement";
import React, { createRef, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import applicationService from "service/applicationService";
import "styles/Application.css";
import { setDisabled } from "features/applicationSlice";
import { useDispatch } from "react-redux";

function Application() {
  const location = useLocation();
  const dispatch = useDispatch();

  const [application, setApplication] = useState();
  const [links, setLinks] = useState();
  const [editPlants, setEditPlants] = useState([]);

  const [plants, setPlants] = useState([]);
  const [issues, setIssues] = useState([]);
  const [infrastructures, setInfrastructures] = useState([]);

  const applicationDetailsRef = createRef();
  const linksRef = createRef();

  const history = useHistory();

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

  // const check

  const handleSave = () => {
    const plantsSave = plants.filter((plant) => plant.alive);

    applicationService
      .addApplication({
        ...applicationDetailsRef.current.application,
        plants: plantsSave,
        issues: issues,
        links: linksRef.current.links,
        infrastructures: infrastructures,
      })
      .then((response) => {
        console.log(response);
        history.push("/management");
      });
  };

  const getShortNameFromLocation = () => {
    const path = location.pathname.split("/");
    return path[2];
  };

  const clearBlanks = (obj) => {
    return Object.entries(obj).reduce(
      (a, [k, v]) => (v ? ((a[k] = v), a) : a),
      {}
    );
  };

  const addOrderNo = (arr) => {
    return arr.map((arr, i) => ({ ...arr, orderNo: i + 1 }));
  };

  const checkDisabled = () => {
    if (location.state?.edit) dispatch(setDisabled(false));
    else dispatch(setDisabled(true));
  };

  useEffect(() => {
    const shortName = getShortNameFromLocation();
    if (shortName === "create") {
      dispatch(setDisabled(false));
    } else {
      checkDisabled();
      applicationService
        .getApplicationByShortName(shortName)
        .then((response) => {
          const app = clearBlanks(response.data);
          console.log(app);
          setApplication(app);
          setEditPlants(app.plants);
          setLinks(app.links);
          setIssues(addOrderNo(app.issues));
          setInfrastructures(addOrderNo(app.infrastructures));
        })
        .catch((error) => console.log(error));
    }
  }, []);

  return (
    <div>
      <ApplicationHeader handleSave={handleSave} />
      <ApplicationDetails
        applicationDetailsRef={applicationDetailsRef}
        application={application}
      />
      <ApplicationLinks plants={plants} linksRef={linksRef} links={links} />
      <FactoryManagement
        plants={plants}
        setPlants={setPlants}
        getIssuesInCountry={getIssuesInCountry}
        deleteIssues={deleteIssues}
        editPlants={editPlants}
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
