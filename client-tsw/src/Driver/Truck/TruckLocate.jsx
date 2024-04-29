import React, { useState } from "react";
import "./TruckLocate.css";
// import SideBar from "../../components/Truck/Side_Bar";
import SideBar from "../../components/Appointments/SideBar";
import TruckLocateTable from "../../components/Truck/TruckLocateTable";
import TruckLocateDetails from "../../components/Truck/TruckLocateDetails";

function TruckLocate({ page }) {
  return (
    <div className="d-flex">
      <SideBar />

      {page}
      {/* <TruckLocateTable header={"New Tasks"} taskStatus={status} /> */}

      {/* <TruckLocateDetails status={status} /> */}
    </div>
  );
}

export default TruckLocate;
