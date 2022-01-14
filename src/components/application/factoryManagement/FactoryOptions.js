import React, { useEffect, useState } from "react";
import plantService from "service/plantService";
import FactoryRow from "./FactoryRow";

function FactoryOptions() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    plantService
      .getAll()
      .then((response) => setPlants(response.data))
      .catch((error) => console.log(error));
  }, []);

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
          <FactoryRow key={plant.id} name={plant.country} id={plant.id} />
        ))}
      </div>
    </div>
  );
}

export default FactoryOptions;
