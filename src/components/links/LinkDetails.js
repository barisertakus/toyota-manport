import { selectDisabled } from "features/applicationSlice";
import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { useSelector } from "react-redux";
import LinkRow from "./LinkRow";
import ServerLinks from "./ServerLinks";

const LinkDetails = forwardRef(({ plants, ...props }, ref) => {
  const [countries, setCountries] = useState([]);
  const [links, setLinks] = useState([]);

  const disabled = useSelector(selectDisabled);

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
          { ...serverLinks, serverType: "PRODUCTION", country: country },
          { ...serverLinks, serverType: "TEST", country: country }
        );
      } else {
        tempLinks.push(...linksFound);
      }
    });
    setLinks(tempLinks);
    // eslint-disable-next-line
  }, [countries]);

  useEffect(() => {
    setCountries(
      plants.filter((plant) => plant.alive).map((plant) => plant.country)
    );
  }, [plants]);

  //TODO LİNK SET RETRY
  useEffect(()=> {
    if(props.links)
      setLinks(props.links)
  },[props.links])

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
                  type="PRODUCTION"
                  country={country}
                  handleServers={handleChange}
                  serverLinks={
                    getServerList("PRODUCTION", country) || serverLinks
                  }
                  disabled={disabled}
                />
              </LinkRow>
              <LinkRow name="Test">
                <ServerLinks
                  type="TEST"
                  country={country}
                  handleServers={handleChange}
                  serverLinks={getServerList("TEST", country) || serverLinks}
                  disabled={disabled}
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
