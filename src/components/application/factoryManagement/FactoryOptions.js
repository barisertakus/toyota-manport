import React, { useEffect, useState } from "react";
import plantService from "service/plantService";
import FactoryDialogContent from "./FactoryDialogContent";
import FactoryRow from "./FactoryRow";

function FactoryOptions({
  plants,
  setPlants,
  getIssuesInCountry,
  deleteIssues,
}) {
  useEffect(() => {
    plantService
      .getAll()
      .then((response) => setPlants(addTractAndAliveToPlants(response.data)))
      .catch((error) => console.log(error));
  }, [setPlants]);

  const [issuesRemove, setIssuesRemove] = useState([]);
  const [plantRemove, setPlantRemove] = useState({});
  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  const handleRemove = () => {
    closeDialog();
    deleteIssues(issuesRemove);
    const { action, result, country } = plantRemove; 
    changeStatus(action, result, country); // change factory status after delete issues
  };

  const handleCancel = () => {
    closeDialog();
    setIssuesRemove([]);
  };

  const addTractAndAliveToPlants = (plants) => {
    return plants.map((plant) => ({ ...plant, track: false, alive: false }));
  };

  const checkIsAliveFalse = (action, result) => {
    return action === "alive" && result === false;
  };

  const handleChange = (e, action) => {
    // action = track or alive
    const result = e.target.checked; // true or false
    const country = e.target.name;
    const isAliveFalse = checkIsAliveFalse(action, result);
    if (isAliveFalse) {
      // if alive is false
      const issues = getIssuesInCountry(country);
      if (issues?.length) {
        setPlantRemove({ action, result, country });
        setIssuesRemove(issues);
        openDialog();
      } else {
        changeStatus(action, result, country);
      }
    } else {
      changeStatus(action, result, country);
    }
  };

  const changeStatus = (action, result, country) => {
    const plantFound = plants.find((plant) => plant.country === country);
    setPlants(
      plants.map((plant) =>
        plantFound.id === plant.id
          ? checkIsAliveFalse(action, result) // If alive is false then track must also be false
            ? { ...plantFound, alive: false, track: false }
            : { ...plantFound, [action]: result }
          : plant
      )
      // ...plant and change field like -> alive : true
    );
  };

  return (
    <div className="country__management">
      <div className="country__alive">
        <div className="country__alive-headers">
          <u>
            <h3>Alive</h3>
          </u>
          <u>
            <h3>Track</h3>
          </u>
        </div>

        {plants.map((plant) => (
          <FactoryRow
            key={plant.id}
            plant={plant}
            handleChange={handleChange}
          />
        ))}
      </div>
      <FactoryDialogContent
        open={open}
        setOpen={setOpen}
        handleCancel={handleCancel}
        handleRemove={handleRemove}
        issuesRemove={issuesRemove}
      />
    </div>
  );
}

export default FactoryOptions;
