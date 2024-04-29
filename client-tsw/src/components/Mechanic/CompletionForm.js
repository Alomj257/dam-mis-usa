import React, { useState } from "react";
import Header from "./Header_Mechanic";
import HomeSvg from "../../assets/Appointment/HomeSvg";
import NextIconSvg from "../../assets/Appointment/NextIconSvg";
import TaskDetails from "./DetailsPageMechanic";
import TaskSlot from "../Mechanic/TaskSlot";

function CompletionForm({ status }) {
  return (
    <div
      style={{
        width: "80%",
        margin: "50px",
      }}
    >
      <Header
        header={"Appointments"}
        subheader={
          <SubHeader2
            text1={"New Appointments"}
            text2={"Appointment"}
            text3="Completion Form"
          />
        }
      />

      <Completion />
    </div>
  );
}

export default CompletionForm;

const SubHeader2 = ({ text1, text2, text3, width }) => {
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
      <span style={{ fontWeight: "500", fontSize: "18", color: "grey" }}>
        {text2}
      </span>
      <NextIconSvg />
      <span style={{ fontWeight: "500", fontSize: "18" }}>{text3}</span>
    </div>
  );
};
const Completion = () => {
  const arr = [
    "Windows",
    "Tyres",
    "Battries",
    "Transmission",
    "Alternator",
    "Compressor",
    "Brakes",
    "Radiator",
  ];
  return (
    <div style={{ marginTop: "25px" }}>
      <div style={{ width: "100%" }}>
        <h2 style={{ marginBottom: "10px" }}> Completion Form</h2>
      </div>

      <div style={{ width: "106%", marginTop: "10px" }}>
        <p style={{ fontWeight: "500" }}>Parts Fixed</p>

        <div
          style={{
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Check arr={arr} />
        </div>
      </div>

      <StatusDetails t1={"Extras"} t2={"Total Bill"} t3={"Bill Paid"} />
      <div
        style={{
          height: "25vh",
          width: "95%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <button
          style={{
            backgroundColor: "transparent",
            borderRadius: "6px",
            border: "1px solid rgba(5, 72, 87, 1)",
            color: "rgba(5, 72, 87, 1)",
            padding: "10px",
            width: "8rem",
            height: "3rem",
            marginRight: "10px",
          }}
        >
          Cancel
        </button>
        <button
          style={{
            backgroundColor: "#054857",
            borderRadius: "6px",
            border: "1px solid #054857",
            color: "white",
            padding: "10px",
            width: "8rem",
            height: "3rem",
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

const StatusDetails = ({ t1, t2, t3 }) => {
  return (
    <>
      <div>
        <p
          style={{
            fontWeight: "500",
            fontSize: "16px",
            color: "#344054",
            marginTop: "15px",
          }}
        >
          {t1}
        </p>
        <input
          type="text"
          placeholder={"Enter" + " " + t1}
          style={{
            width: "95%",
            border: "1px solid rgba(208, 213, 221, 1)",
            borderRadius: "8px",
            height: "35px",
            padding: "10px 14px 10px 14px",
            marginTop: "-15px",
          }}
        />
      </div>

      <div style={{ display: "flex", width: "100%", marginTop: "15px" }}>
        <div style={{ width: "50%" }}>
          <p
            style={{
              fontWeight: "500",
              fontSize: "16px",
              color: "#344054",
            }}
          >
            {t2}
          </p>
          <input
            type="text"
            placeholder={"Enter Amount"}
            style={{
              width: "90%",
              border: "1px solid rgba(208, 213, 221, 1)",
              borderRadius: "8px",
              height: "35px",
              padding: "10px 14px 10px 14px",
              marginTop: "-15px",
            }}
          />
        </div>
        <div style={{ width: "50%" }}>
          <p
            style={{
              fontWeight: "500",
              fontSize: "16px",
              color: "#344054",
            }}
          >
            {t3}
          </p>
          <input
            type="text"
            placeholder={"Enter Amount"}
            style={{
              width: "90%",
              border: "1px solid rgba(208, 213, 221, 1)",
              borderRadius: "8px",
              height: "35px",
              padding: "10px 14px 10px 14px",
              marginTop: "-15px",
            }}
          />
        </div>
      </div>
    </>
  );
};

const Check = ({ arr }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <>
      {arr.map((e, i) => (
        <label
          key={i}
          style={{
            display: "flex",
            alignItems: "center",
            margin: "60px",
            marginTop: "-20px",
          }}
        >
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span
            style={{
              fontSize: "14px",
              fontWeight: "400",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            {e}
          </span>
        </label>
      ))}
    </>
  );
};
