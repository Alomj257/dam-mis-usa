import React from "react";

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
          <StatusDetails t1={"Name"} t2="Email" d1={"Name"} d2="Email" />
          <StatusDetails
            t1={"Truck Number"}
            t2={"Truck Model"}
            d1={"Truck Number"}
            d2={"Truck Model"}
          />
          <StatusDetails
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
