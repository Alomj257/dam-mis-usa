import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import AppointmentTable from "../../Component/AppointmentTable/AppointmentTable";

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
