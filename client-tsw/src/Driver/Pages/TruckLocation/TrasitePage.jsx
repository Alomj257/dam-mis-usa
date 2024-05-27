import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import TransitTable from "../../Components/TruckLocation/TransitTable/TransitTable";

const TrasitePage = () => {
  return (
    <div>
      <Navbar title="In Trasit" />
      <TransitTable status="in transit" />
    </div>
  );
};

export default TrasitePage;
