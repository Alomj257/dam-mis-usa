import React from "react";
import NewTask from "../../Component/TruckLocation/NewTask/NewTask";
import BackPathHeader from "../../Component/BackPathHeader/BackPathHeader";
import HomeSvg from "../../../assets/Appointment/HomeSvg";
import Navbar from "../../Component/Navbar/Navbar";

const NewTaskPage = () => {
  return (
    <div>
      <Navbar title="New Task" />
      <BackPathHeader
        data={[
          { name: <HomeSvg />, path: "/admin" },
          { name: "Truck Locate", path: "/admin/truck-location" },
          {
            name: "New Task",
            path: "/admin/truck-location/new-task",
          },
        ]}
      />
      <NewTask />
    </div>
  );
};

export default NewTaskPage;
