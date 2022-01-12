import { Button } from "@mui/material";
import Header from "components/core/Header";
import React from "react";
import { Link } from "react-router-dom";

function AppManagementHeader() {
  return (
    <Header>
      <div className="header__buttons">
        <div className="header__button">
          <Link to="management/create">
            <Button variant="contained" color="primary">
              Add New App
            </Button>
          </Link>
        </div>
        <div className="header__button">
          <Link to="management/plants">
            <Button variant="contained">Plant Management</Button>
          </Link>
        </div>
      </div>
    </Header>
  );
}

export default AppManagementHeader;
