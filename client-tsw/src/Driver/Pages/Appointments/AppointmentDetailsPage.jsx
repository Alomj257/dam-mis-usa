import React from "react";
import AppointmentDetails from "../../Components/AppointmentDetails/AppointmentDetails";
import Navbar from "../../Components/Navbar/Navbar";
import BackPathHeader from "../../Components/BackPathHeader/BackPathHeader";
import HomeSvg from "../../../assets/Appointment/HomeSvg";

const AppointmentDetailsPage = () => {
  return (
    <div>
      <Navbar title="Appointment" />
      <BackPathHeader
        data={[
          { name: <HomeSvg />, path: "/truck-driver" },
          { name: "book appoinments", path: "/truck-driver/appointment" },
          {
            name: "New Appointment",
            path: "/truck-driver/appointment/new-appointment",
          },
        ]}
      />
      <AppointmentDetails />
    </div>
  );
};

export default AppointmentDetailsPage;
