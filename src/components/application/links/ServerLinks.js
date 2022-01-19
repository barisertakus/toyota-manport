import React from "react";
import LinkRow from "./LinkRow";
import ServerLinkRow from "./ServerLinkRow";

function ServerLinks() {
  return (
    <div className="server__links">
      <div className="applicationServer__links">
        <LinkRow name="Application Server" />
        <ServerLinkRow header="Load Balancer:" />
        <ServerLinkRow header="Node 1:" />
        <ServerLinkRow header="Node 2:" />
        <ServerLinkRow header="Logs 2:" />
        <ServerLinkRow header="Health Page 1:" />
        <ServerLinkRow header="Health Page 2" />
        <ServerLinkRow header="Monitoring 1:" />
        <ServerLinkRow header="Monitoring 2:" />
      </div>

      <LinkRow name="Database Server" />
      <ServerLinkRow header="Failover URL:" />
      <ServerLinkRow header="User/Schema:" />
      <ServerLinkRow header="Node 1:" />
      <ServerLinkRow header="Node 2:" />
    </div>
  );
}

export default ServerLinks;
