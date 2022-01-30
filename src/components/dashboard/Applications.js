import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import applicationService from "service/applicationService";
import ApplicationBox from "./ApplicationBox";

function Applications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    applicationService
      .getApplications()
      .then((response) => {
        setApplications(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return loading ? (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress />
    </div>
  ) : (
    <div className="applications">
      {applications.map((uygulama) => (
        <ApplicationBox key={uygulama.id} uygulama={uygulama} />
      ))}
    </div>
  );
}

export default Applications;
