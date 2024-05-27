import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import TransitTable from "../../Components/TruckLocation/TransitTable/TransitTable";

const TransitComplatePage = () => {
  return (
    <div>
      <Navbar />
      <TransitTable status="completed" />
    </div>
  );
};

export default TransitComplatePage;
