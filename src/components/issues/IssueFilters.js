import { Button, Container } from "@mui/material";
import AppDialogSelectRow from "components/application/AppDialogSelectRow";
import AppDialogTextRow from "components/application/AppDialogTextRow";
import React, { useEffect, useState } from "react";
import applicationService from "service/applicationService";
import "styles/Issues.css";
import { issueStatusList } from "utils/Enums";

function IssueFilters({ issueFilter, setIssueFilter }) {
  const [applications, setApplications] = useState([]);

  const handleChange = (e) => {
    setIssueFilter({ ...issueFilter, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    applicationService.getApplications().then((response) =>
      setApplications(
        response.data.map((application) => ({
          label: application.shortName,
          value: application.shortName,
        }))
      )
    );
  }, []);

  return (
    <div className="issue__filters">
      <Container>
        <div className="filter__container">
          <div className="filter__group">
            <AppDialogSelectRow
              label="Application"
              name="application"
              list={applications}
              value={issueFilter.application}
              variant="outlined"
              handleChange={handleChange}
            />
            <AppDialogSelectRow
              label="Status"
              name="status"
              list={issueStatusList}
              value={issueFilter.status}
              variant="outlined"
              handleChange={handleChange}
            />
          </div>
          <div className="filter__group">
            <AppDialogTextRow
              name="fromDate"
              label="From"
              value={issueFilter.fromDate}
              variant="outlined"
              handleChange={handleChange}
              type="date"
              InputLabelProps={{ shrink: true }}
              // disabled={disabled}
            />
            <AppDialogTextRow
              name="toDate"
              label="To"
              value={issueFilter.toDate}
              variant="outlined"
              handleChange={handleChange}
              type="date"
              InputLabelProps={{ shrink: true }}
              // disabled={disabled}
            />
          </div>
          <div className="filter__submit">
            <Button variant="contained" color="warning">
              Search
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default IssueFilters;
