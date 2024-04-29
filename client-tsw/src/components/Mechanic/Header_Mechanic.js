import React from "react";
import NotificationSvg from "../../assets/Appointment/NotificationSvg";
import Arrow from "../../assets/Appointment/Arrow";

function Header({ header, subheader, fnc }) {
  return (
    <div className="head_sec" style={{ marginBottom: "30px" }}>
      <div>
        <h2 style={{ fontWeigt: "500", fontSize: "2.7rem" }}>{header}</h2>
        {subheader}
      </div>

      <div>
        <div
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
        </div>
      </div>
    </div>
  );
}

export default Header;

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
