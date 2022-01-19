import React, { useEffect, useState } from "react";
import LinkRow from "./LinkRow";
import ServerLinks from "./ServerLinks";

function LinkDetails({ plants }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(
      plants.filter((plant) => plant.alive).map((plant) => plant.country)
    );
  }, [plants]);

  return (
    <div className="link__details">
      <LinkRow name="Node Specific Links">
        {countries.map((country, i) => (
          <div key={i}>
            <LinkRow name={country}>
              <LinkRow name="Production">
                <ServerLinks />
              </LinkRow>
              <LinkRow name="Test">
                <ServerLinks />
              </LinkRow>
            </LinkRow>
          </div>
        ))}
      </LinkRow>
    </div>
  );
}

export default LinkDetails;
