import React from "react";
import TruckLogo from "../../../assets/Auth/Truck_logo";
import { RxDashboard } from "react-icons/rx";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { GiWheat } from "react-icons/gi";
import { MdOutlineAgriculture } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
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
          <NavLink to="/field">
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
            Field Managament
          </h5>
          {/* <NavLink to="/field/fields">
            <AppointmentElement logo={<GiWheat />} title="Fields" />
          </NavLink> */}
          <NavLink to="/field/maintainer">
            <AppointmentElement
              logo={<GiWheat />}
              title=" Maintaining Fields"
            />
          </NavLink>
          <NavLink to="/field/owner">
            <AppointmentElement logo={<BsPeople />} title=" Your Fields" />
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
            Material Managament
          </h5>
          <NavLink to="/field/materials">
            <AppointmentElement
              logo={<HiOutlineBuildingStorefront color={"#919191"} />}
              title="Materials"
            />
          </NavLink>
          <NavLink to="/field/expenditure">
            <AppointmentElement
              logo={<MdOutlineAgriculture size={25} />}
              title="Expenditures"
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
