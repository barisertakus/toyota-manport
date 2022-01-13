import api from "helpers/api";

const plantService = {
  addPlant: (plant) => {
    return api.post("api/plant/save", plant);
  },
};

export default plantService;