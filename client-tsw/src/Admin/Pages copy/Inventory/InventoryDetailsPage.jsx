import React from "react";
import WorkshopDetails from "../../Component/Inventory/WorkshopDetails/WorkshopDetails";
import Navbar from "../../Component/Navbar/Navbar";
import BackPathHeader from "../../Component/BackPathHeader/BackPathHeader";
import HomeSvg from "../../../assets/Appointment/HomeSvg";

const InventoryDetailsPage = () => {
  return (
    <>
      <Navbar title="Workshop Details" />
      <BackPathHeader
        data={[
          { name: <HomeSvg />, path: "/admin" },
          { name: "Inventory Management", path: "/admin/workshop" },
          {
            name: "Workshop",
            path: "/admin/workshop/details",
          },
        ]}
      />
      <WorkshopDetails />
    </>
  );
};

export default InventoryDetailsPage;
