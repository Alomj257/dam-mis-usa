import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import BackPathHeader from "../../../Components/BackPathHeader/BackPathHeader";
import HomeSvg from "../../../../assets/Appointment/HomeSvg";
import AppointmentDetails from "../../../Components/AppointmentDetails/AppointmentDetails";

const PendingPage = () => {
  return (
    <div>
      <Navbar title="Appointment" />
      <BackPathHeader
        data={[
          { name: <HomeSvg />, path: "/truck-driver" },
          {
            name: "pending appoinments",
            path: "/truck-driver/appointment",
          },
          {
            name: "Appointment",
          },
        ]}
      />
      <AppointmentDetails />
    </div>
  );
};

export default PendingPage;
