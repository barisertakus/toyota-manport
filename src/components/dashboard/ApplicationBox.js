import { ArrowDropDown } from "@mui/icons-material";
import React from "react";
import ApplicationDropdown from "./ApplicationDropdown";
import DashboardBox from "./DashboardBox";

function ApplicationBox({ uygulama }) {
  const color = "black";

  const renderHeader = (
    <div className="application__header" style={{ borderColor: color }}>
      <h3>{uygulama.shortName}</h3>
      <ArrowDropDown style={{ color: color, borderColor: color }} />
    </div>
  );

  const getColor = (impactType) => {
    return impactType === "High"
      ? "red"
      : impactType === "Medium"
      ? "yellow"
      : impactType === "Low"
      ? "green"
      : "";
  };

  return (
    <ApplicationDropdown title={renderHeader}>
      <div className="application__plants box__wrapper">
        {uygulama.applicationPlants.map((applicationPlant, i) => {
          const { plant, issues } = applicationPlant;
          const { country, servers } = plant;
          return (
            <DashboardBox boxClass="plant" color="black" header={country} key={i}>
              <div className="plant__servers box__wrapper">
                {servers.map((server, i) => {
                  const { name } = server;
                  return (
                    <DashboardBox boxClass="server" header={name} color="black" key={i}>
                      <div className="server__issues box__wrapper">
                        {issues.map((issue, i) => {
                          const issueColor = getColor(issue.impactType);
                          return (
                            <DashboardBox
                              boxClass="issue"
                              header={issue.issueType}
                              key={i}
                              color={issueColor}
                              style={{ backgroundColor: issueColor }}
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
