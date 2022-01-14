import api from "helpers/api";

const plantService = {
  addPlant: (plant) => {
    return api.post("api/plant/save", plant);
  },
  getAll: () => {
    return api.get("api/plant/getAllPlants");
  }
};

export default plantService;