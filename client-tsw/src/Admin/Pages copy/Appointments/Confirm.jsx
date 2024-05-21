import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import AppointmentTable from "../../Component/AppointmentTable/AppointmentTable";

const Confirm = () => {
  return (
    <div>
      <Navbar title="Confirm Appointments" />

      <div className="my-4">
        <AppointmentTable />
      </div>
    </div>
  );
};

export default Confirm;
