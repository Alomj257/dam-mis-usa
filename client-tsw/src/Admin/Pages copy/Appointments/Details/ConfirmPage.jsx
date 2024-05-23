import React from "react";
import HomeSvg from "../../../../assets/Appointment/HomeSvg";
import Navbar from "../../../Component/Navbar/Navbar";
import AppointmentDetails from "../../../Component/AppointmentDetails/AppointmentDetails";
import BackPathHeader from "../../../../Driver/Components/BackPathHeader/BackPathHeader";

const AdminConfirmPage = () => {
  return (
    <div>
      <Navbar title="Appointment" />
      <BackPathHeader
        data={[
          { name: <HomeSvg />, path: "/truck-driver" },
          {
            name: "Confirm appoinments",
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

export default AdminConfirmPage;
