import Header from "components/core/Header/Header";
import Applications from "components/dashboard/Applications";
import React from "react";

function Dashboard() {

  return (
    <div className="dashboard">
      <Header />
      <h1 className="header__name">Dashboard</h1>
      <Applications />
    </div>
  );
}

export default Dashboard;
