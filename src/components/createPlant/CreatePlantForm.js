import { ExpandMore } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import plantService from "service/plantService";

function CreatePlantForm() {
  
  const [plant, setPlant] = useState({
    country: "",
    shortCode: "",
    fullName: "",
  });

  const history = useHistory();

  const handleChange = (event) => {
    setPlant({ ...plant, [event.target.name]: event.target.value });
  };

  const handleSave = () => {
    plantService
      .addPlant(plant)
      .then((response) => history.goBack())
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="header__name">
        <h4>Add New Plant</h4>
      </div>
      <div className="plant__form">
        <div className="form__header">
          <h1>Details</h1>
          <div className="link__expand">
            <hr />
            <ExpandMore />
          </div>
        </div>
        <div className="plant__details">
          <div className="plant__headers">
            <h3>Country:</h3>
            <h3>Short Code:</h3>
            <h3>Full Name:</h3>
          </div>
          <div className="plant__properties">
            <TextField
              name="country"
              label="Country"
              value={plant.country}
              variant="outlined"
              onChange={handleChange}
            />

            <TextField
              name="shortCode"
              label="Short Code"
              onChange={handleChange}
              value={plant.shortCode}
              variant="outlined"
            />

            <TextField
              name="fullName"
              label="Full Name"
              onChange={handleChange}
              value={plant.fullName}
              variant="outlined"
            />

            <Button
              variant="contained"
              style={{ marginTop: 10 }}
              onClick={handleSave}
            >
              Add Plant
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePlantForm;
