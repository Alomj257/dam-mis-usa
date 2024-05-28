import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import BackPathHeader from "../../Components/BackPathHeader/BackPathHeader";
import HomeSvg from "../../../assets/Appointment/HomeSvg";
import TaskDetails from "../../Components/TruckLocation/TaskDetails/TaskDetails";

const DriverTruckLocationDetails = () => {
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

export default DriverTruckLocationDetails;
