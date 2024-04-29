import React from "react";
import NewTaskSvg from "../../assets/Appointment/NewTask";
import NotificationSvg from "../../assets/Appointment/NotificationSvg";
import Arrow from "../../assets/Appointment/Arrow";
import HomeSvg from "../../assets/Appointment/HomeSvg";
import NextIconSvg from "../../assets/Appointment/NextIconSvg";
import AvailableSlot from "./AvailableSlot";

const ApointStatusDetails = ({ status }) => {
  return (
    <div
      style={{
        width: "80%",
        margin: "50px",
      }}
    >
      <Header
        header={"Appointment"}
        subheader={
          <SubHeader2
            text1={status + " " + "Appointments"}
            text2={"Appointment"}
          />
        }
      />

      <div style={{ width: "100%" }}>
        <form
          action=""
          style={{ width: "100%", overflow: "hidden", margin: "50px" }}
        >
          <PersonalInfo />

          <AvailableSlot status={status} />
        </form>
      </div>
    </div>
  );
};

export default ApointStatusDetails;

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

const Header = ({ header, subheader, btn, fnc }) => {
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

        {btn ? (
          <button className="new-apoint-btn" onClick={fnc}>
            <NewTaskSvg color={"White"} />{" "}
            <span className="ms-1">New Appointment</span>
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const PersonalInfo = () => {
  return (
    <div style={{ width: "100%" }}>
      <h2 style={{ marginBottom: "-10px" }}>Personal Information</h2>
      <StatusDetails t1="Name" t2="Email" d1="Name" d2="Email" />
      <StatusDetails
        t1="Truck Number"
        t2="Truck Model"
        d1="Truck Number"
        d2="Truck Model"
      />
      <StatusDetails
        t1="Phone Number"
        t2="Driving Licence"
        d1="Phone Number"
        d2="Driving Licence"
      />
    </div>
  );
};

const StatusDetails = ({ t1, t2, d1, d2 }) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "50%", marginTop: "10px" }}>
        <p
          style={{
            fontWeight: "500",
            fontSize: "16px",
            color: "#344054",
          }}
        >
          {t1}
        </p>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            padding: "14px",
            width: "90%",
            border: "1px solid rgba(208, 213, 221, 1)",
            borderRadius: "8px",
            height: "35px",
            color: "#667085",
            marginTop: "-15px",
          }}
        >
          {d1}
        </p>
      </div>

      <div style={{ width: "50%", marginTop: "10px" }}>
        <p
          style={{
            fontWeight: "500",
            fontSize: "16px",
            color: "#344054",
          }}
        >
          {t2}
        </p>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            padding: "14px",
            width: "90%",
            border: "1px solid rgba(208, 213, 221, 1)",
            borderRadius: "8px",
            height: "35px",
            color: "#667085",
            marginTop: "-15px",
          }}
        >
          {d2}
        </p>
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
