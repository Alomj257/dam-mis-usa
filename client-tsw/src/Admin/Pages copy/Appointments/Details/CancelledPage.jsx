import React from "react";
import HomeSvg from "../../../../assets/Appointment/HomeSvg";
import Navbar from "../../../Component/Navbar/Navbar";
import AppointmentDetails from "../../../Component/AppointmentDetails/AppointmentDetails";
import BackPathHeader from "../../../../Driver/Components/BackPathHeader/BackPathHeader";

const AdminCancelledPage = () => {
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

export default AdminCancelledPage;
