import React from "react";
import { useLocation } from "react-router-dom";

const TaskDetails = ({ slot }) => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "80%",
        }}
      >
        <div style={{ width: "100%" }}>
          <h2>Personal Details</h2>
          <StatusDetails
            name1="name"
            name2="email"
            t1={"Name"}
            t2="Email"
            d1={"Name"}
            d2="Email"
          />
          <StatusDetails
            name1="truckNumber"
            name2="model"
            t1={"Truck Number"}
            t2={"Truck Model"}
            d1={"Truck Number"}
            d2={"Truck Model"}
          />
          <StatusDetails
            name1="phone"
            name2="driverLicence"
            t1={"Phone Number"}
            t2={"Driving License"}
            d1={"Phone Number"}
            d2={"Driving License"}
          />
        </div>
        {slot}
      </div>
    </>
  );
};

export default TaskDetails;

const StatusDetails = ({ name1, name2, t1, t2, d1, d2 }) => {
  const { state } = useLocation();
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
          {state[name1]}
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
          {state[name2]}
        </p>
      </div>
    </div>
  );
};
