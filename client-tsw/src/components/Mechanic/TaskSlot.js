import React, { useState } from "react";
import PendingStatusSvg from "../../assets/Appointment/PendingStatusSvg";
import CompleteStatusSvg from "../../assets/Appointment/CompleteStatusSvg";
import CancellStatusSvg from "../../assets/Appointment/CancelStatusSvg";
import RejectionForm from "../Popup/Popup";

const TaskSlot = ({ s }) => {
  if (s === "Completed") {
    return (
      <TaskFormCompleted
        status={
          <StatusComp
            icon={<CompleteStatusSvg />}
            status={"Completed"}
            color="#047A3A"
          />
        }
      />
    );
  } else if (s === "Rejected") {
    return (
      <TaskFormRejected
        status={
          <StatusComp
            icon={<CancellStatusSvg />}
            status={"Cancelled"}
            color="rgba(221, 0, 0, 1)"
          />
        }
      />
    );
  } else if (s === "In Progress") {
    return (
      <TaskFormInProgress
        status={
          <StatusComp
            icon={<PendingStatusSvg />}
            status={"In Progress"}
            color="rgba(221, 175, 10, 1)"
          />
        }
      />
    );
  } else if (s === "Pending") {
    return (
      <TaskFormPending
        status={
          <StatusComp
            icon={<PendingStatusSvg />}
            status={"Pending"}
            color="rgba(221, 175, 10, 1)"
          />
        }
      />
    );
  }
};
export default TaskSlot;

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

