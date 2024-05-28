import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import BackPathHeader from "../../Components/BackPathHeader/BackPathHeader";
import HomeSvg from "../../../assets/Appointment/HomeSvg";
import AcceptFrom from "../../Components/TruckLocation/AcceptForm/AcceptFrom";

const AcceptFormPage = () => {
  return (
    <div>
      <Navbar title="New Task" />
      <BackPathHeader
        data={[
          { name: <HomeSvg />, path: "/truck-driver" },
          { name: "Truck Locate", path: "/truck-driver/locate-tasks" },
          {
            name: "Task",
            path: "/truck-driver/locate-tasks/accept",
          },
          {
            name: "Transit",
            path: "/truck-driver/locate-tasks/accept/transit",
          },
        ]}
      />
      <AcceptFrom />
    </div>
  );
};

export default AcceptFormPage;
