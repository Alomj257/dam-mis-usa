import React from "react";
import InventoryTable from "../../Component/Inventory/InventoryTable/InventoryTable";
import Navbar from "../../Component/Navbar/Navbar";

const InventoryPage = () => {
  return (
    <div>
      <Navbar title="Inventory Management" />
      <InventoryTable />
    </div>
  );
};

export default InventoryPage;
