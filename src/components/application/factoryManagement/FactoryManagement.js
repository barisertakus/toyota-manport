import { ExpandMore } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import plantService from "service/plantService";
import FactoryRow from "./FactoryRow";

function FactoryManagement() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    plantService
      .getAll()
      .then((response) => setPlants(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="factory__management">
      <h1>Factory Management</h1>
      <div className="link__expand">
        <hr />
        <ExpandMore />
      </div>
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
    </div>
  );
}

export default FactoryManagement;
