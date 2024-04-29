import React, { useState } from "react";
import TaskForm from "./TaskForm";
import LocationImg from "../../assets/Truck/LocationImg.png";
// import { alpha, styled } from "@mui/material/styles";
// import { yellow } from "@mui/material/colors";
// import Switch from "@mui/material/Switch";
import RejectionForm from "../Popup/Popup";

const TaskDetailsPage = ({ status }) => {
  const [showRejectionForm, setShowRejectionForm] = useState(false);

  const handleRejectClick = () => {
    setShowRejectionForm(true);
  };

  const handleReject = (reason) => {
    // Handle rejection logic here, like sending the reason to the server
    console.log("Reason for rejection:", reason);
    setShowRejectionForm(false);
  };

  if (status === "Pending") {
    return (
      <TaskDetails
        form={<ButtonComp fnc={handleRejectClick} />}
        pop={showRejectionForm ? <RejectionForm onReject={handleReject} /> : ""}
      />
    );
  } else if (status === "In Transit") {
    return (
      <TaskDetails
        form={
          <TaskForm
            d1="name"
            d2={"982130807"}
            d3="trucking co"
            d4="Weight"
            d5="Date"
            d6="time"
            img={LocationImg}
          />
        }
      />
    );
  } else if (status === "Completed") {
    return (
      <TaskDetails
        form={
          <TaskForm
            d1="name"
            d2={"982130807"}
            d3="trucking co"
            d4="Weight"
            d5="Date"
            d6="time"
            img={LocationImg}
          />
        }
      />
    );
  }
};
export default TaskDetailsPage;

const TaskDetails = ({ form, pop }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "80%",
      }}
    >
      {pop}
      <div style={{ width: "100%" }}>
        <h2>Task Details</h2>
        <StatusDetails
          t1={"Pickup Location"}
          t2="Dropoff Location"
          d1={"Location"}
          d2="Location"
        />
        <StatusDetails t1={"Gain"} t2={"Assigned By"} d1={"80"} d2={"Admin"} />
        <StatusDetails t1={"Date"} t2={"Time"} d1={"Date"} d2={"Time"} />
      </div>
      {form}
    </div>
  );
};

const ButtonComp = ({ fnc }) => {
  const [btn, setbtn] = useState(false);

  const handleAcceptClick = () => {
    setbtn(true);
  };

  return (
    <div
      style={{
        height: "50%",
        marginRight: "3.3rem",
      }}
    >
      {btn && (
        <div className="mt-2">
          <span style={{ fontWeight: "500", fontSize: "18px" }}>
            {" "}
            Live Location
          </span>
          {/* <ColorSwitch /> */}
        </div>
      )}

      <div
        style={{
          display: "flex",
          width: "100%",
          height: "80%",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <button
          style={{
            backgroundColor: "transparent",
            borderRadius: "6px",
            border: "1px solid #DD0000",
            color: "#DD0000",
            padding: "10px",
            width: "8rem",
            height: "3rem",
            marginRight: "10px",
          }}
          onClick={fnc}
        >
          {!btn ? "Reject" : "Cancel"}
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
          onClick={handleAcceptClick}
        >
          {btn ? "Accept" : "Save"}
        </button>
      </div>
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
// function ColorSwitch() {
//   return (
//     <div>
//       <YellowSwitch {...label} defaultChecked />
//     </div>
//   );
// }
// const YellowSwitch = styled(Switch)(({ theme }) => ({
//   "& .MuiSwitch-switchBase.Mui-checked": {
//     color: yellow[600],
//     "&:hover": {
//       backgroundColor: alpha(yellow[600], theme.palette.action.hoverOpacity),
//     },
//   },
//   "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
//     backgroundColor: yellow[600],
//   },
// }));

// const label = { inputProps: { "aria-label": "Color switch demo" } };
