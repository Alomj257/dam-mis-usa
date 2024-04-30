import React from "react";
import TruckLogo from "../../assets/Auth/Truck_logo";
import NewAppointmentsSvg from "../../assets/Mechanic/NewAppointmentsSvg";
import CompleteSvg from "../../assets/Appointment/CompleteSvg";
import PendingSvg from "../../assets/Mechanic/PendingSvg";
import RejectedSvg from "../../assets/Mechanic/Rejected";
import { Link } from "react-router-dom";
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
        <div className="section line" style={{ borderBottom: "none" }}>
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
          <Link to="/mechanic/Pending">
            <AppointmentElement
              logo={<NewAppointmentsSvg color={"#919191"} />}
              title="New Appointment"
            />
          </Link>
          <Link to="/mechanic/InProgress">
            <AppointmentElement
              logo={<PendingSvg color={"#919191"} />}
              title="In Progress"
            />
          </Link>
          <Link to="/mechanic/Rejected">
            <AppointmentElement
              logo={<RejectedSvg color={"#919191"} />}
              title="Rejected"
            />
          </Link>
          <Link to="/mechanic/Completed">
            <AppointmentElement
              logo={<CompleteSvg color={"#919191"} />}
              title="Completed"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
