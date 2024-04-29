import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import AppointmentTable from "../../Components/AppointmentTable/AppointmentTable";

const Complete = () => {
  return (
    <div>
      <Navbar title="Complete Appointments" />

      <div className="my-4">
        <AppointmentTable />
      </div>
    </div>
  );
};

export default Complete;
