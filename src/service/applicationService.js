import api from "helpers/api";

const applicationService = {
  addApplication: (application) => {
    return api.post("api/application/save", application);
  },
  getApplications: () => {
    return api.get("api/application/getAllForDashboard");
  },
  getApplicationByShortName: (shortName) => {
    return api.get(`api/application/${shortName}`);
  },
};

export default applicationService;
