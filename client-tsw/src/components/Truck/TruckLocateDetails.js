import React from "react";
import NotificationSvg from "../../assets/Appointment/NotificationSvg";
import Arrow from "../../assets/Appointment/Arrow";
import HomeSvg from "../../assets/Appointment/HomeSvg";
import NextIconSvg from "../../assets/Appointment/NextIconSvg";

import TaskDetailsPage from "./TaskDetailsPage";

function TruckLocateDetails({ status }) {
  return (
    <div
      style={{
        width: "80%",
        margin: "50px",
      }}
    >
      <Header
        header={"Task"}
        subheader={<SubHeader2 text1={status} text2={"Task"} />}
      />

      <TaskDetailsPage status={status} />
    </div>
  );
}

export default TruckLocateDetails;

const SubHeader2 = ({ text1, text2, width }) => {
  return (
    <div
      className="d-flex"
      style={{
        width: { width },
        justifyContent: "space-between",
        cursor: "pointer",
      }}
    >
      <HomeSvg />{" "}
      <span style={{ fontWeight: "500", fontSize: "18", color: "grey" }}>
        {text1}
      </span>
      <NextIconSvg />
      <span style={{ fontWeight: "500", fontSize: "18" }}>{text2}</span>
    </div>
  );
};

const Header = ({ header, subheader, fnc }) => {
  return (
    <div
      className="head_sec"
      style={{ marginBottom: "30px", marginTop: "30px" }}
    >
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
};
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
