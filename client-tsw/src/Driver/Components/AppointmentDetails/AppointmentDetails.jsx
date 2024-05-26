import React, { useEffect, useState } from "react";
import "./AppointmentDetails.css";
import { useLocation } from "react-router-dom";
import CompleteStatusSvg from "../../../assets/Appointment/CompleteStatusSvg";
import { haldleStatus } from "../AppointmentTable/AppointmentTable";
const AppointmentDetails = () => {
  const { state } = useLocation();
  // const path = pathname.trim().split("/")[1];

  return (
    <div className="appointment-details">
      <div style={{ width: "100%", overflow: "hidden", margin: "50px" }}>
        <form action="" style={{ width: "100%" }}>
          <div style={{ width: "100%" }}>
            {" "}
            <h2 style={{ marginBottom: "-10px" }}>Personal Information</h2>{" "}
            <DoubleInput
              name1="name"
              name2="email"
              state={state}
              title1={"Name"}
              title2={"Email"}
            />
            <DoubleInput
              name1="truckNumber"
              state={state}
              name2="model"
              title1={"Truck Number"}
              title2={"Truck Model"}
            />
            <DoubleInput
              name1="phone"
              name2="driverLicense"
              title1={"Phone Number"}
              state={state}
              title2={"Driving License"}
            />
          </div>

          <div style={{ marginTop: "25px" }}>
            <div style={{ width: "100%" }}>
              <h2 style={{ marginBottom: "-10px" }}> Available Slot</h2>
              <DoubleInput
                name1="status"
                name2="timeSlot"
                title1={"Status"}
                state={state}
                title2={"Date"}
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
                <textarea
                  type="text"
                  placeholder="Enter Problem"
                  name="description"
                  value={state?.description}
                  disabled={state?.description}
                  style={{
                    width: "90%",
                    border: "1px solid rgba(208, 213, 221, 1)",
                    borderRadius: "8px",
                    height: "70px",
                    padding: "10px 14px 10px 14px",
                    marginTop: "-15px",
                  }}
                />
              </div>
              <DoubleSelect
                name1="location"
                name2="workshop"
                title1={"Location"}
                title2={"Workshop"}
                state={state}
              />
              <DoubleInput
                name1="mechanics"
                name2="phone"
                title1={"Mechanics"}
                state={state}
                title2={"Phone"}
              />
              <div style={{ width: "106%", marginTop: "10px" }}>
                <p
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#344054",
                  }}
                >
                  Parts
                </p>
                <div className="parts">
                  <div className="d-flex gap-2 text-success my-2 align-items-center">
                    <CompleteStatusSvg /> <small>parts name</small>
                  </div>
                  <div className="d-flex gap-2 text-success my-2 align-items-center">
                    <CompleteStatusSvg /> <small>parts name</small>
                  </div>
                  <div className="d-flex gap-2 text-success my-2 align-items-center">
                    <CompleteStatusSvg /> <small>parts name</small>
                  </div>
                </div>
              </div>
            </div>
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
            <input
              type="text"
              placeholder="Enter Problem"
              name="description"
              value={state?.extra}
              disabled={state?.extra}
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
          <DoubleInput
            name1="totalBill"
            name2="Paid"
            state={state}
            title1={"Total Bill"}
            title2={"Bill Paid "}
          />
          {state?.status === "Cancelled" && (
            <div style={{ width: "106%", marginTop: "10px" }}>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#344054",
                }}
              >
                Reason for cancellation
              </p>
              <textarea
                type="text"
                placeholder="Enter Problem"
                name="description"
                value={state?.description}
                disabled={state?.description}
                style={{
                  width: "90%",
                  border: "1px solid rgba(208, 213, 221, 1)",
                  borderRadius: "8px",
                  height: "70px",
                  padding: "10px 14px 10px 14px",
                  marginTop: "-15px",
                }}
              />
            </div>
          )}
          {/* <div style={{ width: "50%", marginTop: "10px" }}>
            <p
              style={{
                fontWeight: "500",
                fontSize: "16px",
                color: "#344054",
              }}
            >
              Date
            </p>
            <input
              type="text"
              disabled={state?.timeSlot}
              placeholder={"Select Date"}
              name="timeSlot"
              value={state?.timeSlot}
              style={{
                width: "90%",
                border: "1px solid rgba(208, 213, 221, 1)",
                borderRadius: "8px",
                height: "35px",
                padding: "10px 14px 10px 14px",
                marginTop: "-15px",
              }}
            />
          </div> */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              paddingRight: "50px",
            }}
          >
            {/* <button
              style={{
                backgroundColor: "transparent",
                borderRadius: "6px",
                border: "1px solid #054857",
                padding: "10px",
                width: "8rem",
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
              }}
            >
              Save
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentDetails;

const DoubleInput = ({
  name1,
  value1,
  value2,
  state,
  name2,
  title1,
  title2,
  fileName,
  handleChange,
}) => {
  const [status, setStatus] = useState("");
  useEffect(() => {
    const getStatus = () => {
      const stat = haldleStatus(state?.status);
      setStatus(stat);
    };
    if (name1 === "status" || name2 === "status") {
      getStatus();
    }
  }, [name1, name2, state?.status]);
  return (
    <div style={{ display: "flex", width: "100%", marginTop: "10px" }}>
      <div style={{ width: "50%" }}>
        <p
          style={{
            fontWeight: "500",
            fontSize: "16px",
            color: "#344054",
          }}
        >
          {title1}
        </p>
        {name1 === "status" || name2 === "status" ? (
          <button
            disabled={state[name1] ? true : false}
            className="d-flex align-items-center mt-1 "
            style={{
              width: "90%",
              border: "1px solid rgba(208, 213, 221, 1)",
              borderRadius: "8px",
              height: "35px",
              padding: "10px 14px 10px 14px",
              marginTop: "-15px",
            }}
          >
            {status}
          </button>
        ) : (
          <input
            type="text"
            placeholder={title1}
            name={name1}
            value={state[name1] ? state[name1] : ""}
            disabled={state[name1] ? true : false}
            style={{
              width: "90%",
              border: "1px solid rgba(208, 213, 221, 1)",
              borderRadius: "8px",
              height: "35px",
              padding: "10px 14px 10px 14px",
              marginTop: "-15px",
            }}
          />
        )}
      </div>
      <div style={{ width: "50%" }}>
        <p
          style={{
            fontWeight: "500",
            fontSize: "16px",
            color: "#344054",
          }}
        >
          {title2}
        </p>
        <input
          type="text"
          placeholder={title2}
          name={name2}
          value={state[name2]}
          disabled={state[name2] ? true : false}
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
  );
};

const DoubleSelect = ({
  name1,
  name2,
  title1,
  state,
  title2,
  handleChange,
}) => {
  return (
    <div style={{ display: "flex", width: "100%", marginTop: "10px" }}>
      <div style={{ width: "50%" }}>
        <p
          style={{
            fontWeight: "500",
            fontSize: "16px",
            color: "#344054",
          }}
        >
          {title1}
        </p>
        <select
          placeholder={"abc"}
          name={name1}
          disabled={state[name1]}
          style={{
            width: "90%",
            border: "1px solid rgba(208, 213, 221, 1)",
            borderRadius: "8px",
            height: "35px",
            padding: "0px 14px 0px 14px",
            marginTop: "-15px",
          }}
        >
          <option value="">{state[name1] || "Select Location"}</option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </select>
      </div>
      <div style={{ width: "50%" }}>
        <p
          style={{
            fontWeight: "500",
            fontSize: "16px",
            color: "#344054",
          }}
        >
          {title2}
        </p>
        <select
          placeholder={"abc"}
          name={name2}
          disabled={state[name2]}
          style={{
            width: "90%",
            border: "1px solid rgba(208, 213, 221, 1)",
            borderRadius: "8px",
            height: "35px",
            padding: "0px 14px 0px 14px",
            marginTop: "-15px",
          }}
        >
          <option value="">{state[name2] || "select workshop"}</option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </select>
      </div>
    </div>
  );
};
