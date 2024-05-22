import React from "react";
import AppointmentDetails from "../../Component/AppointmentDetails/AppointmentDetails";
import HomeSvg from "../../../assets/Appointment/HomeSvg";
import Navbar from "../../Component/Navbar/Navbar";
import BackPathHeader from "../../Component/BackPathHeader/BackPathHeader";

const AdminAppointmentDetailsPage = () => {
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

export default AdminAppointmentDetailsPage;
