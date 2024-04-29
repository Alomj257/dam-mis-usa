import React from "react";
import CompleteStatusSvg from "../../assets/Appointment/CompleteStatusSvg";
import CancelStatusSvg from "../../assets/Appointment/CancelStatusSvg";
import PendingStatusSvg from "../../assets/Appointment/PendingStatusSvg";
import ConfirmStatusSvg from "../../assets/Appointment/ConfirmStatusSvg";

const AvailableSlot = ({ status }) => {
  if (status === "Pending") {
    return (
      <AvailableSlotPending
        status={
          <StatusComp
            icon={<PendingStatusSvg />}
            status={"Pending"}
            color={"#DDAF0A"}
          />
        }
      />
    );
  } else if (status === "Cancelled") {
    return (
      <AvailableSlotCancelled
        status={
          <StatusComp
            icon={<CancelStatusSvg />}
            status={"Cancelled"}
            color="#DD0000"
          />
        }
      />
    );
  } else if (status === "Confirm") {
    return (
      <AvailableSlotConfirm
        status={
          <StatusComp
            icon={<ConfirmStatusSvg />}
            status={"Confirm"}
            color="#047A3A"
          />
        }
      />
    );
  } else if (status === "Completed") {
    return (
      <AvailableSlotCompleted
        status={
          <StatusComp
            icon={<StatusComp icon={<CompleteStatusSvg />} />}
            status={"Completed"}
            color="#047A3A"
          />
        }
      />
    );
  }
};

export default AvailableSlot;

const AvailableSlotPending = ({ status }) => {
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
            repudiandae officia! Placeat voluptatibus facere nobis quaerat
            exercitationem odit accusantium corporis aliquam?{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

const AvailableSlotCancelled = ({ status }) => {
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
              marginTop: "-15px",
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
              height: "70px",
              padding: "10px 14px 10px 14px",
              color: "#667085",
              marginTop: "-15px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            pariatur quam aut enim eveniet doloribus iste necessitatibus nemo
            repudiandae officia! Placeat voluptatibus facere nobis quaerat
            exercitationem odit accusantium corporis aliquam?{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

const AvailableSlotConfirm = ({ status }) => {
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
              marginTop: "-15px",
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
    </div>
  );
};

const arr = ["abc", "def", "ghi"];

const AvailableSlotCompleted = ({ status }) => {
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
              marginTop: "-15px",
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
          Problem
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
            marginTop: "-15px",
          }}
        >
          Mechanic Name
        </p>
      </div>

      <StatusDetails t1="Total Bill" t2="Bill Paid" d1="2000" d2="2000" />
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
const StatusComp = ({ icon, status, color }) => {
  return (
    <div style={{ display: "flex" }}>
      {icon}
      <span style={{ color: color, marginLeft: "7px" }}>{status}</span>
    </div>
  );
};
