import { Checkbox, TextField } from "@mui/material";
import { selectDisabled } from "features/applicationSlice";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { useSelector } from "react-redux";
import CustomSelect from "utils/CustomSelect";
import {
  backends,
  businessAreaTypes,
  databases,
  frontends,
  responsibleTeams,
} from "utils/Enums";

const ApplicationForm = forwardRef(( props , ref) => {
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

  const disabled = useSelector(selectDisabled);

  const handleChange = (event) => {
    setApplication({ ...application, [event.target.name]: event.target.value });
  };

  useImperativeHandle(ref, () => ({
    application: application,
  }));

  useEffect(() => {
    if (props?.application)
      setApplication({ ...application, ...props.application });
    //eslint-disable-next-line
  }, [props.application]);

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
            disabled={disabled}
          />

          <TextField
            name="releaseDate"
            onChange={handleChange}
            value={application.releaseDate}
            InputLabelProps={{ shrink: true }}
            label="Release Date"
            type="date"
            disabled={disabled}
          />

          <TextField
            name="responsible"
            onChange={handleChange}
            value={application.responsible}
            label="Responsible"
            variant="outlined"
            disabled={disabled}
          />

          <CustomSelect
            name="backend"
            handleChange={handleChange}
            list={backends}
            value={application.backend}
            disabled={disabled}
          />

          <CustomSelect
            name="frontend"
            handleChange={handleChange}
            list={frontends}
            value={application.frontend}
            disabled={disabled}
          />

          <CustomSelect
            name="database"
            handleChange={handleChange}
            list={databases}
            value={application.database}
            disabled={disabled}
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
              disabled={disabled}
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
            disabled={disabled}
          />

          <CustomSelect
            name="businessAreaType"
            handleChange={handleChange}
            list={businessAreaTypes}
            value={application.businessAreaType}
            disabled={disabled}
          />

          <CustomSelect
            name="responsibleTeam"
            handleChange={handleChange}
            list={responsibleTeams}
            value={application.responsibleTeam}
            disabled={disabled}
          />

          <TextField
            name="lineCountOfBackendCode"
            onChange={handleChange}
            type="number"
            variant="outlined"
            value={application.lineCountOfBackendCode}
            disabled={disabled}
          />

          <TextField
            name="lineCountOfFrontendCode"
            onChange={handleChange}
            type="number"
            variant="outlined"
            value={application.lineCountOfFrontendCode}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
});

export default ApplicationForm;
