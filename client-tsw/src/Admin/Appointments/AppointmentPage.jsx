import React from "react";
import "./AppointmentPage.css";
// import myCollection from "../../myCollection";
import SideBar from "../../components/Appointments/SideBar";
// import BodyComp from "../../components/Appointments/BodyComp";
// import ApointmentStatusDetails from "../../components/Appointments/AppointmentStatusDetails";
// import ApointmentStatusPage from "../../components/Appointments/AppointmentStatusPage";

function AppointmentsPage({ page }) {
  return (
    <div className="d-flex" style={{ height: "fit" }}>
      <SideBar />
      {page}

      {/* <BodyComp /> */}

      {/* <ApointmentStatusDetails status={"Confirm"} /> */}

      {/* <ApointmentStatusPage
        header={"Pending Appointments"}
        allData={myCollection}
        status={"Pending"}
      /> */}
    </div>
  );
}

export default AppointmentsPage;
