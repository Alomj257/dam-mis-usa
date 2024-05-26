import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import BackPathHeader from "../../Component/BackPathHeader/BackPathHeader";
import HomeSvg from "../../../assets/Appointment/HomeSvg";
import NewWorkshop from "../../Component/Inventory/NewWorkshop/NewWorkshop";

const NewWorkshopPage = () => {
  return (
    <div>
      <Navbar title="New Workshop" />
      <BackPathHeader
        data={[
          { name: <HomeSvg />, path: "/admin" },
          { name: "Inventory Management", path: "/admin/workshop" },
          {
            name: "New Workshop",
            path: "/admin/workshop/new-workshop",
          },
        ]}
      />
      <NewWorkshop />
    </div>
  );
};

export default NewWorkshopPage;
