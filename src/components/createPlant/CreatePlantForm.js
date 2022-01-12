import { ExpandMore } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

function CreatePlantForm() {
  const [plant, setPlant] = useState({ name: "", shortCode: "", fullName: "" });

  const handleChange = (event) => {
    setPlant({ ...plant, [event.target.name]: event.target.value });
  };

  const handleSave = () => {
    console.log(plant);
  }

  return (
    <div>
      <div className="header__name">Add New Plant</div>
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
              name="name"
              label="Country"
              value={plant.name}
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

            <Button variant="contained" style={{ marginTop: 10 }} onClick={handleSave}>
              Add Plant
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePlantForm;
