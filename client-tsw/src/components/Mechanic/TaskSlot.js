import React, { useState } from "react";
import PendingStatusSvg from "../../assets/Appointment/PendingStatusSvg";
import CompleteStatusSvg from "../../assets/Appointment/CompleteStatusSvg";
import CancellStatusSvg from "../../assets/Appointment/CancelStatusSvg";
import RejectionForm from "../Popup/Popup";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import { acceptRequestService } from "../../APIServices/Appointment/AppointmentService";
import WorkshoName from "../../Utils/WorkshoName";

const TaskSlot = ({ s }) => {
  if (s === "Complete") {
    return (
      <TaskFormCompleted
        status={
          <StatusComp
            icon={<CompleteStatusSvg />}
            status={"Complete"}
            color="#047A3A"
          />
        }
      />
    );
  } else if (s === "Rejected" || s === "Cancelled") {
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
  } else if (s === "In Progress" || s === "Confirm") {
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
          {name2 === "workshop" ? (
            <WorkshoName id={state[name2]} />
          ) : (
            state[name2]
          )}
        </p>
      </div>
    </div>
  );
};

const TaskFormPending = ({ status }) => {
  const [showRejectionForm, setShowRejectionForm] = useState(false);
  const { state } = useLocation();
  const [auth] = useAuth();
  const acceptRequest = async (repairId) => {
    try {
      const details = {
        mechanicsId: auth?.user?._id,
        repairId,
        startTime: new Date(),
        endTime: new Date(),
      };
      const { data } = await acceptRequestService(details);
      if (data?.message) {
        toast.error(data?.message);
      }
      toast.success(data);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

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
      {showRejectionForm ? (
        <RejectionForm appoinetmentId={state?._id} onReject={handleReject} />
      ) : (
        ""
      )}

      <div style={{ width: "100%" }}>
        <h2 style={{ marginBottom: "10px" }}> Available Slot</h2>

        <StatusDetails
          name1="status"
          name2="timeSlot"
          t1="Status"
          t2="Date"
          d1={status}
          d2="Date"
        />
        <StatusDetails
          name1="location"
          name2="workshop"
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
            {state?.description}
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
            onClick={() => acceptRequest(state?._id)}
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
  const { state } = useLocation();
  return (
    <>
      <div style={{ marginTop: "25px" }}>
        <div style={{ width: "100%" }}>
          <h2 style={{ marginBottom: "10px" }}> Available Slot</h2>

          <StatusDetails
            name1="status"
            name2="timeSlot"
            t1="Status"
            t2="Date"
            d1={status}
            d2="Date"
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
                // marginTop: "-15px",
              }}
            >
              {state?.description}
            </p>
          </div>
          <StatusDetails
            name1="location"
            name2="workshop"
            t1="Location"
            t2="Workshop"
            d1="Location"
            d2="Workshop"
          />
          <StatusDetails
            name1="mechanic"
            name2="phone"
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
              {
                state?.acceptRepairRequest?.reject[
                  state?.acceptRepairRequest?.reject?.length - 1
                ]?.reason
              }
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const arr = ["abc", "def", "ghi"];

const TaskFormCompleted = ({ status }) => {
  const { state } = useLocation();
  return (
    <div style={{ marginTop: "25px" }}>
      <div style={{ width: "100%" }}>
        <h2 style={{ marginBottom: "10px" }}> Available Slot</h2>

        <StatusDetails
          name1="status"
          name2="timeSlot"
          t1="Status"
          t2="Date"
          d1={status}
          d2="Date"
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
            }}
          >
            {" "}
            {state?.description}
          </p>
        </div>
        <StatusDetails
          name1="location"
          name2="workshop"
          t1="Location"
          t2="Workshop"
          d1="Location"
          d2="Workshop"
        />
        <StatusDetails
          name1="mechanic"
          name2="phone"
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
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <div style={{ marginTop: "25px" }}>
      <div style={{ width: "100%" }}>
        <h2 style={{ marginBottom: "10px" }}> Available Slot</h2>

        <StatusDetails
          name1="status"
          name2="timeSlot"
          t1="Status"
          t2="Date"
          d1={status}
          d2="Date"
        />
        <StatusDetails
          name1="location"
          name2="workshop"
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
            {state?.description}
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
            onClick={() =>
              navigate("/mechanic/InProgress-CompletionForm", { state: state })
            }
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
