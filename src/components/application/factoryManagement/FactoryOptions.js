import React, { useEffect } from "react";
import plantService from "service/plantService";
import FactoryRow from "./FactoryRow";

function FactoryOptions({ plants, setPlants }) {
  useEffect(() => {
    plantService
      .getAll()
      .then((response) => setPlants(addTractAndAliveToPlants(response.data)))
      .catch((error) => console.log(error));
  }, [setPlants]);

  const addTractAndAliveToPlants = (plants) => {
    return plants.map((plant) => ({ ...plant, track: false, alive: false }));
  };

  const handleChange = (e, action) => {
    // action = track or alive
    const plantFound = plants.find((plant) => plant.country === e.target.name);
    const result = e.target.checked; // true or false
    setPlants(
      plants.map((plant) =>
        plantFound.id === plant.id
          ? action === "alive" && result === false // If alive is false then track must also be false
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
    </div>
  );
}

export default FactoryOptions;
