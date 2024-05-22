import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import AppointmentTable from "../../Component/AppointmentTable/AppointmentTable";

const AdminAppointmentPage = () => {
  return (
    <>
      <Navbar title="Appointments" />
      <div className="my-4">
        <AppointmentTable />
      </div>
    </>
  );
};

export default AdminAppointmentPage;
