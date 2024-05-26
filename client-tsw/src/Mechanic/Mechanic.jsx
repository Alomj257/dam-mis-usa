import React from "react";
import SideBarMechanic from "../components/Mechanic/Side_Bar_Mechanic";
import BodyMechanic from "../components/Mechanic/Body_Mechanic";

function Mechanic({ page }) {
  return (
    <div className="d-flex">
      <SideBarMechanic />
      <BodyMechanic page={page} />
    </div>
  );
}

export default Mechanic;
