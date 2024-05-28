import React from "react";
import TruckLocationTable from "../../Component/TruckLocation/TruckLocationTable/TruckLocationTable";
import Navbar from "../../Component/Navbar/Navbar";

const TruckLocationsPage = () => {
  return (
    <div>
      <Navbar title="Truck Locate" />
      <TruckLocationTable />
    </div>
  );
};

export default TruckLocationsPage;
