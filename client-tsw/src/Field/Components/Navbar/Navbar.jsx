import React from "react";
import "./Navbar.css";
import NotificationSvg from "../../../assets/Appointment/NotificationSvg";
import Arrow from "../../../assets/Appointment/Arrow";
const Navbar = ({ title }) => {
  return (
    <nav className="driver-navbar">
      <ul>
        <li className="h2" style={{ fontSize: "2.7rem" }}>
          {title}
        </li>
      </ul>
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: "5px",
        }}
      >
        <NotificationSvg />
        <ProfileImg />
        <Arrow />
      </ul>
    </nav>
  );
};

export default Navbar;

const ProfileImg = ({ img }) => {
  return (
    <div
      style={{
        borderRadius: "50%",
        height: "40px",
        width: "40px",
        margin: "15px",
      }}
    >
      <img
        src={img}
        alt="img"
        srcset=""
        style={{
          borderRadius: "50%",
          height: "40px",
          width: "40px",
          border: "0.1px solid black",
        }}
      />
    </div>
  );
};
