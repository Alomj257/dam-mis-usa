import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import BackPathHeader from "../../../Components/BackPathHeader/BackPathHeader";
import HomeSvg from "../../../../assets/Appointment/HomeSvg";
import AppointmentDetails from "../../../Components/AppointmentDetails/AppointmentDetails";

const CancelledPage = () => {
  return (
    <div>
      <Navbar title="Appointment" />
      <BackPathHeader
        data={[
          { name: <HomeSvg />, path: "/truck-driver" },
          {
            name: "cancelled appoinments",
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

export default CancelledPage;
