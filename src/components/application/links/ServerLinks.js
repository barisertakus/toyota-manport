import React from "react";
import LinkRow from "./LinkRow";
import ServerLinkRow from "./ServerLinkRow";

function ServerLinks({ type, country, handleServers, serverLinks, disabled }) {
  const handleChange = (e) => {
    handleServers(e, type, country);
  };

  return (
    <div className="server__links">
      <div className="applicationServer__links">
        <LinkRow name="Application Server" open>
          <ServerLinkRow
            header="Load Balancer:"
            name="loadBalancer"
            value={serverLinks.loadBalancer}
            handleChange={handleChange}
            disabled={disabled}
          />
          <ServerLinkRow
            header="Node 1:"
            name="appNode1"
            value={serverLinks.appNode1}
            handleChange={handleChange}
            disabled={disabled}
          />
          <ServerLinkRow
            header="Node 2:"
            name="appNode2"
            value={serverLinks.appNode2}
            handleChange={handleChange}
            disabled={disabled}
          />
          <ServerLinkRow
            header="Logs 1:"
            name="logs1"
            value={serverLinks.logs1}
            handleChange={handleChange}
            disabled={disabled}
          />
          <ServerLinkRow
            header="Logs 2:"
            name="logs2"
            value={serverLinks.logs2}
            handleChange={handleChange}
            disabled={disabled}
          />
          <ServerLinkRow
            header="Health Page 1:"
            name="healthPage1"
            value={serverLinks.healthPage1}
            handleChange={handleChange}
            disabled={disabled}
          />
          <ServerLinkRow
            header="Health Page 2"
            name="healthPage2"
            value={serverLinks.healthPage2}
            handleChange={handleChange}
            disabled={disabled}
          />
          <ServerLinkRow
            header="Monitoring 1:"
            name="monitoring1"
            value={serverLinks.monitoring1}
            handleChange={handleChange}
            disabled={disabled}
          />
          <ServerLinkRow
            header="Monitoring 2:"
            name="monitoring2"
            value={serverLinks.monitoring2}
            handleChange={handleChange}
            disabled={disabled}
          />
        </LinkRow>
      </div>

      <LinkRow name="Database Server" open>
        <ServerLinkRow
          header="Failover URL:"
          name="failoverUrl"
          value={serverLinks.failoverUrl}
          handleChange={handleChange}
          disabled={disabled}
        />
        <ServerLinkRow
          header="User/Schema:"
          name="userSchema"
          value={serverLinks.userSchema}
          handleChange={handleChange}
          disabled={disabled}
        />
        <ServerLinkRow
          header="Node 1:"
          name="dbNode1"
          value={serverLinks.dbNode1}
          handleChange={handleChange}
          disabled={disabled}
        />
        <ServerLinkRow
          header="Node 2:"
          name="dbNode2"
          value={serverLinks.dbNode2}
          handleChange={handleChange}
          disabled={disabled}
        />
      </LinkRow>
    </div>
  );
}

export default ServerLinks;
