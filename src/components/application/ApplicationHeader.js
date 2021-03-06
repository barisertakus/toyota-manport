import { Button } from "@mui/material";
import Header from "components/core/Header/Header";
import React from "react";

function ApplicationHeader({handleSave}) {
  return (
    <Header>
      <div className="header__button blue__button">
        <Button
          // disabled={disabled}
          onClick={handleSave}
          variant="contained"
        >
          Add New App {/* Edit New App */}
        </Button>
      </div>
    </Header>
  );
}

export default ApplicationHeader;
