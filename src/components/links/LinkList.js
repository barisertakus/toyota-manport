import { CircularProgress } from "@mui/material";
import LinkRow from "components/application/links/LinkRow";
import ServerLinks from "components/application/links/ServerLinks";
import React, { useEffect, useState } from "react";
import applicationService from "service/applicationService";

function LinkList() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    applicationService
      .getApplications()
      .then((response) => {
        setApplications(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const getProdLinks = (links) => {
    return links.find((link) => link.serverType === "PRODUCTION");
  };

  const getTestLinks = (links) => {
    return links.find((link) => link.serverType === "TEST");
  };

  return loading ? (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress />
    </div>
  ) : (
    <div className="link__details" style={{ marginRight: 20 }}>
      <LinkRow name="Application Links" open>
        {applications.map((application) => {
          const { id, shortName, applicationPlants } = application;
          return (
            <LinkRow key={id} name={shortName} open>
              {applicationPlants.map((applicationPlant, i) => {
                const { links, plant } = applicationPlant;
                const prodLinks = getProdLinks(links);
                const testLinks = getTestLinks(links);
                return (
                  <LinkRow name={plant.country} key={i}>
                    <LinkRow name="Production">
                      <ServerLinks
                        type="Production"
                        serverLinks={prodLinks || []}
                        disabled
                      />
                    </LinkRow>
                    <LinkRow name="Test">
                      <ServerLinks
                        type="Test"
                        serverLinks={testLinks || []}
                        disabled
                      />
                    </LinkRow>
                  </LinkRow>
                );
              })}
            </LinkRow>
          );
        })}
      </LinkRow>
    </div>
  );
}

export default LinkList;
