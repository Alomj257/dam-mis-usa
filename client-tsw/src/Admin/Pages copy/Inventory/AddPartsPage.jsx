import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import BackPathHeader from "../../Component/BackPathHeader/BackPathHeader";
import HomeSvg from "../../../assets/Appointment/HomeSvg";
import AddParts from "../../Component/Inventory/AddParts/AddParts";

const AddPartsPage = () => {
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
      <AddParts />
    </>
  );
};

export default AddPartsPage;
