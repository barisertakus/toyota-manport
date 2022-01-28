import api from "helpers/api";

const applicationService = {
  addApplication: (application) => {
    return api.post("api/application/save", application);
  },
};

export default applicationService;