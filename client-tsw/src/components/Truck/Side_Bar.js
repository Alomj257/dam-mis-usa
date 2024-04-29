import React from "react";
import TruckLogo from "../../assets/Auth/Truck_logo";
import NewTaskSvg from "../../assets/Appointment/NewTask";
import PendingSvg from "../../assets/Appointment/PendingSvg";
import CancelledSvg from "../../assets/Appointment/CanceledSvg";
import ConfirmSvg from "../../assets/Appointment/ConfirmSvg";
import CompletedSvg from "../../assets/Appointment/CompleteSvg";
import InTransitSvg from "../../assets/Appointment/InTransitSvg";

function Side_Bar() {
  return <SideBar />;
}

export default Side_Bar;

const AppointmentElement = ({ logo, title }) => {
  return (
    <div
      className="d-flex p-1"
      style={{
        color: "grey",
        fontWeight: "500",
        fontSize: "1.1rem",
        cursor: "pointer",
      }}
    >
      <div className="me-3">{logo}</div>
      <p>{title}</p>
    </div>
  );
};

const SideBar = () => {
  return (
    <div
      className="sidebar_containeer"
      style={{
        width: "20%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "50px",
      }}
    >
      <div
        className="logo_ d-flex align-items-center"
        style={{ width: "fit-content", marginBottom: "10px" }}
      >
        <TruckLogo />
        <h2
          className="logo_title"
          style={{
            fontWeight: "400",
            fontFamily: "Radley",
            textWrap: "nowrap",
          }}
        >
          DAM MIS
        </h2>
      </div>

      <div className="appointment_sections">
        <div className="section line">
          <h5
            className="section_title"
            style={{
              color: "grey",
              fontWeight: "500",
              fontSize: "1.1rem",
              marginBottom: "1.3rem",
              marginTop: "1.4rem",
            }}
          >
            Book Apointment
          </h5>
          <AppointmentElement
            logo={<NewTaskSvg color={"#919191"} />}
            title="Book Appointment"
          />
        </div>
        <div className="section line">
          <h5
            className="section_title"
            style={{
              color: "grey",
              fontWeight: "500",
              fontSize: "1.1rem",
              marginBottom: "1.3rem",
              marginTop: "1.4rem",
            }}
          >
            Appointments
          </h5>
          <AppointmentElement logo={<PendingSvg />} title="Pending" />
          <AppointmentElement logo={<CancelledSvg />} title="Cancelled" />
          <AppointmentElement logo={<ConfirmSvg />} title="Confirm" />
          <AppointmentElement logo={<CompletedSvg />} title="Completed" />
        </div>
        <div className="section">
          <h5
            className="section_title"
            style={{
              color: "grey",
              fontWeight: "500",
              fontSize: "1.1rem",
              marginBottom: "1.3rem",
              marginTop: "1.4rem",
            }}
          >
            Truck Locate
          </h5>
        </div>
      </div>
    </div>
  );
};
