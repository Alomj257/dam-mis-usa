import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import BackPathHeader from "../../Component/BackPathHeader/BackPathHeader";
import HomeSvg from "../../../assets/Appointment/HomeSvg";
import UpdatePart from "../../Component/Inventory/AddParts/UpdatePart";

const UpdatePartPage = () => {
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
          {
            name: "Parts",
            path: "/admin/workshop/details/parts/update",
          },
        ]}
      />
      <UpdatePart />
    </>
  );
};

export default UpdatePartPage;
