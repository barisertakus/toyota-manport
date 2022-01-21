import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import LinkRow from "./LinkRow";
import ServerLinks from "./ServerLinks";

const LinkDetails = forwardRef(({ plants }, ref) => {
  const [countries, setCountries] = useState([]);
  const [links, setLinks] = useState([]);

  const serverLinks = {
    loadBalancer: "",
    appNode1: "",
    appNode2: "",
    logs1: "",
    logs2: "",
    healthPage1: "",
    healthPage2: "",
    monitoring1: "",
    monitoring2: "",
    failoverUrl: "",
    userSchema: "",
    dbNode1: "",
    dbNode2: "",
    serverType: "",
    country: "",
  };

  const handleChange = (event, type, country) => {
    setLinks(
      links.map((link) =>
        link.country === country && link.serverType === type
          ? { ...link, [event.target.name]: event.target.value }
          : link
      )
    );
  };

  const getServerList = (type, country) => {
    return links.find(
      (link) => link.country === country && link.serverType === type
    );
  };

  useEffect(() => {
    const tempLinks = [];
    countries.forEach((country) => {
      const linksFound = links.filter((link) => link.country === country);
      if (linksFound[0]?.logs1 === undefined) {
        tempLinks.push(
          { ...serverLinks, serverType: "Production", country: country },
          { ...serverLinks, serverType: "Test", country: country }
        );
      } else {
        tempLinks.push(...linksFound);
      }
    });
    setLinks(tempLinks);
  }, [countries]);

  useEffect(() => {
    setCountries(
      plants.filter((plant) => plant.alive).map((plant) => plant.country)
    );
  }, [plants]);

  useImperativeHandle(ref, () => ({
    links: links,
  }));

  return (
    <div className="link__details">
      <LinkRow name="Node Specific Links">
        {countries.map((country, i) => (
          <div key={i}>
            <LinkRow name={country}>
              <LinkRow name="Production">
                <ServerLinks
                  type="Production"
                  country={country}
                  handleServers={handleChange}
                  serverLinks={
                    getServerList("Production", country) || serverLinks
                  }
                />
              </LinkRow>
              <LinkRow name="Test">
                <ServerLinks
                  type="Test"
                  country={country}
                  handleServers={handleChange}
                  serverLinks={getServerList("Test", country) || serverLinks}
                />
              </LinkRow>
            </LinkRow>
          </div>
        ))}
      </LinkRow>
    </div>
  );
})

export default LinkDetails;
