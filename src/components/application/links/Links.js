import React from "react";
import "styles/Links.css";
import ApplicationDetailHeader from "../ApplicationDetailHeader";
import LinkDetails from "./LinkDetails";

const mockPlants = [{ country: "Turkey" }, { country: "England" }];

function Links() {
  return (
    <div className="links">
      <ApplicationDetailHeader name="Links" />
      <LinkDetails plants={mockPlants} />
    </div>
  );
}

export default Links;
