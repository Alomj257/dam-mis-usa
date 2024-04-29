import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import AppointmentTable from "../../Components/AppointmentTable/AppointmentTable";

const Cancelled = () => {
  return (
    <div>
      {" "}
      <Navbar title="Cancelled Appointments" />
      <div className="my-4">
        <AppointmentTable />
      </div>
    </div>
  );
};

export default Cancelled;
