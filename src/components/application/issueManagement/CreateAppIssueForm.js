import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { impactTypes, servers } from "utils/Enums";
import AppIssueSelectRow from "./AppIssueSelectRow";
import AppIssueTextRow from "./AppIssueTextRow";

function CreateAppIssueForm({ plants }) {
  const [issue, setIssue] = useState({
    issueType: "",
    impactType: "",
    country: "",
    server: "",
    description: "",
  });

  const [countries, setCountries] = useState([]);

  const handleChange = (e) => {
    setIssue({ ...issue, [e.target.name]: e.target.value });
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

  return (
    <div className="create__appIssue">
      <div className="appIssues">
        <AppIssueSelectRow
          label="Country"
          name="country"
          disabled
          list={countries}
          value={issue.country}
          variant="outlined"
          handleChange={handleChange}
        />

        <AppIssueSelectRow
          label="Server"
          name="server"
          list={issue.country ? servers : []}
          disabled
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
          // disabled={props.disabled}
        />

        <AppIssueSelectRow
          name="impactType"
          label="Impact Type"
          handleChange={handleChange}
          list={impactTypes}
          value={issue.impactType}
          // disabled={props.disabled}
        />

        <AppIssueTextRow
          name="description"
          label="Description"
          handleChange={handleChange}
          value={issue.description}
          variant="outlined"
          // disabled={props.disabled}
        />
      </div>
      <div className="add-btn">
        <Button
          variant="contained"
          onClick={() => console.log(issue)}
          // disabled={props.disabled}
        >
          Add Issue
        </Button>
      </div>
    </div>
  );
}

export default CreateAppIssueForm;
