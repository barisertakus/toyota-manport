import React from "react";
import LinkRow from "./LinkRow";
import ServerLinks from "./ServerLinks";

function LinkDetails({ plants }) {
  return (
    <div className="link__details">
      <LinkRow name="Node Specific Links">
        {plants.map((plant) => (
          <>
            <LinkRow name={plant.country}>
              <LinkRow name="Production">
                <ServerLinks />
              </LinkRow>
              <LinkRow name="Test">
                <ServerLinks />
              </LinkRow>
            </LinkRow>
          </>
        ))}
      </LinkRow>
    </div>
  );
}

export default LinkDetails;
