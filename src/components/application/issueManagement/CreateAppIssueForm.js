import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { impactTypes } from "utils/Enums";
import AppDialogSelectRow from "../AppDialogSelectRow";
import AppDialogTextRow from "../AppDialogTextRow";


function CreateAppIssueForm({
  plants,
  addIssue,
  editIssue,
  oldIssue,
  setOpen,
  disabled,
}) {
  const [issue, setIssue] = useState({
    issueType: "",
    impactType: "",
    country: "",
    description: "",
    track: false,
  });

  const [countries, setCountries] = useState([]);

  const handleChange = (e) => {
    setIssue({ ...issue, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (editIssue) {
      editIssue(issue);
    } else {
      addIssue(issue);
    }
    setOpen(false);
  };

  useEffect(() => {
    setCountries(
      plants
        .filter((plant) => plant.alive)
        .map((plant) => ({
          label: plant.country,
          value: plant.country,
        }))
    );
  }, [plants]);

  useEffect(() => {
    if (oldIssue) setIssue(oldIssue);
  }, [oldIssue]);

  return (
    <div className="create__appIssue">
      <div className="appIssues">
        <AppDialogSelectRow
          label="Country"
          name="country"
          disabled={disabled}
          list={countries}
          value={issue.country}
          variant="outlined"
          handleChange={handleChange}
        />

        <AppDialogTextRow
          name="issueType"
          label="Issue Type"
          value={issue.issueType}
          variant="outlined"
          handleChange={handleChange}
          disabled={disabled}
        />

        <AppDialogSelectRow
          name="impactType"
          label="Impact Type"
          handleChange={handleChange}
          list={impactTypes}
          value={issue.impactType}
          disabled={disabled}
        />

        <AppDialogTextRow
          name="description"
          label="Description"
          handleChange={handleChange}
          value={issue.description}
          variant="outlined"
          disabled={disabled}
        />
      </div>
      <div className="add-btn">
        {!disabled ? (
          <Button
            variant="contained"
            onClick={handleSave}
            // disabled={props.disabled}
          >
            {editIssue ? "Edit Issue" : "Add Issue"}
          </Button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default CreateAppIssueForm;
