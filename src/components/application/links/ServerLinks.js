import React from "react";
import LinkRow from "./LinkRow";
import ServerLinkRow from "./ServerLinkRow";

function ServerLinks() {
  const handleChange = () => {
    console.log("change");
  };

  return (
    <div className="server__links">
      <div className="applicationServer__links">
        <LinkRow name="Application Server" open>
          <ServerLinkRow header="Load Balancer:" handleChange={handleChange} />
          <ServerLinkRow header="Node 1:" handleChange={handleChange} />
          <ServerLinkRow header="Node 2:" handleChange={handleChange} />
          <ServerLinkRow header="Logs 2:" handleChange={handleChange} />
          <ServerLinkRow header="Health Page 1:" handleChange={handleChange} />
          <ServerLinkRow header="Health Page 2" handleChange={handleChange} />
          <ServerLinkRow header="Monitoring 1:" handleChange={handleChange} />
          <ServerLinkRow header="Monitoring 2:" handleChange={handleChange} />
        </LinkRow>
      </div>

      <LinkRow name="Database Server" open>
        <ServerLinkRow header="Failover URL:" handleChange={handleChange} />
        <ServerLinkRow header="User/Schema:" handleChange={handleChange} />
        <ServerLinkRow header="Node 1:" handleChange={handleChange} />
        <ServerLinkRow header="Node 2:" handleChange={handleChange} />
      </LinkRow>
    </div>
  );
}

export default ServerLinks;
