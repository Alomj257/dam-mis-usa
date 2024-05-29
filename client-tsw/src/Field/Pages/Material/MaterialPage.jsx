import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import MaterialTable from "../../Components/Material/MaterialTable/MaterialTable";

const MaterialPage = () => {
  return (
    <div>
      <Navbar title="Materials" />
      <MaterialTable />
    </div>
  );
};

export default MaterialPage;
