import React from "react";
import TruckLogo from "../../../assets/Auth/Truck_logo";
import ConfirmSvg from "../../../assets/Appointment/ConfirmSvg";
import PendingSvg from "../../../assets/Appointment/PendingSvg";
import { RxDashboard } from "react-icons/rx";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { BsPeople } from "react-icons/bs";
import { FaTruckFast } from "react-icons/fa6";

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
            Overview
          </h5>
          <NavLink to="/admin">
            <AppointmentElement
              logo={<RxDashboard color={"#919191"} />}
              title="Dashboard"
            />
          </NavLink>
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
            User Management
          </h5>
          <NavLink to="/admin/users">
            <AppointmentElement logo={<BsPeople />} title="Users" />
          </NavLink>
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
            Truck Managament
          </h5>
          <NavLink to="/admin/appointments">
            <AppointmentElement
              logo={<PendingSvg color={"#919191"} />}
              title="Appointments"
            />
          </NavLink>
          <NavLink to="/admin/truck-location">
            <AppointmentElement
              logo={<FaTruckFast size={25} />}
              title="Truck Locate"
            />
          </NavLink>
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
            Workshops
          </h5>
          <NavLink to="/admin/workshop">
            <AppointmentElement
              logo={<ConfirmSvg color={"#919191"} />}
              title="Inventory"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default SideBar;

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
