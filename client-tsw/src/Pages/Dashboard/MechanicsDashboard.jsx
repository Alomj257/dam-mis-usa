import React from "react";
import "./MechanicsDashboard.css";
import SideBarMechanic from "../../components/Mechanic/Side_Bar_Mechanic";
import { Outlet } from "react-router-dom";
const MechanicsDashboard = () => {
  return (
    <div className="d-flex">
      <SideBarMechanic />
      <Outlet />
    </div>
  );
};

export default MechanicsDashboard;
