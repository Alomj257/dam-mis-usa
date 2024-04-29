import React from "react";

const TaskForm = ({ d1, d2, d3, d4, d5, d6, img }) => {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <div style={{ width: "100%" }}>
        <h2>Form</h2>
        <StatusDetails t1={"Driver Name"} t2={"Truck Number"} d1={d1} d2={d2} />
        <StatusDetails t1={"Trucking Co"} t2={"Weight"} d1={d3} d2={d4} />
        <StatusDetails t1={"Date"} t2={"Time"} d1={d5} d2={d6} />
      </div>

      <div style={{ width: "100%" }}>
        <h2>Live Location</h2>

        <div style={{ width: "100%", height: "30rem" }}>
          <img src={img} alt="" style={{ width: "95%", height: "30rem" }} />
        </div>
      </div>
    </div>
  );
};
export default TaskForm;

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
