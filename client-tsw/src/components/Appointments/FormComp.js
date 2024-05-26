import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { createAppointmentService } from "../../APIServices/Appointment/AppointmentService";
import { useAuth } from "../../context/AuthContext";
import useFetch from "../../Hooks/useFetch";

const FormComp = () => {
  const [appoint, setAppoint] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [auth] = useAuth();
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setAppoint({ ...appoint, [name]: files ? files[0] : value });
    if (files) {
      setFileName({ ...fileName, [name]: files[0]?.name });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(appoint);
    appoint.driverId = auth?.user?._id;
    appoint.name = auth?.user?.name;
    appoint.phone = auth?.user?.phone;
    appoint.email = auth?.user?.email;
    try {
      const { data } = await createAppointmentService(appoint);
      if (data.message) {
        toast.error(data?.message);
      }
      toast.success(data);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <>
      <div
        className="appointment-form"
        style={{ width: "100%", overflow: "hidden", margin: "50px" }}
      >
        <form action="" style={{ width: "100%" }} onSubmit={handleSubmit}>
          <div style={{ width: "100%" }}>
            <h2 style={{ marginBottom: "-10px" }}>Personal Information</h2>
            <DoubleInput
              name1="name"
              value1={auth?.user?.name}
              value2={auth?.user?.email}
              name2="email"
              handleChange={handleChange}
              fileName={fileName}
              title1={"Name"}
              title2={"Email"}
            />
            <DoubleInput
              name1="truckNumber"
              name2="model"
              fileName={fileName}
              handleChange={handleChange}
              title1={"Truck Number"}
              title2={"Truck Model"}
            />
            <DoubleInput
              name1="phone"
              name2="driverLicense"
              value1={auth?.user?.phone}
              fileName={fileName}
              handleChange={handleChange}
              title1={"Phone Number"}
              title2={"Driving License"}
            />
          </div>

          <div style={{ marginTop: "25px" }}>
            <div style={{ width: "100%" }}>
              <h2 style={{ marginBottom: "-10px" }}> Available Slot</h2>

              <DoubleSelect
                name1="location"
                name2="workshop"
                fileName={fileName}
                handleChange={handleChange}
                title1={"Location"}
                title2={"Workshop"}
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
                  onChange={handleChange}
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
            </div>
          </div>

          <div style={{ width: "50%", marginTop: "10px" }}>
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
              type="date"
              placeholder={"Select Date"}
              name="timeSlot"
              onChange={handleChange}
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
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              paddingRight: "50px",
            }}
          >
            <button
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
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormComp;

const DoubleInput = ({
  name1,
  value1,
  value2,
  name2,
  title1,
  title2,
  fileName,
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
        <input
          type="text"
          placeholder={title1}
          name={name1}
          value={value1}
          disabled={value1 ? true : false}
          onChange={handleChange}
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
          {title2}
        </p>
        <input
          type="text"
          placeholder={title2}
          name={name2}
          onChange={handleChange}
          value={value2}
          disabled={value2 ? true : false}
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

const DoubleSelect = ({ name1, name2, title1, title2, handleChange }) => {
  const { data } = useFetch("/workshop/");
  const [workshop, setWorkshop] = useState([]);
  useEffect(() => {
    setWorkshop(data);
  }, [data]);
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
          onChange={handleChange}
          placeholder={"abc"}
          name={name1}
          style={{
            width: "90%",
            border: "1px solid rgba(208, 213, 221, 1)",
            borderRadius: "8px",
            height: "35px",
            padding: "0px 14px 0px 14px",
            marginTop: "-15px",
          }}
        >
          <option value="">Select Location</option>
          {workshop?.map((val, key) => (
            <option
              className="text-capitalize"
              key={val?._id}
              value={val?.location}
            >
              {val?.location}
            </option>
          ))}
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
          onChange={handleChange}
          name={name2}
          style={{
            width: "90%",
            border: "1px solid rgba(208, 213, 221, 1)",
            borderRadius: "8px",
            height: "35px",
            padding: "0px 14px 0px 14px",
            marginTop: "-15px",
          }}
        >
          <option value="">Select Workshop</option>
          {workshop?.map((val, key) => (
            <option className="text-capitalize" key={val?._id} value={val?._id}>
              {val?.workshop}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