const TaskFormPending = ({ status }) => {
  const [showRejectionForm, setShowRejectionForm] = useState(false);

  const handleRejectClick = () => {
    setShowRejectionForm(true);
  };

  const handleReject = (reason) => {
    // Handle rejection logic here, like sending the reason to the server
    console.log("Reason for rejection:", reason);
    setShowRejectionForm(false);
  };

  return (
    <div style={{ marginTop: "25px" }}>
      {showRejectionForm ? <RejectionForm onReject={handleReject} /> : ""}

      <div style={{ width: "100%" }}>
        <h2 style={{ marginBottom: "10px" }}> Available Slot</h2>

        <StatusDetails t1="Status" t2="Date" d1={status} d2="Date" />
        <StatusDetails
          t1="Location"
          t2="Workshop"
          d1="Location"
          d2="Workshop"
        />
        <div style={{ width: "106%", marginTop: "10px" }}>
          <p
            style={{
              fontWeight: "500",
              fontSize: "16px",
              color: "#344054",
            }}
          >
            Problem
          </p>
          <p
            type="text"
            placeholder="Enter Problem"
            style={{
              width: "90%",
              border: "1px solid rgba(208, 213, 221, 1)",
              borderRadius: "8px",

              padding: "10px 14px 10px 14px",
              color: "#667085",
              marginTop: "-15px",
            }}
          >
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            pariatur quam aut enim eveniet doloribus iste necessitatibus nemo
            repudiandae officia! Placeat voluptatibus facere nobis quaerat Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Tempore pariatur
            quam aut enim eveniet doloribus iste necessitatibus nemo repudiandae
            officia! Placeat voluptatibus facere nobis quaerat
          </p>
        </div>

        <div
          style={{
            display: "flex",
            width: "96%",
            height: "80%",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            paddingTop: "20px",
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
            onClick={handleRejectClick}
          >
            Reject
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
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

const TaskFormRejected = ({ status }) => {
  return (
    <>
      <div style={{ marginTop: "25px" }}>
        <div style={{ width: "100%" }}>
          <h2 style={{ marginBottom: "10px" }}> Available Slot</h2>

          <StatusDetails t1="Status" t2="Date" d1={status} d2="Date" />

          <div style={{ width: "106%", marginTop: "10px" }}>
            <p
              style={{
                fontWeight: "500",
                fontSize: "16px",
                color: "#344054",
              }}
            >
              Problem
            </p>
            <p
              type="text"
              placeholder="Enter Problem"
              style={{
                width: "90%",
                border: "1px solid rgba(208, 213, 221, 1)",
                borderRadius: "8px",

                padding: "10px 14px 10px 14px",
                color: "#667085",
                // marginTop: "-15px",
              }}
            >
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              pariatur quam aut enim eveniet doloribus iste necessitatibus nemo
              repudiandae officia! Placeat voluptatibus facere nobis quaerat
              exercitationem odit accusantium corporis aliquam?{" "}
            </p>
          </div>
          <StatusDetails
            t1="Location"
            t2="Workshop"
            d1="Location"
            d2="Workshop"
          />
          <StatusDetails
            t1="Mechanic"
            t2="Phone"
            d1="Mechanic Name"
            d2="9801428092"
          />

          <div style={{ width: "106%", marginTop: "10px" }}>
            <p
              style={{
                fontWeight: "500",
                fontSize: "16px",
                color: "#344054",
              }}
            >
              Reason of Cancellation
            </p>
            <p
              type="text"
              placeholder="Enter Problem"
              style={{
                width: "90%",
                border: "1px solid rgba(208, 213, 221, 1)",
                borderRadius: "8px",

                padding: "10px 14px 10px 14px",
                color: "#667085",
                // marginTop: "-15px",
              }}
            >
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              pariatur quam aut enim eveniet doloribus iste necessitatibus nemo
              repudiandae officia! Placeat voluptatibus facere nobis quaerat
              exercitationem odit accusantium corporis aliquam?{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const arr = ["abc", "def", "ghi"];

const TaskFormCompleted = ({ status }) => {
  return (
    <div style={{ marginTop: "25px" }}>
      <div style={{ width: "100%" }}>
        <h2 style={{ marginBottom: "10px" }}> Available Slot</h2>

        <StatusDetails t1="Status" t2="Date" d1={status} d2="Date" />

        <div style={{ width: "106%", marginTop: "10px" }}>
          <p
            style={{
              fontWeight: "500",
              fontSize: "16px",
              color: "#344054",
            }}
          >
            Problem
          </p>
          <p
            type="text"
            placeholder="Enter Problem"
            style={{
              width: "90%",
              border: "1px solid rgba(208, 213, 221, 1)",
              borderRadius: "8px",

              padding: "10px 14px 10px 14px",
              color: "#667085",
            }}
          >
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            pariatur quam aut enim eveniet doloribus iste necessitatibus nemo
            repudiandae officia! Placeat voluptatibus facere nobis quaerat
            exercitationem odit accusantium corporis aliquam?{" "}
          </p>
        </div>
        <StatusDetails
          t1="Location"
          t2="Workshop"
          d1="Location"
          d2="Workshop"
        />
        <StatusDetails
          t1="Mechanic"
          t2="Phone"
          d1="Mechanic name"
          d2="126387091"
        />
      </div>
      <div>
        Parts Fixed
        {arr.map((e, i) => (
          <StatusComp
            key={i}
            icon={<CompleteStatusSvg />}
            status={e}
            color="rgba(0, 151, 69, 1)"
          />
        ))}
      </div>

      <div style={{ width: "106%", marginTop: "10px" }}>
        <p
          style={{
            fontWeight: "500",
            fontSize: "16px",
            color: "#344054",
          }}
        >
          Extras
        </p>
        <p
          type="text"
          placeholder="Enter Problem"
          style={{
            width: "90%",
            display: "flex",
            alignItems: "center",
            border: "1px solid rgba(208, 213, 221, 1)",
            borderRadius: "8px",
            height: "35px",
            padding: "14px",
            color: "#667085",
          }}
        >
          Mechanic Name
        </p>
      </div>

      <StatusDetails t1="Total Bill" t2="Bill Paid" d1="2000" d2="2000" />
    </div>
  );
};

const TaskFormInProgress = ({ status }) => {
  return (
    <div style={{ marginTop: "25px" }}>
      <div style={{ width: "100%" }}>
        <h2 style={{ marginBottom: "10px" }}> Available Slot</h2>

        <StatusDetails t1="Status" t2="Date" d1={status} d2="Date" />
        <StatusDetails
          t1="Location"
          t2="Workshop"
          d1="Location"
          d2="Workshop"
        />
        <div style={{ width: "106%", marginTop: "10px" }}>
          <p
            style={{
              fontWeight: "500",
              fontSize: "16px",
              color: "#344054",
            }}
          >
            Problem
          </p>
          <p
            type="text"
            placeholder="Enter Problem"
            style={{
              width: "90%",
              border: "1px solid rgba(208, 213, 221, 1)",
              borderRadius: "8px",

              padding: "10px 14px 10px 14px",
              color: "#667085",
              marginTop: "-15px",
            }}
          >
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            pariatur quam aut enim eveniet doloribus iste necessitatibus nemo
            repudiandae officia! Placeat voluptatibus facere nobis quaerat Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Tempore pariatur
            quam aut enim eveniet doloribus iste necessitatibus nemo repudiandae
            officia! Placeat voluptatibus facere nobis quaerat
          </p>
        </div>

        <div
          style={{
            display: "flex",
            width: "96%",
            height: "80%",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            paddingTop: "20px",
          }}
        >
          <button
            style={{
              backgroundColor: "#054857",
              borderRadius: "6px",
              border: "1px solid #054857",
              color: "white",
              padding: "10px",
              width: "13rem",
              height: "3rem",
            }}
          >
            Mark Complete
          </button>
        </div>
      </div>
    </div>
  );
};

const StatusComp = ({ icon, status, color }) => {
  return (
    <div style={{ display: "flex" }}>
      {icon}
      <span style={{ color: color, marginLeft: "7px" }}>{status}</span>
    </div>
  );
};
