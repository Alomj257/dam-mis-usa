import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import AppointmentTable from "../../Components/AppointmentTable/AppointmentTable";

const Pending = () => {
  return (
    <div>
      <Navbar title="Pending Appointments" />

      <div className="my-4">
        <AppointmentTable />
      </div>
    </div>
  );
};

export default Pending;
