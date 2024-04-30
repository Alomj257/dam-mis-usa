import React from "react";
import Header from "./Header_Mechanic";
import HomeSvg from "../../assets/Appointment/HomeSvg";
import NextIconSvg from "../../assets/Appointment/NextIconSvg";
import TaskDetails from "./DetailsPageMechanic";
import TaskSlot from "../Mechanic/TaskSlot";
import { useLocation } from "react-router-dom";

function TaskDetails_Mechanics({ status }) {
  const { state } = useLocation();
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
          <SubHeader2 text1={"New Appointments"} text2={"Appointment"} />
        }
      />
      <TaskDetails slot={<TaskSlot s={state?.status} />} />
    </div>
  );
}

export default TaskDetails_Mechanics;

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
