import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { impactTypes, servers } from "utils/Enums";
import AppIssueSelectRow from "./AppIssueSelectRow";
import AppIssueTextRow from "./AppIssueTextRow";

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
    server: "",
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
        <AppIssueSelectRow
          label="Country"
          name="country"
          disabled={disabled}
          list={countries}
          value={issue.country}
          variant="outlined"
          handleChange={handleChange}
        />

        <AppIssueSelectRow
          label="Server"
          name="server"
          list={issue.country ? servers : []}
          disabled={disabled}
          value={issue.server}
          variant="outlined"
          handleChange={handleChange}
        />

        <AppIssueTextRow
          name="issueType"
          label="Issue Type"
          value={issue.issueType}
          variant="outlined"
          handleChange={handleChange}
          disabled={disabled}
        />

        <AppIssueSelectRow
          name="impactType"
          label="Impact Type"
          handleChange={handleChange}
          list={impactTypes}
          value={issue.impactType}
          disabled={disabled}
        />

        <AppIssueTextRow
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
