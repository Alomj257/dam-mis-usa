import React, { useEffect } from "react";
import { useState } from "react";
import "./Register.css";
import TruckLogo from "../../../assets/Auth/Truck_logo";
import GoogleIcon from "../../../assets/Auth/GoogleIcon";
import HideIcon from "../../../assets/Auth/HideIcon";
import ShowIcon from "../../../assets/Auth/ShowIcon";
import UploadSvg from "../../../assets/Auth/Upload_Svg";
import { registerService } from "../../../APIServices/Auth/AuthService";
import { toast } from "react-toastify";
import useFetch from "../../../Hooks/useFetch";
function Register() {
  const [type, setType] = useState(false);
  const [typeCP, setTypeCP] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [user, setUser] = useState({ gender: "Male" });
  const [fileName, setFileName] = useState(null);

  const [field, setfield] = useState("DRIVER");
  const handleChange = (e) => {
    setfield(e.target.value);
  };

  const handleInputChange = (event) => {
    const inputNumeric = event.target.value.replace(/\D/g, "");
    setPhoneNumber(inputNumeric);
  };
  const handleClick = () => {
    setType(!type);
  };
  const handleClickCP = () => {
    setTypeCP(!typeCP);
  };
  const handleUserChange = (e) => {
    try {
      const { name, value, files } = e.target;
      setUser({ ...user, [name]: files ? files[0] : value });
      if (files) {
        setFileName({ ...fileName, [name]: files[0]?.name });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    user.phone = phoneNumber;

    user.role = field;
    console.log(user);
    const formData = new FormData();

    try {
      for (const [key, value] of Object.entries(user)) {
        formData.append(key, value);
      }
      const { data } = await registerService(formData);
      console.log(data);
      if (data?.message) {
        toast.error(data?.message);
      }
      toast.success(data);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="main_containeer register">
      <div className="form_side d-flex flex-column justify-content-center align-items-center">
        <div className="my_form d-flex flex-column justify-content-center align-items-center ">
          <div className="logo_div d-flex align-items-center text_field">
            <TruckLogo />
            <h2 className="logo_title">DAM MIS</h2>
          </div>
          <div className="text_field d-flex flex-column align-items-center">
            <h2>Create a New Account</h2>
            <h5>
              Welcome! Please enter your asked information to complete the
              <br />
              Registration Process as {field}
            </h5>
          </div>
          <form
            action=""
            className="main_form d-flex flex-column"
            onSubmit={handleSubmit}
          >
            <div class="container">
              <div class="group">
                <select
                  name="select"
                  className="from_input"
                  onChange={handleChange}
                >
                  <option value="DRIVER">Truck Driver</option>
                  <option value="MECHANICS">Mechanic</option>
                  <option value="FIELDER">Land Manager </option>
                </select>
              </div>
              <div class="group">
                <input
                  type="text"
                  placeholder="Name *"
                  className="from_input"
                  required
                  name="name"
                  onChange={handleUserChange}
                />
              </div>

              <div class="group group-gender ">
                <div>
                  <label htmlFor="" className="lev fw-bold">
                    Gender
                  </label>
                </div>

                <div className="register-gender">
                  <div className="d-flex gap-3">
                    <label htmlFor="male" className="lev my-auto">
                      Male
                    </label>
                    <input
                      checked
                      type="radio"
                      name="gender"
                      value="Male"
                      id="male"
                      className="my-auto"
                      onClick={handleUserChange}
                    />
                  </div>
                  <div className="d-flex gap-3">
                    <label htmlFor="female" className="lev my-auto">
                      Female
                    </label>
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      id="female"
                      className="my-auto"
                      onChange={handleUserChange}
                    />
                  </div>
                  <div className="d-flex gap-3">
                    <label htmlFor="other" className="lev my-auto">
                      Other
                    </label>
                    <input
                      onChange={handleUserChange}
                      type="radio"
                      value="Other"
                      name="gender"
                      id="other"
                      className="my-auto"
                    />
                  </div>
                </div>
              </div>
              <div class="group">
                <input
                  type="email"
                  name="email"
                  onChange={handleUserChange}
                  placeholder="Email *"
                  className="from_input"
                  required
                />
              </div>
              <div class="group">
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  className="from_input"
                  id="phone"
                  value={phoneNumber}
                  onChange={handleInputChange}
                  pattern="[0-9]{10}"
                  required
                />
              </div>

              {field === "DRIVER" ? (
                <Truck
                  handleUserChange={handleUserChange}
                  fileName={fileName}
                  field={field}
                />
              ) : field === "FIELDER" ? (
                <Fielder
                  handleUserChange={handleUserChange}
                  fileName={fileName}
                  field={field}
                />
              ) : (
                <Mechanic
                  fileName={fileName}
                  handleUserChange={handleUserChange}
                />
              )}

              <div class="group d-flex align-items-center">
                <input
                  type={!type ? "password" : "text"}
                  placeholder="Password *"
                  className="from_input"
                  name="password"
                  onChange={handleUserChange}
                  required
                />
                <span className="toggleIcon" onClick={handleClick}>
                  {!type ? <HideIcon /> : <ShowIcon />}
                </span>
              </div>
              <div class="group d-flex align-items-center">
                <input
                  type={!typeCP ? "password" : "text"}
                  placeholder="Confirm Password *"
                  className="from_input"
                  name="cnfPassword"
                  onChange={handleUserChange}
                  required
                />
                <span className="toggleIcon" onClick={handleClickCP}>
                  {!typeCP ? <HideIcon /> : <ShowIcon />}
                </span>
              </div>
            </div>

            <div className="btm_group d-flex flex-column p-3">
              <button className="btn_ btn_si">Sign Up</button>
              <button className="btn_ btn_g d-flex align-items-center justify-content-center">
                <GoogleIcon />
                Sign In with Google
              </button>
            </div>

            <div className="d-flex justify-content-center">
              <span className="create">
                Already have an account? <a href="/">SIGN IN</a>
              </span>
            </div>
          </form>
        </div>
      </div>

      <div className={`image_side ${field}`}></div>
    </div>
  );
}

export default Register;

const UploadComp = ({ title, name, handleUserChange, fileName }) => {
  return (
    <>
      <div className="upload_div d-flex flex-column w-100 mt-3">
        <label htmlFor="ident" className="lev">
          {title}
        </label>
        <div className="position-relative identity ">
          <label htmlFor={name} className="d-flex flex-column text-center">
            <span>
              {" "}
              <UploadSvg />{" "}
            </span>
            <input
              type="file"
              id={name}
              name={name}
              style={{ opacity: "0" }}
              onChange={handleUserChange}
            />
            {fileName && fileName[name] ? (
              <span>{fileName[name]}</span>
            ) : (
              <>
                {" "}
                <span className="fw-bold " style={{ color: "#FFA93D" }}>
                  Click to Upload{" "}
                  <span
                    style={{
                      color: "#ffffff",
                      fontWeight: "400",
                      fontSize: "14px",
                    }}
                  >
                    or drag and drop
                  </span>
                </span>
                <small>SVG, PNG, JPG or GIF (max. 800x400px)</small>
              </>
            )}
          </label>
        </div>
      </div>
    </>
  );
};
const Truck = ({ handleUserChange, fileName }) => {
  return (
    <>
      <div class="group">
        <input
          type="text"
          name="truckNumber"
          onChange={handleUserChange}
          placeholder="Truck Number"
          className="from_input"
        />
      </div>
      <UploadComp
        fileName={fileName}
        title={"Driver License *"}
        handleUserChange={handleUserChange}
        name="driverLicence"
      />

      <div class="group">
        <input
          type="text"
          placeholder="Address *"
          className="from_input"
          required
        />
      </div>

      <UploadComp
        fileName={fileName}
        title={"Truck Photo"}
        name="truckPhoto"
        handleUserChange={handleUserChange}
      />
      <UploadComp
        fileName={fileName}
        title={"Selfie *"}
        name="profile"
        handleUserChange={handleUserChange}
      />
    </>
  );
};
const Fielder = ({ handleUserChange, fileName }) => {
  return (
    <>
      <div class="group">
        <input
          type="text"
          placeholder="Address *"
          className="from_input"
          required
        />
      </div>

      <UploadComp
        fileName={fileName}
        title={"Selfie *"}
        name="profile"
        handleUserChange={handleUserChange}
      />
    </>
  );
};
const Mechanic = ({ handleUserChange, fileName }) => {
  const { data } = useFetch("/workshop/");
  const [workshop, setWorkshop] = useState([]);
  useEffect(() => {
    setWorkshop(data?.workshops);
  }, [data?.workshops]);
  return (
    <>
      <div class="group">
        <select
          type="text"
          placeholder="Workshop Name *"
          className="from_input"
          name="workshop"
          onChange={handleUserChange}
          required
        >
          <option value="">Select Workshop</option>
          {workshop?.map((val, index) => (
            <option key={index} className="text-capitalize" value={val?._id}>
              {val?.workshop}
            </option>
          ))}
        </select>
      </div>
      <div class="group">
        <input
          type="text"
          placeholder="Address *"
          className="from_input"
          name="address"
          onChange={handleUserChange}
          required
        />
      </div>
      <UploadComp
        title={"Selfie *"}
        name="profile"
        fileName={fileName}
        handleUserChange={handleUserChange}
      />
      <UploadComp
        title={"ID Proof *"}
        name="idProof"
        fileName={fileName}
        handleUserChange={handleUserChange}
      />
    </>
  );
};
