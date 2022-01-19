import { ExpandMore } from "@mui/icons-material";
import { Checkbox, TextField } from "@mui/material";
import React, { useState } from "react";
import CustomSelect from "utils/CustomSelect";
import {
  backends,
  businessAreaTypes,
  databases,
  frontends,
  responsibleTeams,
} from "utils/Enums";

function ApplicationForm() {
  const [application, setApplication] = useState({
    shortName: "",
    releaseDate: "",
    responsible: "",
    backend: "",
    frontend: "",
    database: "",
    fullName: "",
    businessAreaType: "",
    responsibleTeam: "",
    lineCountOfBackendCode: 0,
    lineCountOfFrontendCode: 0,
    lineStopRisk: false,
  });

  const handleChange = (event) => {
    setApplication({ ...application, [event.target.name]: event.target.value });
  };

  return (
  
      <div className="application__details">
        <div className="application__detail">
          <div className="application__headers">
            <h3>Short Code:</h3>
            <h3>Release Date:</h3>
            <h3>Responsible:</h3>
            <h3>Backend:</h3>
            <h3>Frontend:</h3>
            <h3>Database:</h3>
          </div>

          <div className="application__properties">
            <TextField
              name="shortName"
              label="Short Code"
              value={application.shortName}
              variant="outlined"
              onChange={handleChange}
            />

            <TextField
              name="releaseDate"
              onChange={handleChange}
              value={application.releaseDate}
              InputLabelProps={{ shrink: true }}
              label="Release Date"
              type="date"
            />

            <TextField
              name="responsible"
              onChange={handleChange}
              value={application.responsible}
              label="Responsible"
              variant="outlined"
            />

            <CustomSelect
              name="backend"
              handleChange={handleChange}
              list={backends}
              value={application.backend}
            />

            <CustomSelect
              name="frontend"
              handleChange={handleChange}
              list={frontends}
              value={application.frontend}
            />

            <CustomSelect
              name="database"
              handleChange={handleChange}
              list={databases}
              value={application.database}
            />
          </div>
        </div>

        <div className="application__detail">
          <div className="application__headers">
            <h3>Full Name:</h3>
            <h3>Business Area:</h3>
            <h3>Responsible Team:</h3>
            <h3>Line Count of Backend Code:</h3>
            <h3>Line Count of Frontend Code:</h3>
            <div className="line-stop">
              <Checkbox
              // checked={application.lineStopRisk}
              // name="lineStopRisk"
              // handleChange={handleChange}
              />
              <h3>Line Stop Risk (activate critical issue alarms)</h3>
            </div>
          </div>
          <div className="application__properties">
            <TextField
              name="fullName"
              onChange={handleChange}
              label="Full Name"
              value={application.fullName}
              variant="outlined"
            />

            <CustomSelect
              name="businessAreaType"
              handleChange={handleChange}
              list={businessAreaTypes}
              value={application.businessAreaType}
            />

            <CustomSelect
              name="responsibleTeam"
              handleChange={handleChange}
              list={responsibleTeams}
              value={application.responsibleTeam}
            />

            <TextField
              name="lineCountOfBackendCode"
              onChange={handleChange}
              type="number"
              variant="outlined"
              value={application.lineCountOfBackendCode}
            />

            <TextField
              name="lineCountOfFrontendCode"
              onChange={handleChange}
              type="number"
              variant="outlined"
              value={application.lineCountOfFrontendCode}
            />
          </div>
        </div>
      </div>
 
  );
}

export default ApplicationForm;
