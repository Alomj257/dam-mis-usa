import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import TruckLocationTable from "../../Components/TruckLocation/TruckLocationTable/TruckLocationTable";

const DriverTruckLocationsPage = () => {
  return (
    <div>
      <Navbar title="Truck Locate" />
      <TruckLocationTable />
    </div>
  );
};

export default DriverTruckLocationsPage;
