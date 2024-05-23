import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import BackPathHeader from "../../Component/BackPathHeader/BackPathHeader";
import HomeSvg from "../../../assets/Appointment/HomeSvg";
import TaskDetails from "../../Component/TruckLocation/TaskDetails/TaskDetails";

const TruckLocationDetails = () => {
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
      <TaskDetails />
    </div>
  );
};

export default TruckLocationDetails;
