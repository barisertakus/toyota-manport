import { ArrowDropDown } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import ApplicationDropdown from "./ApplicationDropdown";
import DashboardBox from "./DashboardBox";

function ApplicationBox({ application }) {
  const [appColored, setAppColored] = useState({
    applicationPlants: [],
    color: "green",
  });

  const renderHeader = (color) => (
    <div className="application__header" style={{ borderColor: color }}>
      <h3>{application.shortName}</h3>
      <ArrowDropDown style={{ color: color, borderColor: color }} />
    </div>
  );

  const getColorNumber = (color) => {
    return color === "red" ? 3 : color === "yellow" ? 2 : 1;
  };

  const isColorHigher = (newColor, oldColor) => {
    return getColorNumber(newColor) > getColorNumber(oldColor);
  };

  const getColor = (impactType) => {
    return impactType === "High"
      ? "red"
      : impactType === "Medium"
      ? "yellow"
      : impactType === "Low"
      ? "green"
      : "";
  };

  const findMax = () => {
    let maxPlant = "green";
    const applicationPlants = application.applicationPlants.map(
      (applicationPlant) => {
        let maxIssue = "green";
        const issues = applicationPlant.issues.map((issue) => {
          const color = getColor(issue.impactType);

          if (isColorHigher(color, maxIssue)) maxIssue = color;
          return { ...issue, color: color };
        });

        if (isColorHigher(maxIssue, maxPlant)) maxPlant = maxIssue;
        return { ...applicationPlant, issues, color: maxIssue };
      }
    );

    return { ...application, applicationPlants, color: maxPlant };
  };

  useEffect(() => {
    const app = findMax();
    setAppColored(app);
    //eslint-disable-next-line
  }, [application]);

  return (
    <ApplicationDropdown title={renderHeader(appColored.color)}>
      <div className="application__plants box__wrapper">
        {appColored.applicationPlants.map((applicationPlant, i) => {
          const { plant, issues } = applicationPlant;
          const { country, servers } = plant;
          return (
            <DashboardBox
              boxClass="plant"
              color={applicationPlant.color}
              header={country}
              key={i}
            >
              <div className="plant__servers box__wrapper">
                {servers.map((server, i) => {
                  const { name } = server;
                  return (
                    <DashboardBox
                      boxClass="server"
                      header={name}
                      color={applicationPlant.color}
                      key={i}
                    >
                      <div className="server__issues box__wrapper">
                        {issues.map((issue, i) => {
                          return (
                            <DashboardBox
                              boxClass="issue"
                              header={issue.issueType}
                              key={i}
                              color={issue.color}
                              style={{ backgroundColor: issue.color }}
                            />
                          );
                        })}
                      </div>
                    </DashboardBox>
                  );
                })}
              </div>
            </DashboardBox>
          );
        })}
      </div>
    </ApplicationDropdown>
  );
}

export default ApplicationBox;
